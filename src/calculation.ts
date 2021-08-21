import { Weapon } from './stats/weapons'
import { specialRules, criticalRules } from './rules'
import { DamageMelee, DamageRanged, Defenseprofile } from './App'

function oneDiceChanceOfSuccess(successFrom: number, critFrom: number = 6) {
  const chanceOfSuccess = (7 - successFrom) * (1 / 6)
  const chanceOfCrit = (7 - critFrom) * (1 / 6)
  return chanceOfSuccess - chanceOfCrit
}

function onsDiceChanceOfMiss(successFrom: number) {
  return (successFrom - 1) * (1 / 6)
}

function oneDiceChanceOfCrit(critFrom: number = 6) {
  return (7 - critFrom) * (1 / 6)
}

export function calculateDamage(weapon: Weapon, weaponSkill: number, defenseProfile: Defenseprofile) {
  if (weapon.type === 'MELEE') {
    return calculateDamageMelee(weapon, weaponSkill, defenseProfile)
  }

  if (weapon.type === 'RANGED') {
    return calculateDamageRanged(weapon, weaponSkill, defenseProfile)
  }

  return calculateDamageMelee(weapon, weaponSkill, defenseProfile)
}

function calculateDamageRanged(weapon: Weapon, weaponSkill: number, defenseProfile: Defenseprofile): DamageRanged {
  let rolledDefenseDice = defenseProfile.defenseDice

  let weaponSkillCritical = 6

  // LETHAL 5+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    weaponSkillCritical = Math.max(5, weaponSkill)
  }

  // LETHAL 4+
  if (weapon.specialRules.includes(specialRules.LETHAL4)) {
    weaponSkillCritical = Math.max(4, weaponSkill)
  }

  // GRAV
  if (weapon.specialRules.includes(specialRules.GRAV) && defenseProfile.save <= 3) {
    weaponSkillCritical = Math.max(4, weaponSkill)
  }

  // AP1
  if (weapon.specialRules.includes(specialRules.AP1)) {
    rolledDefenseDice -= 1
  }

  // AP2
  if (weapon.specialRules.includes(specialRules.AP2)) {
    rolledDefenseDice -= 2
  }

  const adjustedWeaponSkill = Math.max(
    2,
    weapon.weaponSkillAdjustment ? weaponSkill + weapon.weaponSkillAdjustment : weaponSkill
  )

  let expectedHits = oneDiceChanceOfSuccess(adjustedWeaponSkill, weaponSkillCritical) * weapon.attackDice

  let expectedCriticalHits = oneDiceChanceOfCrit(weaponSkillCritical) * weapon.attackDice

  const chanceOfAtLeastOneCrit = Math.min(expectedCriticalHits, 1)

  // Normal
  const chanceOfSave = oneDiceChanceOfSuccess(defenseProfile.save, defenseProfile.saveCritical)
  const chanceOfSaveCritical = oneDiceChanceOfCrit(defenseProfile.saveCritical)

  let expectedSaves = chanceOfSave * rolledDefenseDice
  let expectedCriticalSaves = chanceOfSaveCritical * rolledDefenseDice

  // Critical P1
  if (weapon.criticalRules.includes(criticalRules.P1)) {
    const chanceOfNoCrit = 1 - chanceOfAtLeastOneCrit

    const p1Saves = chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSave
    const p1SaveCrits = chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSaveCritical
    const nonP1Saves = chanceOfNoCrit * rolledDefenseDice * chanceOfSave
    const nonP1SaveCrits = chanceOfNoCrit * rolledDefenseDice * chanceOfSaveCritical

    expectedSaves = p1Saves + nonP1Saves
    expectedCriticalSaves = p1SaveCrits + nonP1SaveCrits
  }

  // RENDING
  if (weapon.criticalRules.includes(criticalRules.RENDING)) {
    expectedHits -= chanceOfAtLeastOneCrit / weapon.attackDice
    expectedCriticalHits += chanceOfAtLeastOneCrit / weapon.attackDice
  }

  // CEASELESS
  if (weapon.specialRules.includes(specialRules.CEASELESS)) {
    const expectedNaturalOnes = (1 / 6) * weapon.attackDice

    expectedHits += expectedNaturalOnes * oneDiceChanceOfSuccess(weaponSkill, weaponSkillCritical)
    expectedCriticalHits += expectedNaturalOnes * oneDiceChanceOfCrit(weaponSkillCritical)
  }

  // RELENTLESS
  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = onsDiceChanceOfMiss(weaponSkill) * weapon.attackDice

    expectedHits += expectedMisses * oneDiceChanceOfSuccess(weaponSkill, weaponSkillCritical)
    expectedCriticalHits += expectedMisses * oneDiceChanceOfCrit(weaponSkillCritical)
  }

  const expectedHitDamage = Math.max(0, expectedHits - expectedSaves) * weapon.damage

  const expectedCritDamage = Math.max(0, expectedCriticalHits - expectedCriticalSaves) * weapon.damageCritical

  // MWx
  let mw = 0

  if (weapon.criticalRules.includes(criticalRules.MW3)) {
    mw = 3
  }

  if (weapon.criticalRules.includes(criticalRules.MW4)) {
    mw = 4
  }

  const expectedMortalWounds = expectedCriticalHits * mw

  // const rendingDamage = weapon.criticalRules.includes(criticalRules.RENDING)
  //   ? calculateRendingDamage(weapon, weaponSkill) -
  //     chanceOfCrit(defenseProfile.saveCritical) * defenseProfile.defenseDice *
  //   : 0;
  const expectedTotalDamage = expectedHitDamage + expectedCritDamage + expectedMortalWounds

  return {
    type: 'ranged',
    total: +expectedTotalDamage.toFixed(2),
    hit: +expectedHitDamage.toFixed(2),
    crit: +expectedCritDamage.toFixed(2),
    mw: +expectedMortalWounds.toFixed(2),
    // RENDING: rendingDamage.toFixed(2),
  }
}

function calculateDamageMelee(weapon: Weapon, weaponSkill: number, defenseProfile: Defenseprofile): DamageMelee {
  /**
   * ATTACKER basic stats
   * */
  let weaponSkillCritical = 6

  // LETHAL 5+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    weaponSkillCritical = Math.max(5, weaponSkill)
  }

  // LETHAL 4+
  if (weapon.specialRules.includes(specialRules.LETHAL4)) {
    weaponSkillCritical = Math.max(4, weaponSkill)
  }

  const adjustedWeaponSkill = Math.max(
    2,
    weapon.weaponSkillAdjustment ? weaponSkill + weapon.weaponSkillAdjustment : weaponSkill
  )

  const expectedHitsPerDie = oneDiceChanceOfSuccess(adjustedWeaponSkill, weaponSkillCritical)
  const expectedCriticalHitsPerDie = oneDiceChanceOfCrit(weaponSkillCritical)

  /**
   * DEFENDER basic stats
   * */
  let defenseWeaponSkillCritical = 6

  // LETHAL 5+
  if (defenseProfile.meleeWeapon.specialRules.includes(specialRules.LETHAL5)) {
    defenseWeaponSkillCritical = Math.max(5, defenseProfile.weaponSkill)
  }

  // LETHAL 4+
  if (defenseProfile.meleeWeapon.specialRules.includes(specialRules.LETHAL4)) {
    defenseWeaponSkillCritical = Math.max(4, defenseProfile.weaponSkill)
  }

  const defenseAdjustedWeaponSkill = Math.max(
    2,
    defenseProfile.meleeWeapon.weaponSkillAdjustment
      ? defenseProfile.weaponSkill + defenseProfile.meleeWeapon.weaponSkillAdjustment
      : defenseProfile.weaponSkill
  )

  const defenseExpectedHitsPerDie = oneDiceChanceOfSuccess(defenseAdjustedWeaponSkill, defenseWeaponSkillCritical)
  const defenseExpectedCriticalHitsPerDie = oneDiceChanceOfCrit(defenseWeaponSkillCritical)

  /** STRATEGY 1
   * Goal: attacker & defender => max damage done
   * Strategy: no parries on either side, just straight damage
   * */
  // eslint-disable-next-line
  const { damageDone1, damageTaken1 } = maxDamage()

  /** STRATEGY 2
   * Goal: attacker => max damage done, defender => min damage taken
   * Strategy: attacker does maximum damage, defender parries whenever possible
   * */
  const { damageDone2, damageTaken2 } = minDamageTakenDef()

  /** STRATEGY 3
   * Goal: attacker => min damage taken, defender => min damage taken
   * Strategy: attacker and defender parry when possible
   * */
  const { damageDone3, damageTaken3 } = minDamageTakenAtt()

  return {
    type: 'melee',
    total: {
      maxDamage: {
        done: +damageDone1.toFixed(2),
        taken: +damageTaken1.toFixed(2),
      },
      minTakenDef: {
        done: +damageDone2.toFixed(2),
        taken: +damageTaken2.toFixed(2),
      },
      minTakenAtt: {
        done: +damageDone3.toFixed(2),
        taken: +damageTaken3.toFixed(2),
      },
    },
  }

  function maxDamage() {
    const damageDone1 =
      (expectedHitsPerDie * weapon.damage + expectedCriticalHitsPerDie * weapon.damageCritical) * weapon.attackDice

    const expectedCriticalhits = Math.min(1, expectedCriticalHitsPerDie * weapon.attackDice)

    let defenseHits = defenseExpectedHitsPerDie * defenseProfile.meleeWeapon.attackDice

    // STUN
    if (weapon.criticalRules.includes(criticalRules.STUN)) {
      defenseHits -= defenseExpectedHitsPerDie * expectedCriticalhits
    }

    const defenseCrits = defenseExpectedCriticalHitsPerDie * defenseProfile.meleeWeapon.attackDice

    const damageTaken1 =
      defenseHits * defenseProfile.meleeWeapon.damage + defenseCrits * defenseProfile.meleeWeapon.damageCritical

    return { damageDone1, damageTaken1 }
  }

  function minDamageTakenDef() {
    // First unchallenged hit
    const expectedCriticalFirstHits = Math.min(1, expectedCriticalHitsPerDie * weapon.attackDice)
    const expectedNormalFirstHits = Math.min(
      Math.max(0, 1 - expectedCriticalFirstHits),
      expectedHitsPerDie * weapon.attackDice
    )

    const firstHitDamage = expectedCriticalFirstHits * weapon.damageCritical + expectedNormalFirstHits * weapon.damage

    const expectedHitsAfterFirst = expectedHitsPerDie * (weapon.attackDice - 1)
    const expectedCritsAfterFirst = expectedCriticalHitsPerDie * (weapon.attackDice - 1)
    let expectedParries = defenseExpectedHitsPerDie * defenseProfile.meleeWeapon.attackDice

    // STUN
    if (weapon.criticalRules.includes(criticalRules.STUN)) {
      expectedParries -= defenseExpectedHitsPerDie * (expectedCriticalFirstHits + expectedCritsAfterFirst)
    }

    const expectedCriticalParries = defenseExpectedCriticalHitsPerDie * defenseProfile.meleeWeapon.attackDice

    // Positive is excess crits, negative is excess critical parries
    const unparryableCrits = expectedCritsAfterFirst * 0.5

    const criticalDifference = expectedCritsAfterFirst - unparryableCrits - expectedCriticalParries
    const excessCriticalParries = criticalDifference < 0 ? -criticalDifference : 0
    const excessCriticalHits = criticalDifference > 0 ? criticalDifference : 0

    // Positive is excess hits, negative is excess parries
    let hitDifference = 0

    const unparryableHits = expectedHitsAfterFirst * 0.5

    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      // BRUTAL
      hitDifference = expectedHitsAfterFirst - unparryableHits - excessCriticalParries
    } else {
      // Normal
      hitDifference = expectedHitsAfterFirst - unparryableHits - expectedParries - excessCriticalParries
    }

    let excessParries = hitDifference < 0 ? -hitDifference : 0

    // BRUTAL
    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      excessParries += expectedParries
    }

    const excessHits = hitDifference > 0 ? hitDifference : 0

    const criticaldamageDoneAfterFirst = (excessCriticalHits + unparryableCrits) * weapon.damageCritical
    const nonCriticaldamageDoneAfterFirst = (excessHits + unparryableHits) * weapon.damage

    const damageDone2 = firstHitDamage + criticaldamageDoneAfterFirst + nonCriticaldamageDoneAfterFirst

    const excessCriticalParryDamage =
      excessParries > 0 ? Math.min(excessParries, excessCriticalParries) * defenseProfile.meleeWeapon.damageCritical : 0

    const excessParryDamage =
      Math.max(excessParries - excessCriticalParries, 0) * defenseProfile.meleeWeapon.damageCritical
    const damageTaken2 = excessCriticalParryDamage + excessParryDamage

    return { damageDone2, damageTaken2 }
  }

  function minDamageTakenAtt() {
    // First unchallenged parry
    const expectedCriticalFirstParries = Math.min(
      1,
      defenseExpectedCriticalHitsPerDie * defenseProfile.meleeWeapon.attackDice
    )
    const expectedNormalFirstParries = Math.min(
      Math.max(0, 1 - expectedCriticalFirstParries),
      defenseExpectedHitsPerDie * defenseProfile.meleeWeapon.attackDice
    )

    const expectedHits = expectedHitsPerDie * (weapon.attackDice - 1)
    const expectedCrits = expectedCriticalHitsPerDie * (weapon.attackDice - 1)

    const expectedParries =
      defenseExpectedHitsPerDie * defenseProfile.meleeWeapon.attackDice - expectedNormalFirstParries

    const expectedCriticalParries =
      defenseExpectedCriticalHitsPerDie * defenseProfile.meleeWeapon.attackDice - expectedCriticalFirstParries

    const parriesUsedAsHits = expectedParries * 0.5
    const parriesUsedAsCrits = expectedCriticalParries * 0.5

    // Positive is excess crits, negative is excess critical parries
    const criticalDifference = expectedCrits - (expectedCriticalParries - parriesUsedAsCrits)
    const excessCriticalParries = criticalDifference < 0 ? -criticalDifference : 0
    const excessCriticalHits = criticalDifference > 0 ? criticalDifference : 0

    // Positive is excess hits, negative is excess parries
    let hitDifferenceAfterParries = 0

    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      // BRUTAL
      hitDifferenceAfterParries = expectedHits - (excessCriticalParries - parriesUsedAsHits)
    } else {
      // Normal
      hitDifferenceAfterParries = expectedHits - expectedParries - (excessCriticalParries - parriesUsedAsHits)
    }

    let excessParries = hitDifferenceAfterParries < 0 ? -hitDifferenceAfterParries : 0

    // STUN
    if (weapon.criticalRules.includes(criticalRules.STUN)) {
      excessParries -= defenseExpectedHitsPerDie * Math.min(excessCriticalHits, 1)
    }

    // BRUTAL
    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      excessParries += expectedParries - parriesUsedAsHits
    }

    const excessHits = hitDifferenceAfterParries > 0 ? hitDifferenceAfterParries : 0

    const criticaldamageDoneAfterParries = excessCriticalHits * weapon.damageCritical
    const nonCriticaldamageDoneAfterParries = excessHits * weapon.damage

    const damageDone3 = criticaldamageDoneAfterParries + nonCriticaldamageDoneAfterParries

    const excessCriticalParryDamage =
      excessParries > 0 ? Math.min(excessParries, excessCriticalParries) * defenseProfile.meleeWeapon.damageCritical : 0

    const excessParryDamage =
      Math.max(excessParries - excessCriticalParries, 0) * defenseProfile.meleeWeapon.damageCritical

    const criticalParryDamageTaken =
      parriesUsedAsCrits * defenseProfile.meleeWeapon.damageCritical + excessCriticalParryDamage

    const parryDamageTaken = parriesUsedAsHits * defenseProfile.meleeWeapon.damageCritical + excessParryDamage

    if (weapon.criticalRules.includes(criticalRules.STUN)) {
      console.log(weapon.name, defenseProfile.meleeWeapon.name, {
        excessCriticalHits: +excessCriticalHits.toFixed(1),
        excessParryDamage,
        excessCriticalParryDamage,
      })
    }

    const damageTaken3 = criticalParryDamageTaken + parryDamageTaken

    return { damageDone3, damageTaken3 }
  }
}
