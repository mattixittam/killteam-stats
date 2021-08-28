import { Weapon } from './stats/weapons'
import { specialRules, criticalRules } from './rules'
import { DataSheet } from './helpers'
import { equipment } from './stats/equipment'
import { abilities } from './stats/abilities'

export interface DamageMelee {
  type: 'melee'
  total: {
    maxDamage: {
      attackerDamage: number
      attackerDead: boolean
      defenderDamage: number
      defenderDead: boolean
    }
    parryDefender: {
      attackerDamage: number
      attackerDead: boolean
      defenderDamage: number
      defenderDead: boolean
    }
    parryAttacker: {
      attackerDamage: number
      attackerDead: boolean
      defenderDamage: number
      defenderDead: boolean
    }
    parryBoth: {
      attackerDamage: number
      attackerDead: boolean
      defenderDamage: number
      defenderDead: boolean
    }
  }
}

export interface DamageRanged {
  type: 'ranged'
  total: number
  hit: number
  crit: number
  mw?: number
}

interface ProfileWeaponPair {
  profile: DataSheet
  weapon: Weapon
}

export interface AttackerDefenderPair {
  attacker: ProfileWeaponPair
  defender: ProfileWeaponPair
}

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

export function calculateDamage({ attacker, defender }: AttackerDefenderPair) {
  if (attacker.weapon.type === 'MELEE') {
    return calculateDamageMelee({ attacker, defender })
  }

  if (attacker.weapon.type === 'RANGED') {
    return calculateDamageRanged({ attacker, defender })
  }

  return calculateDamageMelee({ attacker, defender })
}

function calculateDamageRanged({ attacker, defender }: AttackerDefenderPair): DamageRanged {
  let rolledDefenseDice = defender.profile.defense

  let ballisticSkillCritical = 6

  // LETHAL 5+
  if (attacker.weapon.specialRules.includes(specialRules.LETHAL5)) {
    ballisticSkillCritical = Math.max(5, attacker.profile.ballisticSkill)
  }

  // LETHAL 4+
  if (attacker.weapon.specialRules.includes(specialRules.LETHAL4)) {
    ballisticSkillCritical = Math.max(4, attacker.profile.ballisticSkill)
  }

  // GRAV
  if (attacker.weapon.specialRules.includes(specialRules.GRAV) && defender.profile.save <= 3) {
    ballisticSkillCritical = Math.max(4, attacker.profile.ballisticSkill)
  }

  // AP1
  if (attacker.weapon.specialRules.includes(specialRules.AP1)) {
    rolledDefenseDice -= 1
  }

  // AP2
  if (attacker.weapon.specialRules.includes(specialRules.AP2)) {
    rolledDefenseDice -= 2
  }
  const weaponBallisticSkill =
    attacker.weapon.fixedWeaponBallisticSkill ||
    attacker.profile.ballisticSkill + (attacker.weapon.weaponBallisticSkillAdjustment || 0)

  const adjustedballisticSkill = Math.max(2, weaponBallisticSkill)

  let expectedHits = oneDiceChanceOfSuccess(adjustedballisticSkill, ballisticSkillCritical) * attacker.weapon.attackDice
  let expectedCriticalHits = oneDiceChanceOfCrit(ballisticSkillCritical) * attacker.weapon.attackDice

  // BALANCED
  if (attacker.weapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(adjustedballisticSkill) * attacker.weapon.attackDice)
    expectedHits += oneDiceChanceOfSuccess(adjustedballisticSkill, ballisticSkillCritical) * chanceOfMiss
    expectedCriticalHits += oneDiceChanceOfCrit(ballisticSkillCritical) * chanceOfMiss
  }

  const chanceOfAtLeastOneCrit = Math.min(expectedCriticalHits, 1)

  // Normal
  const chanceOfSave = oneDiceChanceOfSuccess(defender.profile.save, defender.profile.saveCritical)
  const chanceOfSaveCritical = oneDiceChanceOfCrit(defender.profile.saveCritical)

  let expectedSaves = chanceOfSave * rolledDefenseDice
  let expectedCriticalSaves = chanceOfSaveCritical * rolledDefenseDice

  // Critical P1
  if (attacker.weapon.criticalRules.includes(criticalRules.P1)) {
    const chanceOfNoCrit = 1 - chanceOfAtLeastOneCrit

    const p1Saves = chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSave
    const p1SaveCrits = chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSaveCritical
    const nonP1Saves = chanceOfNoCrit * rolledDefenseDice * chanceOfSave
    const nonP1SaveCrits = chanceOfNoCrit * rolledDefenseDice * chanceOfSaveCritical

    expectedSaves = p1Saves + nonP1Saves
    expectedCriticalSaves = p1SaveCrits + nonP1SaveCrits
  }

  // RENDING
  if (attacker.weapon.criticalRules.includes(criticalRules.RENDING)) {
    expectedHits -= chanceOfAtLeastOneCrit / attacker.weapon.attackDice
    expectedCriticalHits += chanceOfAtLeastOneCrit / attacker.weapon.attackDice
  }

  // CEASELESS
  if (attacker.weapon.specialRules.includes(specialRules.CEASELESS)) {
    const expectedNaturalOnes = (1 / 6) * attacker.weapon.attackDice

    expectedHits +=
      expectedNaturalOnes * oneDiceChanceOfSuccess(attacker.profile.ballisticSkill, ballisticSkillCritical)
    expectedCriticalHits += expectedNaturalOnes * oneDiceChanceOfCrit(ballisticSkillCritical)
  }

  // RELENTLESS
  if (attacker.weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attacker.profile.ballisticSkill) * attacker.weapon.attackDice

    expectedHits += expectedMisses * oneDiceChanceOfSuccess(attacker.profile.ballisticSkill, ballisticSkillCritical)
    expectedCriticalHits += expectedMisses * oneDiceChanceOfCrit(ballisticSkillCritical)
  }

  const expectedHitDamage = Math.max(0, expectedHits - expectedSaves) * attacker.weapon.damage

  const expectedCritDamage = Math.max(0, expectedCriticalHits - expectedCriticalSaves) * attacker.weapon.damageCritical

  // MWx
  let mw = 0

  if (attacker.weapon.criticalRules.includes(criticalRules.MW2)) {
    mw = 2
  }

  if (attacker.weapon.criticalRules.includes(criticalRules.MW3)) {
    mw = 3
  }

  if (attacker.weapon.criticalRules.includes(criticalRules.MW4)) {
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

export function getAttackerAttackDice(weapon: Weapon) {
  let attackDice = weapon.attackDice

  // DARK BLESSING on attacker weapon
  if (weapon.equipment.includes(equipment.DARK_BLESSING)) {
    attackDice += 1
  }

  return attackDice
}

export function calculateMeleeBasics({ attacker, defender }: AttackerDefenderPair) {
  /**
   * ATTACKER basic stats
   * */
  let attackerWeaponSkillCritical = 6

  // LETHAL 5+ on attacker weapon
  if (attacker.weapon.specialRules.includes(specialRules.LETHAL5)) {
    attackerWeaponSkillCritical = Math.max(5, attacker.profile.weaponSkill)
  }

  // LETHAL 4+ on attacker weapon
  if (attacker.weapon.specialRules.includes(specialRules.LETHAL4)) {
    attackerWeaponSkillCritical = Math.max(4, attacker.profile.weaponSkill)
  }

  const attackerAdjustedWeaponSkill = Math.max(
    2,
    attacker.weapon.weaponBallisticSkillAdjustment
      ? attacker.profile.weaponSkill + attacker.weapon.weaponBallisticSkillAdjustment
      : attacker.profile.weaponSkill
  )

  const attackerHitsPerDie = oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
  const attackerCritsPerDie = oneDiceChanceOfCrit(attackerWeaponSkillCritical)

  const attackerAttackDice = getAttackerAttackDice(attacker.weapon)

  let attackerHits = attackerHitsPerDie * attackerAttackDice
  let attackerCrits = attackerCritsPerDie * attackerAttackDice

  // RELENTLESS on attacker weapon
  if (attacker.weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice

    attackerHits += expectedMisses * oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    attackerCrits += expectedMisses * oneDiceChanceOfCrit(attackerWeaponSkillCritical)
  }

  // BALANCED on attacker weapon
  if (attacker.weapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice)
    attackerHits += oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical) * chanceOfMiss
    attackerCrits += oneDiceChanceOfCrit(attackerWeaponSkillCritical) * chanceOfMiss
  }

  const attackerExpectedCriticalHitsMax1 = Math.min(1, attackerCrits)

  /**
   * DEFENDER basic stats
   * */
  let defenseWeaponSkillCritical = 6

  // LETHAL 5+ on defender weapon
  if (defender.weapon.specialRules.includes(specialRules.LETHAL5)) {
    defenseWeaponSkillCritical = Math.max(5, defender.profile.weaponSkill)
  }

  // LETHAL 4+ on defender weapon
  if (defender.weapon.specialRules.includes(specialRules.LETHAL4)) {
    defenseWeaponSkillCritical = Math.max(4, defender.profile.weaponSkill)
  }

  const defenseAdjustedWeaponSkill = Math.max(
    2,
    defender.weapon.weaponBallisticSkillAdjustment
      ? defender.profile.weaponSkill + defender.weapon.weaponBallisticSkillAdjustment
      : defender.profile.weaponSkill
  )

  const defenderHitsPerDie = oneDiceChanceOfSuccess(defenseAdjustedWeaponSkill, defenseWeaponSkillCritical)
  const defenderCritsPerDie = oneDiceChanceOfCrit(defenseWeaponSkillCritical)

  let defenderAttackDice = defender.weapon.attackDice

  // GRISLY TROPHY on attacker weapon
  if (attacker.weapon.equipment.includes(equipment.GRISLY_TROPHY)) {
    defenderAttackDice -= 1
  }

  let defenderHits = defenderHitsPerDie * defenderAttackDice
  let defenderCrits = defenderCritsPerDie * defenderAttackDice

  // STUN on attacker weapon
  if (attacker.weapon.criticalRules.includes(criticalRules.STUN)) {
    defenderHits -= defenderHitsPerDie * attackerExpectedCriticalHitsMax1
  }

  // RELENTLESS on defender weapon
  if (defender.weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice

    defenderHits += expectedMisses * oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    defenderCrits += expectedMisses * oneDiceChanceOfCrit(attackerWeaponSkillCritical)
  }

  // BALANCED on defender weapon
  if (defender.weapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice)
    defenderHits += oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical) * chanceOfMiss
    defenderCrits += oneDiceChanceOfCrit(attackerWeaponSkillCritical) * chanceOfMiss
  }

  const defenderExpectedCriticalHitsMax1 = Math.min(1, defenderCrits)

  // STUN on defender weapon
  if (defender.weapon.criticalRules.includes(criticalRules.STUN)) {
    attackerHits -= attackerHitsPerDie * defenderExpectedCriticalHitsMax1
  }

  return {
    attackerHits,
    attackerCrits,
    defenderHits,
    defenderCrits,
    attackerAdjustedWeaponSkill,
    attackerWeaponSkillCritical,
    defenderHitsPerDie,
    defenderCritsPerDie,
    attackerHitsPerDie,
    attackerCritsPerDie,
  }
}

type FightStrategy = 'STRIKE' | 'PARRY'

interface CalculateMeleeBlowByBlowProps {
  attackerWeaponProfile: Weapon
  attackerHits: number
  attackerCrits: number
  attackerStrategy: FightStrategy
  defenderWeaponProfile: Weapon
  defenderHits: number
  defenderCrits: number
  defenderStrategy: FightStrategy
  defenseProfile: DataSheet
  attackProfile: DataSheet
}

function calculateMeleeBlowByBlow({
  attackerWeaponProfile,
  attackerHits,
  attackerCrits,
  attackerStrategy,
  defenderWeaponProfile,
  defenderHits,
  defenderCrits,
  defenderStrategy,
  defenseProfile,
  attackProfile,
}: CalculateMeleeBlowByBlowProps) {
  interface StatBlock {
    crits: number
    hits: number
    damage: number
    wounds: number
    weaponProfile: Weapon
    stunAmount: number
  }

  interface Stats {
    attacker: StatBlock
    defender: StatBlock
  }

  const stats: Stats = {
    attacker: {
      crits: attackerCrits,
      hits: attackerHits,
      damage: 0,
      wounds: attackProfile.wounds,
      weaponProfile: attackerWeaponProfile,
      stunAmount: 0,
    },
    defender: {
      crits: defenderCrits,
      hits: defenderHits,
      damage: 0,
      wounds: defenseProfile.wounds,
      weaponProfile: defenderWeaponProfile,
      stunAmount: 0,
    },
  }

  let attackerInitiative = true
  let counter = 0

  if (
    attackerWeaponProfile.criticalRules.includes(criticalRules.STUN) &&
    !defenseProfile.abilities?.includes(abilities.THE_EMPERORS_CHOSEN)
  ) {
    stats.attacker.stunAmount = 1
  }

  if (
    defenderWeaponProfile.criticalRules.includes(criticalRules.STUN) &&
    !attackProfile.abilities?.includes(abilities.THE_EMPERORS_CHOSEN)
  ) {
    stats.defender.stunAmount = 1
  }

  // if (
  //   stats.attacker.weaponProfile.specialRules.includes(specialRules.BRUTAL) ||
  //   stats.defender.weaponProfile.specialRules.includes(specialRules.BRUTAL)
  // ) {
  // console.log(
  //   'Start a new calculation',
  //   stats.attacker.weaponProfile.name,
  //   attackerStrategy,
  //   stats.attacker.crits,
  //   stats.attacker.hits,
  //   stats.defender.weaponProfile.name,
  //   defenderStrategy
  // )
  // }

  // Main loop, attribute dice until someone dies or the dice run out
  while (
    (stats.attacker.hits > 0 || stats.attacker.crits > 0 || stats.defender.hits > 0 || stats.defender.crits > 0) &&
    stats.attacker.wounds > stats.attacker.damage &&
    stats.defender.wounds > stats.defender.damage &&
    counter < 100 // Safeguard against runaway loops
  ) {
    resolveDie()
    attackerInitiative = !attackerInitiative
    counter++
  }

  return {
    attackerDamage: stats.attacker.damage,
    defenderDamage: stats.defender.damage,
    attackerDead: stats.attacker.damage >= stats.attacker.wounds,
    defenderDead: stats.defender.damage >= stats.defender.wounds,
    finalStats: stats,
    counter,
  }

  // Main logic for dice rolling, attributes a single dice based on initiative and strategy
  function resolveDie() {
    const strategy = attackerInitiative ? attackerStrategy : defenderStrategy
    const initiativeActor = attackerInitiative ? 'attacker' : 'defender'
    const respondingActor = attackerInitiative ? 'defender' : 'attacker'

    const initiator = stats[initiativeActor]
    const responder = stats[respondingActor]

    if (strategy === 'STRIKE') {
      let dieLeft = 1

      if (initiator.crits > 0) {
        // Do critical damage
        const criticalDamageAmount = Math.min(initiator.crits, dieLeft)
        responder.damage += criticalDamageAmount * initiator.weaponProfile.damageCritical
        initiator.crits -= criticalDamageAmount
        dieLeft -= criticalDamageAmount

        // STUN on initiator weapon
        if (initiator.stunAmount > 0) {
          const stunDone = Math.min(initiator.stunAmount, responder.hits, criticalDamageAmount)
          responder.hits -= stunDone
          initiator.stunAmount -= stunDone
        }

        // if (
        //   initiator.weaponProfile.specialRules.includes(specialRules.BRUTAL) ||
        //   responder.weaponProfile.specialRules.includes(specialRules.BRUTAL)
        // ) {
        //   console.log(
        //     'After critical hits as critical hits',
        //     initiativeActor,
        //     JSON.stringify({ initiator, responder, dieLeft })
        //   )
        // }
      }

      if (initiator.hits > 0 && dieLeft > 0) {
        const damageAmount = Math.min(initiator.hits, dieLeft)
        responder.damage += damageAmount * initiator.weaponProfile.damage
        initiator.hits -= damageAmount
        dieLeft -= damageAmount

        // if (
        //   initiator.weaponProfile.specialRules.includes(specialRules.BRUTAL) ||
        //   responder.weaponProfile.specialRules.includes(specialRules.BRUTAL)
        // ) {
        //   console.log('After hits as hits', initiativeActor, JSON.stringify({ ...stats, dieLeft }))
        // }

        if (dieLeft === 0) return
      }
    }
    if (strategy === 'PARRY') {
      let dieLeft = 1

      if (initiator.crits > 0) {
        // Critical parry used as critical parry
        const criticalParryUsed = Math.min(initiator.crits, responder.crits, dieLeft)
        const criticalParryDone = initiator.weaponProfile.equipment.includes(equipment.STORM_SHIELD)
          ? Math.min(responder.crits, criticalParryUsed * 2)
          : criticalParryUsed

        responder.crits -= criticalParryDone
        initiator.crits -= criticalParryUsed
        dieLeft -= criticalParryUsed

        // if (
        //   initiator.weaponProfile.specialRules.includes(specialRules.BRUTAL) ||
        //   responder.weaponProfile.specialRules.includes(specialRules.BRUTAL)
        // ) {
        //   console.log(
        //     'After critical parries as critical parries',
        //     initiativeActor,
        //     JSON.stringify({ ...stats, dieLeft })
        //   )
        // }
        if (dieLeft === 0) return

        // Critical parry used as normal parry
        const parryUsed = Math.min(initiator.crits, responder.hits, dieLeft)
        const parryDone = initiator.weaponProfile.equipment.includes(equipment.STORM_SHIELD)
          ? Math.min(responder.hits, parryUsed * 2)
          : parryUsed

        responder.hits -= parryDone
        initiator.crits -= parryUsed
        dieLeft -= parryUsed

        // if (
        //   initiator.weaponProfile.specialRules.includes(specialRules.BRUTAL) ||
        //   responder.weaponProfile.specialRules.includes(specialRules.BRUTAL)
        // ) {
        //   console.log(
        //     'After critical parries as normal parries',
        //     initiativeActor,
        //     JSON.stringify({ ...stats, dieLeft })
        //   )
        // }
        if (dieLeft === 0) return

        // Critical parry used as damage
        const criticalDamageAmount = Math.min(initiator.crits, dieLeft)
        responder.damage += criticalDamageAmount * initiator.weaponProfile.damageCritical
        initiator.crits -= criticalDamageAmount
        dieLeft -= criticalDamageAmount

        // STUN on initiator weapon
        if (initiator.stunAmount > 0) {
          const stunDone = Math.min(initiator.stunAmount, responder.hits, criticalDamageAmount)
          responder.hits -= stunDone
          initiator.stunAmount -= stunDone
        }

        // if (
        //   initiator.weaponProfile.specialRules.includes(specialRules.BRUTAL) ||
        //   responder.weaponProfile.specialRules.includes(specialRules.BRUTAL)
        // ) {
        //   console.log('After critical parries as damage', initiativeActor, JSON.stringify({ ...stats, dieLeft }))
        // }
        if (dieLeft === 0) return
      }

      if (initiator.hits > 0) {
        if (responder.weaponProfile.specialRules.includes(specialRules.BRUTAL)) {
          // console.log(initiativeActor, 'Skipping normal parries, opponent has BRUTAL', dieLeft)
        } else {
          // Parry used as normal parry
          const parryUsed = Math.min(initiator.hits, responder.hits, dieLeft)
          const parryDone = initiator.weaponProfile.equipment.includes(equipment.STORM_SHIELD)
            ? Math.min(responder.hits, parryUsed * 2)
            : parryUsed

          responder.hits -= parryDone
          initiator.hits -= parryUsed
          dieLeft -= parryUsed
        }

        // console.log('After parries as parries', initiativeActor, JSON.stringify({ ...stats, dieLeft }))
        if (dieLeft === 0) return

        // Parry used as damage
        const damageAmount = Math.min(initiator.hits, dieLeft)
        responder.damage += damageAmount * initiator.weaponProfile.damage
        initiator.hits -= damageAmount
        dieLeft -= damageAmount

        // console.log('After parries as damage', initiativeActor, JSON.stringify({ ...stats, dieLeft }))
        if (dieLeft === 0) return
      }
    }
  }
}

function calculateDamageMelee({ attacker, defender }: AttackerDefenderPair): DamageMelee {
  const { attackerHits, attackerCrits, defenderHits, defenderCrits } = calculateMeleeBasics({ attacker, defender })

  /** STRATEGY 1
   * Goal: attacker & defender => max damage done
   * Strategy: no parries on either side, just straight damage
   * */
  // eslint-disable-next-line
  const maxDamageOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: attacker.weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'STRIKE',
    defenderWeaponProfile: defender.weapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'STRIKE',
    defenseProfile: defender.profile,
    attackProfile: attacker.profile,
  })

  /** STRATEGY 2
   * Goal: attacker => max damage done, defender => min damage taken
   * Strategy: attacker does maximum damage, defender parries whenever possible
   * */
  const parryDefenderOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: attacker.weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'STRIKE',
    defenderWeaponProfile: defender.weapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'PARRY',
    defenseProfile: defender.profile,
    attackProfile: attacker.profile,
  })

  /** STRATEGY 3
   * Goal: attacker => min damage taken, defender => max damage done
   * Strategy: attacker parries when possible, defender does maximum damage
   * */
  const parryAttackerOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: attacker.weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'PARRY',
    defenderWeaponProfile: defender.weapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'STRIKE',
    defenseProfile: defender.profile,
    attackProfile: attacker.profile,
  })

  /** STRATEGY 4
   * Goal: attacker => min damage taken, defender => min damage taken
   * Strategy: attacker and defender parry when possible
   * */
  const parryBothOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: attacker.weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'PARRY',
    defenderWeaponProfile: defender.weapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'PARRY',
    defenseProfile: defender.profile,
    attackProfile: attacker.profile,
  })

  return {
    type: 'melee',
    total: {
      maxDamage: {
        attackerDamage: maxDamageOutput.attackerDamage,
        defenderDamage: maxDamageOutput.defenderDamage,
        attackerDead: maxDamageOutput.attackerDead,
        defenderDead: maxDamageOutput.defenderDead,
      },
      parryDefender: {
        attackerDamage: parryDefenderOutput.attackerDamage,
        defenderDamage: parryDefenderOutput.defenderDamage,
        attackerDead: parryDefenderOutput.attackerDead,
        defenderDead: parryDefenderOutput.defenderDead,
      },
      parryAttacker: {
        attackerDamage: parryAttackerOutput.attackerDamage,
        defenderDamage: parryAttackerOutput.defenderDamage,
        attackerDead: parryAttackerOutput.attackerDead,
        defenderDead: parryAttackerOutput.defenderDead,
      },
      parryBoth: {
        attackerDamage: parryBothOutput.attackerDamage,
        defenderDamage: parryBothOutput.defenderDamage,
        attackerDead: parryBothOutput.attackerDead,
        defenderDead: parryBothOutput.defenderDead,
      },
    },
  }
}
