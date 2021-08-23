import { Weapon } from './stats/weapons'
import { specialRules, criticalRules } from './rules'
import { DamageMelee, DamageRanged, Defenseprofile } from './App'

function oneDiceChanceOfSuccess(successFrom: number, critFrom: number = 6) {
  const chanceOfSuccess = (7 - successFrom) * (1 / 6)
  const chanceOfCrit = (7 - critFrom) * (1 / 6)
  return chanceOfSuccess - chanceOfCrit
}

function oneDiceChanceOfMiss(successFrom: number) {
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

function calculateDamageRanged(weapon: Weapon, ballisticSkill: number, defenseProfile: Defenseprofile): DamageRanged {
  let rolledDefenseDice = defenseProfile.defenseDice

  let ballisticSkillCritical = 6

  // LETHAL 5+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    ballisticSkillCritical = Math.max(5, ballisticSkill)
  }

  // LETHAL 4+
  if (weapon.specialRules.includes(specialRules.LETHAL4)) {
    ballisticSkillCritical = Math.max(4, ballisticSkill)
  }

  // GRAV
  if (weapon.specialRules.includes(specialRules.GRAV) && defenseProfile.save <= 3) {
    ballisticSkillCritical = Math.max(4, ballisticSkill)
  }

  // AP1
  if (weapon.specialRules.includes(specialRules.AP1)) {
    rolledDefenseDice -= 1
  }

  // AP2
  if (weapon.specialRules.includes(specialRules.AP2)) {
    rolledDefenseDice -= 2
  }
  const weaponBallisticSkill =
    weapon.fixedWeaponBallisticSkill || ballisticSkill + (weapon.weaponBallisticSkillAdjustment || 0)

  const adjustedballisticSkill = Math.max(2, weaponBallisticSkill)

  let expectedHits = oneDiceChanceOfSuccess(adjustedballisticSkill, ballisticSkillCritical) * weapon.attackDice
  let expectedCriticalHits = oneDiceChanceOfCrit(ballisticSkillCritical) * weapon.attackDice

  // BALANCED
  if (weapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(adjustedballisticSkill) * weapon.attackDice)
    expectedHits += oneDiceChanceOfSuccess(adjustedballisticSkill, ballisticSkillCritical) * chanceOfMiss
    expectedCriticalHits += oneDiceChanceOfCrit(ballisticSkillCritical) * chanceOfMiss
  }

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

    expectedHits += expectedNaturalOnes * oneDiceChanceOfSuccess(ballisticSkill, ballisticSkillCritical)
    expectedCriticalHits += expectedNaturalOnes * oneDiceChanceOfCrit(ballisticSkillCritical)
  }

  // RELENTLESS
  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(ballisticSkill) * weapon.attackDice

    expectedHits += expectedMisses * oneDiceChanceOfSuccess(ballisticSkill, ballisticSkillCritical)
    expectedCriticalHits += expectedMisses * oneDiceChanceOfCrit(ballisticSkillCritical)
  }

  const expectedHitDamage = Math.max(0, expectedHits - expectedSaves) * weapon.damage

  const expectedCritDamage = Math.max(0, expectedCriticalHits - expectedCriticalSaves) * weapon.damageCritical

  // MWx
  let mw = 0

  if (weapon.criticalRules.includes(criticalRules.MW2)) {
    mw = 2
  }

  if (weapon.criticalRules.includes(criticalRules.MW3)) {
    mw = 3
  }

  if (weapon.criticalRules.includes(criticalRules.MW4)) {
    mw = 4
  }

  const expectedMortalWounds = expectedCriticalHits * mw

  // const rendingDamage = weapon.criticalRules.includes(criticalRules.RENDING)
  //   ? calculateRendingDamage(weapon, ballisticSkill) -
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
  let attackerWeaponSkillCritical = 6

  // LETHAL 5+ on attacker weapon
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    attackerWeaponSkillCritical = Math.max(5, weaponSkill)
  }

  // LETHAL 4+ on attacker weapon
  if (weapon.specialRules.includes(specialRules.LETHAL4)) {
    attackerWeaponSkillCritical = Math.max(4, weaponSkill)
  }

  const attackerAdjustedWeaponSkill = Math.max(
    2,
    weapon.weaponBallisticSkillAdjustment ? weaponSkill + weapon.weaponBallisticSkillAdjustment : weaponSkill
  )

  const attackerExpectedHitsPerDie = oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
  const attackerExpectedCriticalHitsPerDie = oneDiceChanceOfCrit(attackerWeaponSkillCritical)

  let attackerHits = attackerExpectedHitsPerDie * weapon.attackDice
  let attackerCrits = attackerExpectedCriticalHitsPerDie * weapon.attackDice

  // RELENTLESS on attacker weapon
  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * weapon.attackDice

    attackerHits += expectedMisses * oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    attackerCrits += expectedMisses * oneDiceChanceOfCrit(attackerWeaponSkillCritical)
  }

  // BALANCED on attacker weapon
  if (weapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * weapon.attackDice)
    attackerHits += oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical) * chanceOfMiss
    attackerCrits += oneDiceChanceOfCrit(attackerWeaponSkillCritical) * chanceOfMiss
  }

  const attackerExpectedCriticalHitsMax1 = Math.min(1, attackerCrits)

  /**
   * DEFENDER basic stats
   * */
  let defenseWeaponSkillCritical = 6

  // LETHAL 5+ on defender weapon
  if (defenseProfile.meleeWeapon.specialRules.includes(specialRules.LETHAL5)) {
    defenseWeaponSkillCritical = Math.max(5, defenseProfile.weaponSkill)
  }

  // LETHAL 4+ on defender weapon
  if (defenseProfile.meleeWeapon.specialRules.includes(specialRules.LETHAL4)) {
    defenseWeaponSkillCritical = Math.max(4, defenseProfile.weaponSkill)
  }

  const defenseAdjustedWeaponSkill = Math.max(
    2,
    defenseProfile.meleeWeapon.weaponBallisticSkillAdjustment
      ? defenseProfile.weaponSkill + defenseProfile.meleeWeapon.weaponBallisticSkillAdjustment
      : defenseProfile.weaponSkill
  )

  const defenderExpectedHitsPerDie = oneDiceChanceOfSuccess(defenseAdjustedWeaponSkill, defenseWeaponSkillCritical)
  const defenderExpectedCriticalHitsPerDie = oneDiceChanceOfCrit(defenseWeaponSkillCritical)

  let defenderHits = defenderExpectedHitsPerDie * defenseProfile.meleeWeapon.attackDice
  let defenderCrits = defenderExpectedCriticalHitsPerDie * defenseProfile.meleeWeapon.attackDice

  // STUN on attacker weapon
  if (weapon.criticalRules.includes(criticalRules.STUN)) {
    defenderHits -= defenderExpectedHitsPerDie * attackerExpectedCriticalHitsMax1
  }

  // RELENTLESS on defender weapon
  if (defenseProfile.meleeWeapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * weapon.attackDice

    defenderHits += expectedMisses * oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    defenderCrits += expectedMisses * oneDiceChanceOfCrit(attackerWeaponSkillCritical)
  }

  // BALANCED on defender weapon
  if (defenseProfile.meleeWeapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * weapon.attackDice)
    defenderHits += oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical) * chanceOfMiss
    defenderCrits += oneDiceChanceOfCrit(attackerWeaponSkillCritical) * chanceOfMiss
  }

  const defenderExpectedCriticalHitsMax1 = Math.min(1, defenderCrits)

  // STUN on defender weapon
  if (defenseProfile.meleeWeapon.criticalRules.includes(criticalRules.STUN)) {
    attackerHits -= attackerExpectedHitsPerDie * defenderExpectedCriticalHitsMax1
  }

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
    const damageDone1 = attackerHits * weapon.damage + attackerCrits * weapon.damageCritical

    const damageTaken1 =
      defenderHits * defenseProfile.meleeWeapon.damage + defenderCrits * defenseProfile.meleeWeapon.damageCritical

    return { damageDone1, damageTaken1 }
  }

  function minDamageTakenDef() {
    // First unchallenged hit
    const attackerFirstCrits = Math.min(1, attackerCrits)
    const attackerFirstHits = Math.min(Math.max(0, 1 - attackerFirstCrits), attackerHits)

    const attackerFirstHitDamage = attackerFirstCrits * weapon.damageCritical + attackerFirstHits * weapon.damage

    const attackerHitsAfterFirst =
      attackerHits - oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    const attackerCritsAfterFirst = attackerCrits - oneDiceChanceOfCrit(attackerWeaponSkillCritical)

    const unparryableAttackerCrits = attackerCritsAfterFirst * 0.5

    // Positive is excess crits, negative is excess critical parries
    const criticalDifference = attackerCritsAfterFirst - unparryableAttackerCrits - defenderCrits
    const excessDefenderCrits = criticalDifference < 0 ? -criticalDifference : 0
    const excessAttackerCrits = criticalDifference > 0 ? criticalDifference : 0

    // Positive is excess hits, negative is excess parries
    let hitDifference = 0

    const unparryableAttackerHits = attackerHitsAfterFirst * 0.5
    const parryableAttackerHits = attackerHitsAfterFirst * 0.5

    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      // BRUTAL
      hitDifference = parryableAttackerHits - excessDefenderCrits
    } else {
      // Normal
      hitDifference = parryableAttackerHits - defenderHits - excessDefenderCrits
    }

    let excessDefenderHits = hitDifference < 0 ? -hitDifference : 0

    // BRUTAL
    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      excessDefenderHits += defenderHits
    }

    const excessHits = hitDifference > 0 ? hitDifference : 0

    const attackerCritDamageAfterFirst = (excessAttackerCrits + unparryableAttackerCrits) * weapon.damageCritical
    const attackerHitDamageAfterFirst = (excessHits + unparryableAttackerHits) * weapon.damage
    const damageDone2 = attackerFirstHitDamage + attackerCritDamageAfterFirst + attackerHitDamageAfterFirst

    const defenderCritDamage = excessDefenderCrits * defenseProfile.meleeWeapon.damageCritical
    const defenderHitDamage = excessDefenderHits * defenseProfile.meleeWeapon.damage
    const damageTaken2 = defenderCritDamage + defenderHitDamage

    return { damageDone2, damageTaken2 }
  }

  function minDamageTakenAtt() {
    // First unchallenged parry
    const expectedCriticalFirstParries = Math.min(
      1,
      defenderExpectedCriticalHitsPerDie * defenseProfile.meleeWeapon.attackDice
    )
    const expectedNormalFirstParries = Math.min(
      Math.max(0, 1 - expectedCriticalFirstParries),
      defenderExpectedHitsPerDie * defenseProfile.meleeWeapon.attackDice
    )

    let expectedAttackerHits = attackerHits - defenderExpectedHitsPerDie
    let expectedAttackerCrits = attackerCrits - defenderExpectedCriticalHitsPerDie

    const expectedDefenderHits = defenderHits - expectedNormalFirstParries
    const expectedDefenderCrits = defenderCrits - expectedCriticalFirstParries

    // Should add up to 1
    const defenderHitsUsedAsStrike = expectedDefenderHits * 0.5
    const defenderHitsUsedAsParry = expectedDefenderHits * 0.5

    // Should add up to 1
    const defenderCritsUsedAsStrike = expectedDefenderCrits * 0.5
    const defenderCritsUsedAsParry = expectedDefenderCrits * 0.5

    // Positive is excess attacker crits, negative is excess defender crits
    const criticalDifference = expectedAttackerCrits - expectedDefenderCrits - defenderCritsUsedAsParry
    const excessDefenderCrits = criticalDifference < 0 ? -criticalDifference : 0
    const excessAttackerCrits = criticalDifference > 0 ? criticalDifference : 0

    // Positive is excess hits, negative is excess parries
    let hitDifference = 0

    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      // BRUTAL
      hitDifference = expectedAttackerHits - excessDefenderCrits
    } else {
      // Normal
      hitDifference = expectedAttackerHits - excessDefenderCrits - defenderHitsUsedAsParry
    }

    // FIXME we assume the defender crits are used up as parries, this is sometimes incorrect

    let excessDefenderHits = hitDifference < 0 ? -hitDifference : 0
    const excessAttackerHits = hitDifference > 0 ? hitDifference : 0

    // BRUTAL
    if (weapon.specialRules.includes(specialRules.BRUTAL)) {
      // Cannot be used as parry, because they are simple hits, so strikes instead
      excessDefenderHits += defenderHitsUsedAsParry
    }

    const attackerCritDamage = excessAttackerCrits * weapon.damageCritical
    const attackerHitDamage = excessAttackerHits * weapon.damage

    const damageDone3 = attackerCritDamage + attackerHitDamage

    const critDamageTaken = defenderCritsUsedAsStrike * defenseProfile.meleeWeapon.damageCritical
    const hitDamageTaken = (defenderHitsUsedAsStrike + excessDefenderHits) * defenseProfile.meleeWeapon.damage
    const damageTaken3 = critDamageTaken + hitDamageTaken

    return { damageDone3, damageTaken3 }
  }
}
