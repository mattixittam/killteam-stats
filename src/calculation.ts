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

interface CalculateMeleeBlowByBlowProps {
  attackerWeaponProfile: Weapon
  attackerHits: number
  attackerCrits: number
  attackerStrategy: 'STRIKE' | 'PARRY'
  defenderWeaponProfile: Weapon
  defenderHits: number
  defenderCrits: number
  defenderStrategy: 'STRIKE' | 'PARRY'
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
  let aCrits = attackerCrits
  let aHits = attackerHits
  const aWounds = attackProfile.wounds
  let aDamage = 0

  let dCrits = defenderCrits
  let dHits = defenderHits
  const dWounds = defenseProfile.wounds
  let dDamage = 0

  let attackerInitiative = true
  let counter = 0

  while (
    (aHits > 0 || aCrits > 0 || dHits > 0 || dCrits > 0) &&
    aWounds > aDamage &&
    dWounds > dDamage &&
    counter < 100
  ) {
    resolveDie()
    attackerInitiative = !attackerInitiative
    counter++
  }

  return {
    attackerDamage: aDamage,
    defenderDamage: dDamage,
    attackerDead: aDamage >= aWounds,
    defenderDead: dDamage >= dWounds,
    counter,
    finalStats: { aCrits, dCrits, aHits, dHits },
  }

  function resolveDie() {
    if (attackerInitiative) {
      if (attackerStrategy === 'STRIKE') {
        if (aCrits >= 1) {
          dDamage += 1 * attackerWeaponProfile.damageCritical
          aCrits -= 1
          return
        } else if (aCrits > 0 && aCrits < 1) {
          // If a partial crit does more damage than the next hit, do the partial crit
          if (aCrits * attackerWeaponProfile.damageCritical > attackerWeaponProfile.damage * Math.min(aHits, 1)) {
            dDamage += attackerWeaponProfile.damageCritical * aCrits
            aCrits -= aCrits
            return
          }
          // Otherwise fall through to the hits
        }

        if (aHits >= 1) {
          dDamage += 1 * attackerWeaponProfile.damage
          aHits -= 1
          return
        } else if (aHits > 0 && aHits < 1) {
          dDamage += attackerWeaponProfile.damage * aHits
          aHits -= aHits
          return
        }
      }
      if (attackerStrategy === 'PARRY') {
        if (aCrits >= 1) {
          // One or more full attacker crits left
          if (dCrits >= 1) {
            // One or more full defender crits left
            // => both left over
            dCrits -= 1
            aCrits -= 1
            return
          } else if (dCrits > 0 && dCrits < 1) {
            // Partial defender crit left
            // => defender crit is used up, attacker crit left over
            dCrits -= dCrits
            aCrits -= dCrits
          } else {
            // Do damage with leftover crit
            dDamage += Math.min(aCrits, 1) * attackerWeaponProfile.damageCritical
            aCrits -= Math.min(aCrits, 1)
            return
          }
        } else if (aCrits > 0 && aCrits < 1) {
          // Partial attacker crit left
          if (dCrits >= aCrits) {
            // Enough defender crits left to soak up all attacker crits left
            // => attacker crit is used up, defender crit left over
            dCrits -= aCrits
            aCrits -= aCrits
            return
          } else if (dCrits > 0 && dCrits < aCrits) {
            // Not enough defender crits left to soak up all attacker crits left
            // => defender crit is used up, attacker crit left over
            dCrits -= dCrits
            aCrits -= dCrits
          } else {
            // Do damage with leftover crit
            dDamage += Math.min(aCrits, 1) * attackerWeaponProfile.damageCritical
            aCrits -= Math.min(aCrits, 1)
            return
          }
        }

        if (aHits >= 1) {
          // One or more full attacker hits left
          if (dHits >= 1) {
            // One or more full defender hits left
            // => both left over
            dHits -= 1
            aHits -= 1
            return
          } else if (dHits > 0 && dHits < 1) {
            // Partial defender hit left
            // => defender hit is used up, attacker hit left over
            dHits -= dHits
            aHits -= dHits
          } else {
            // Do damage with leftover hit
            dDamage += Math.min(aHits, 1) * attackerWeaponProfile.damage
            aHits -= Math.min(aHits, 1)
            return
          }
        } else if (aHits > 0 && aHits < 1) {
          // Partial attacker hit left
          if (dHits >= aHits) {
            // Enough defender hits left to soak up all attacker hits left
            // => attacker hit is used up, defender hit left over
            dHits -= aHits
            aHits -= aHits
            return
          } else if (dHits > 0 && dHits < aHits) {
            // Not enough defender hits left to soak up all attacker hits left
            // => defender hit is used up, attacker hit left over
            dHits -= dHits
            aHits -= dHits
          } else {
            // Do damage with leftover hit
            dDamage += Math.min(aHits, 1) * attackerWeaponProfile.damage
            aHits -= Math.min(aHits, 1)
            return
          }
        }
      }
    }

    // DEFENDER has intiative
    if (!attackerInitiative) {
      if (defenderStrategy === 'STRIKE') {
        // FIXME if a partial crit for less damage than the next hit, do the hit
        if (dCrits >= 1) {
          aDamage += defenderWeaponProfile.damageCritical
          dCrits -= 1
          return
        } else if (dCrits > 0 && dCrits < 1) {
          // If a partial crit does more damage than the next hit, do the partial crit
          if (dCrits * defenderWeaponProfile.damageCritical > defenderWeaponProfile.damage * Math.min(dHits, 1)) {
            aDamage += defenderWeaponProfile.damageCritical * dCrits
            dCrits -= dCrits
            return
          }
          // Otherwise fall through to the hits
        }

        if (dHits >= 1) {
          aDamage += defenderWeaponProfile.damage
          dHits -= 1
          return
        } else if (dHits > 0 && dHits < 1) {
          aDamage += dHits * defenderWeaponProfile.damageCritical
          dHits -= dHits
          return
        }
      }
      if (defenderStrategy === 'PARRY') {
        if (dCrits >= 1) {
          // One or more full defender crits left
          if (aCrits >= 1) {
            // One or more full attacker crits left
            // => both left over
            aCrits -= 1
            dCrits -= 1
            return
          } else if (aCrits > 0 && aCrits < 1) {
            // Partial attacker crit left
            // => attacker crit is used up, defender crit left over
            aCrits -= aCrits
            dCrits -= aCrits
            return
          } else {
            // Do damage with leftover crit
            aDamage += Math.min(dCrits, 1) * defenderWeaponProfile.damageCritical
            dCrits -= Math.min(dCrits, 1)
            return
          }
        } else if (dCrits > 0 && dCrits < 1) {
          // Partial defender crit left
          if (aCrits >= dCrits) {
            // Enough attacker crits left to soak up all defender crits left
            // => defender crit is used up, attacker crit left over
            aCrits -= dCrits
            dCrits -= dCrits
            return
          } else if (aCrits > 0 && aCrits < dCrits) {
            // Not enough attacker crits left to soak up all defender crits left
            // => attacker crit is used up, defender crit left over
            aCrits -= aCrits
            dCrits -= aCrits
            return
          } else {
            // Do damage with leftover crit
            aDamage += Math.min(dCrits, 1) * defenderWeaponProfile.damageCritical
            dCrits -= Math.min(dCrits, 1)
            return
          }
        }

        if (dHits >= 1) {
          // One or more full defender hits left
          if (aHits >= 1) {
            // One or more full attacker hits left
            // => both left over
            aHits -= 1
            dHits -= 1
            return
          } else if (aHits > 0 && aHits < 1) {
            // Partial attacker hit left
            // => attacker hit is used up, defender hit left over
            aHits -= aHits
            dHits -= aHits
            return
          } else {
            // Do damage with leftover hits
            aDamage += Math.min(dHits, 1) * defenderWeaponProfile.damage
            dHits -= Math.min(dHits, 1)
            return
          }
        } else if (dHits > 0 && dHits < 1) {
          // Partial defender hit left
          if (aHits >= dHits) {
            // Enough attacker hits left to soak up all defender hits left
            // => defender hit is used up, attacker hit left over
            aHits -= dHits
            dHits -= dHits
            return
          } else if (aHits > 0 && aHits < dHits) {
            // Not enough attacker hits left to soak up all defender hits left
            // => attacker hit is used up, defender hit left over
            aHits -= aHits
            dHits -= aHits
            return
          } else {
            // Do damage with leftover hits
            aDamage += Math.min(dHits, 1) * defenderWeaponProfile.damage
            dHits -= Math.min(dHits, 1)
            return
          }
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
