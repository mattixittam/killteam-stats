import { Weapon } from './stats/weapons'
import { specialRules, criticalRules } from './rules'
import { DamageMelee, DamageRanged, Defenseprofile } from './App'
import { Profile } from './helpers'
import { hereticAstartesEquipment } from './stats/factions/hereticAstartes'

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

export function calculateDamage(weapon: Weapon, defenseProfile: Defenseprofile, attackProfile: Profile) {
  if (weapon.type === 'MELEE') {
    return calculateDamageMelee(weapon, defenseProfile, attackProfile)
  }

  if (weapon.type === 'RANGED') {
    return calculateDamageRanged(weapon, defenseProfile, attackProfile)
  }

  return calculateDamageMelee(weapon, defenseProfile, attackProfile)
}

function calculateDamageRanged(weapon: Weapon, defenseProfile: Defenseprofile, attackProfile: Profile): DamageRanged {
  let rolledDefenseDice = defenseProfile.defense

  let ballisticSkillCritical = 6

  // LETHAL 5+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    ballisticSkillCritical = Math.max(5, attackProfile.ballisticSkill)
  }

  // LETHAL 4+
  if (weapon.specialRules.includes(specialRules.LETHAL4)) {
    ballisticSkillCritical = Math.max(4, attackProfile.ballisticSkill)
  }

  // GRAV
  if (weapon.specialRules.includes(specialRules.GRAV) && defenseProfile.save <= 3) {
    ballisticSkillCritical = Math.max(4, attackProfile.ballisticSkill)
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
    weapon.fixedWeaponBallisticSkill || attackProfile.ballisticSkill + (weapon.weaponBallisticSkillAdjustment || 0)

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

    expectedHits += expectedNaturalOnes * oneDiceChanceOfSuccess(attackProfile.ballisticSkill, ballisticSkillCritical)
    expectedCriticalHits += expectedNaturalOnes * oneDiceChanceOfCrit(ballisticSkillCritical)
  }

  // RELENTLESS
  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackProfile.ballisticSkill) * weapon.attackDice

    expectedHits += expectedMisses * oneDiceChanceOfSuccess(attackProfile.ballisticSkill, ballisticSkillCritical)
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

export function getAttackerAttackDice(weapon: Weapon) {
  let attackDice = weapon.attackDice

  // DARK BLESSING on attacker weapon
  if (weapon.equipment.includes(hereticAstartesEquipment.DARK_BLESSING)) {
    attackDice += 1
  }

  return attackDice
}

export function calculateMeleeBasics(
  attackerWeapon: Weapon,
  attackerWeaponSkill: number,
  defenseProfile: Defenseprofile
) {
  /**
   * ATTACKER basic stats
   * */
  let attackerWeaponSkillCritical = 6

  // LETHAL 5+ on attacker weapon
  if (attackerWeapon.specialRules.includes(specialRules.LETHAL5)) {
    attackerWeaponSkillCritical = Math.max(5, attackerWeaponSkill)
  }

  // LETHAL 4+ on attacker weapon
  if (attackerWeapon.specialRules.includes(specialRules.LETHAL4)) {
    attackerWeaponSkillCritical = Math.max(4, attackerWeaponSkill)
  }

  const attackerAdjustedWeaponSkill = Math.max(
    2,
    attackerWeapon.weaponBallisticSkillAdjustment
      ? attackerWeaponSkill + attackerWeapon.weaponBallisticSkillAdjustment
      : attackerWeaponSkill
  )

  const attackerHitsPerDie = oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
  const attackerCritsPerDie = oneDiceChanceOfCrit(attackerWeaponSkillCritical)

  const attackerAttackDice = getAttackerAttackDice(attackerWeapon)

  let attackerHits = attackerHitsPerDie * attackerAttackDice
  let attackerCrits = attackerCritsPerDie * attackerAttackDice

  // RELENTLESS on attacker weapon
  if (attackerWeapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice

    attackerHits += expectedMisses * oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    attackerCrits += expectedMisses * oneDiceChanceOfCrit(attackerWeaponSkillCritical)
  }

  // BALANCED on attacker weapon
  if (attackerWeapon.specialRules.includes(specialRules.BALANCED)) {
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
  if (defenseProfile.defensiveWeapon.specialRules.includes(specialRules.LETHAL5)) {
    defenseWeaponSkillCritical = Math.max(5, defenseProfile.weaponSkill)
  }

  // LETHAL 4+ on defender weapon
  if (defenseProfile.defensiveWeapon.specialRules.includes(specialRules.LETHAL4)) {
    defenseWeaponSkillCritical = Math.max(4, defenseProfile.weaponSkill)
  }

  const defenseAdjustedWeaponSkill = Math.max(
    2,
    defenseProfile.defensiveWeapon.weaponBallisticSkillAdjustment
      ? defenseProfile.weaponSkill + defenseProfile.defensiveWeapon.weaponBallisticSkillAdjustment
      : defenseProfile.weaponSkill
  )

  const defenderHitsPerDie = oneDiceChanceOfSuccess(defenseAdjustedWeaponSkill, defenseWeaponSkillCritical)
  const defenderCritsPerDie = oneDiceChanceOfCrit(defenseWeaponSkillCritical)

  let defenderAttackDice = defenseProfile.defensiveWeapon.attackDice

  // GRISLY TROPHY on attacker weapon
  if (attackerWeapon.equipment.includes(hereticAstartesEquipment.GRISLY_TROPHY)) {
    defenderAttackDice -= 1
  }

  let defenderHits = defenderHitsPerDie * defenderAttackDice
  let defenderCrits = defenderCritsPerDie * defenderAttackDice

  // STUN on attacker weapon
  if (attackerWeapon.criticalRules.includes(criticalRules.STUN)) {
    defenderHits -= defenderHitsPerDie * attackerExpectedCriticalHitsMax1
  }

  // RELENTLESS on defender weapon
  if (defenseProfile.defensiveWeapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice

    defenderHits += expectedMisses * oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical)
    defenderCrits += expectedMisses * oneDiceChanceOfCrit(attackerWeaponSkillCritical)
  }

  // BALANCED on defender weapon
  if (defenseProfile.defensiveWeapon.specialRules.includes(specialRules.BALANCED)) {
    const chanceOfMiss = Math.min(1, oneDiceChanceOfMiss(attackerAdjustedWeaponSkill) * attackerAttackDice)
    defenderHits += oneDiceChanceOfSuccess(attackerAdjustedWeaponSkill, attackerWeaponSkillCritical) * chanceOfMiss
    defenderCrits += oneDiceChanceOfCrit(attackerWeaponSkillCritical) * chanceOfMiss
  }

  const defenderExpectedCriticalHitsMax1 = Math.min(1, defenderCrits)

  // STUN on defender weapon
  if (defenseProfile.defensiveWeapon.criticalRules.includes(criticalRules.STUN)) {
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
  defenseProfile: Defenseprofile
  attackProfile: Profile
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
    },
    defender: {
      crits: defenderCrits,
      hits: defenderHits,
      damage: 0,
      wounds: defenseProfile.wounds,
      weaponProfile: defenderWeaponProfile,
    },
  }

  let attackerInitiative = true
  let counter = 0

  while (
    (stats.attacker.hits > 0 || stats.attacker.crits > 0 || stats.defender.hits > 0 || stats.defender.crits > 0) &&
    stats.attacker.wounds > stats.attacker.damage &&
    stats.defender.wounds > stats.defender.damage &&
    counter < 100
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

  function resolveDie() {
    const strategy = attackerInitiative ? attackerStrategy : defenderStrategy
    const initiativeActor = attackerInitiative ? 'attacker' : 'defender'
    const respondingActor = attackerInitiative ? 'defender' : 'attacker'

    const initiator = stats[initiativeActor]
    const responder = stats[respondingActor]

    if (strategy === 'STRIKE') {
      if (initiator.crits >= 1) {
        responder.damage += 1 * initiator.weaponProfile.damageCritical
        initiator.crits -= 1
        return
      } else if (initiator.crits > 0 && initiator.crits < 1) {
        // If a partial crit does more damage than the next hit, do the partial crit
        if (
          initiator.crits * initiator.weaponProfile.damageCritical >
          initiator.weaponProfile.damage * Math.min(initiator.hits, 1)
        ) {
          responder.damage += initiator.weaponProfile.damageCritical * initiator.crits
          initiator.crits -= initiator.crits
          return
        }
        // Otherwise fall through to the hits
      }

      if (initiator.hits >= 1) {
        responder.damage += 1 * initiator.weaponProfile.damage
        initiator.hits -= 1
        return
      } else if (initiator.hits > 0 && initiator.hits < 1) {
        responder.damage += initiator.weaponProfile.damage * initiator.hits
        initiator.hits -= initiator.hits
        return
      }
    }
    if (strategy === 'PARRY') {
      if (initiator.crits >= 1) {
        // One or more full attacker crits left
        if (responder.crits >= 1) {
          // One or more full defender crits left
          // => both left over
          responder.crits -= 1
          initiator.crits -= 1
          return
        } else if (responder.crits > 0 && responder.crits < 1) {
          // Partial defender crit left
          // => defender crit is used up, attacker crit left over
          initiator.crits -= responder.crits

          // Do damage with leftover crit up to a full die combined with the parry
          responder.damage += Math.min(initiator.crits, 1 - responder.crits) * initiator.weaponProfile.damage
          initiator.crits -= Math.min(initiator.crits, 1 - responder.crits)

          // => defender crit is used up
          responder.crits -= responder.crits
          return
        } else {
          // Do damage with leftover crit
          responder.damage += Math.min(initiator.crits, 1) * initiator.weaponProfile.damageCritical
          initiator.crits -= Math.min(initiator.crits, 1)
          return
        }
      } else if (initiator.crits > 0 && initiator.crits < 1) {
        // Partial attacker crit left
        if (responder.crits >= initiator.crits) {
          // Enough defender crits left to soak up all attacker crits left
          // => attacker crit is used up, defender crit left over
          responder.crits -= initiator.crits
          initiator.crits -= initiator.crits
          return
        } else if (responder.crits > 0 && responder.crits < initiator.crits) {
          // Not enough defender crits left to soak up all attacker crits left
          // => defender crit is used up, attacker crit left over
          initiator.crits -= responder.crits

          // Do damage with leftover crit up to a full die combined with the parry
          responder.damage += Math.min(initiator.crits, 1 - responder.crits) * initiator.weaponProfile.damage
          initiator.crits -= Math.min(initiator.crits, 1 - responder.crits)

          // => defender crit is used up
          responder.crits -= responder.crits
          return
        } else {
          // Do damage with leftover crit
          responder.damage += Math.min(initiator.crits, 1) * initiator.weaponProfile.damageCritical
          initiator.crits -= Math.min(initiator.crits, 1)
          return
        }
      }

      if (initiator.hits >= 1) {
        // One or more full attacker hits left
        if (responder.hits >= 1) {
          // One or more full defender hits left
          // => both left over
          responder.hits -= 1
          initiator.hits -= 1
          return
        } else if (responder.hits > 0 && responder.hits < 1) {
          // Partial defender hit left
          // => defender hit is used up, attacker hit left over
          initiator.hits -= responder.hits

          // Do damage with leftover hit up to a full die combined with the parry
          responder.damage += Math.min(initiator.hits, 1 - responder.hits) * initiator.weaponProfile.damage
          initiator.hits -= Math.min(initiator.hits, 1 - responder.hits)

          // => defender hit is used up
          responder.hits -= responder.hits
          return
        } else {
          // Do damage with leftover hit
          responder.damage += Math.min(initiator.hits, 1) * initiator.weaponProfile.damage
          initiator.hits -= Math.min(initiator.hits, 1)
          return
        }
      } else if (initiator.hits > 0 && initiator.hits < 1) {
        // Partial attacker hit left
        if (responder.hits >= initiator.hits) {
          // Enough defender hits left to soak up all attacker hits left
          // => attacker hit is used up, defender hit left over
          responder.hits -= initiator.hits
          initiator.hits -= initiator.hits
          return
        } else if (responder.hits > 0 && responder.hits < initiator.hits) {
          // Not enough defender hits left to soak up all attacker hits left
          // => defender hit is used up, attacker hit left over
          initiator.hits -= responder.hits

          // Do damage with leftover hit up to a full die combined with the parry
          responder.damage += Math.min(initiator.hits, 1 - responder.hits) * initiator.weaponProfile.damage
          initiator.hits -= Math.min(initiator.hits, 1 - responder.hits)

          // => defender hit is used up
          responder.hits -= responder.hits
          return
        } else {
          // Do damage with leftover hit
          responder.damage += Math.min(initiator.hits, 1) * initiator.weaponProfile.damage
          initiator.hits -= Math.min(initiator.hits, 1)
          return
        }
      }
    }
  }
}

function calculateDamageMelee(weapon: Weapon, defenseProfile: Defenseprofile, attackProfile: Profile): DamageMelee {
  const { attackerHits, attackerCrits, defenderHits, defenderCrits } = calculateMeleeBasics(
    weapon,
    attackProfile.weaponSkill,
    defenseProfile
  )

  /** STRATEGY 1
   * Goal: attacker & defender => max damage done
   * Strategy: no parries on either side, just straight damage
   * */
  // eslint-disable-next-line
  const maxDamageOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'STRIKE',
    defenderWeaponProfile: defenseProfile.defensiveWeapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'STRIKE',
    defenseProfile,
    attackProfile,
  })

  /** STRATEGY 2
   * Goal: attacker => max damage done, defender => min damage taken
   * Strategy: attacker does maximum damage, defender parries whenever possible
   * */
  const parryDefenderOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'STRIKE',
    defenderWeaponProfile: defenseProfile.defensiveWeapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'PARRY',
    defenseProfile,
    attackProfile,
  })

  /** STRATEGY 3
   * Goal: attacker => min damage taken, defender => max damage done
   * Strategy: attacker parries when possible, defender does maximum damage
   * */
  const parryAttackerOutput = calculateMeleeBlowByBlow({
    attackerWeaponProfile: weapon,
    attackerHits,
    attackerCrits,
    attackerStrategy: 'PARRY',
    defenderWeaponProfile: defenseProfile.defensiveWeapon,
    defenderHits,
    defenderCrits,
    defenderStrategy: 'STRIKE',
    defenseProfile,
    attackProfile,
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
    },
  }
}
