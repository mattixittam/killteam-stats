import { Weapon } from "./stats/weapons";
import { specialRules, criticalRules } from "./rules";
import { Defenseprofile } from "./App";

function oneDiceChanceOfSuccess(successFrom: number, critFrom: number = 6) {
  const chanceOfSuccess = (7 - successFrom) * (1 / 6);
  const chanceOfCrit = (7 - critFrom) * (1 / 6);
  return chanceOfSuccess - chanceOfCrit;
}

function onsDiceChanceOfMiss(successFrom: number) {
  return (successFrom - 1) * (1 / 6);
}

function oneDiceChanceOfCrit(critFrom: number = 6) {
  return (7 - critFrom) * (1 / 6);
}

export function calculateDamage(
  weapon: Weapon,
  weaponSkill: number,
  defenseProfile: Defenseprofile
) {
  let rolledDefenseDice = defenseProfile.defenseDice;

  let weaponSkillCritical = 6;

  // LETHAL 5+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    weaponSkillCritical = Math.max(5, weaponSkill);
  }

  // LETHAL 4+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    weaponSkillCritical = Math.max(4, weaponSkill);
  }

  // GRAV
  if (
    weapon.specialRules.includes(specialRules.GRAV) &&
    defenseProfile.save <= 3
  ) {
    weaponSkillCritical = Math.max(4, weaponSkill);
  }

  // AP1
  if (weapon.specialRules.includes(specialRules.AP1)) {
    rolledDefenseDice -= 1;
  }

  // AP2
  if (weapon.specialRules.includes(specialRules.AP2)) {
    rolledDefenseDice -= 2;
  }

  const adjustedWeaponSkill = Math.max(
    2,
    weapon.weaponSkillAdjustment
      ? weaponSkill + weapon.weaponSkillAdjustment
      : weaponSkill
  );

  let expectedHits =
    oneDiceChanceOfSuccess(adjustedWeaponSkill, weaponSkillCritical) *
    weapon.attackDice;

  let expectedCriticalHits =
    oneDiceChanceOfCrit(weaponSkillCritical) * weapon.attackDice;

  const chanceOfAtLeastOneCrit = Math.min(expectedCriticalHits, 1);

  // Normal
  const chanceOfSave = oneDiceChanceOfSuccess(
    defenseProfile.save,
    defenseProfile.saveCritical
  );
  const chanceOfSaveCritical = oneDiceChanceOfCrit(defenseProfile.saveCritical);

  let expectedSaves = chanceOfSave * rolledDefenseDice;
  let expectedCriticalSaves = chanceOfSaveCritical * rolledDefenseDice;

  // Critical P1
  if (weapon.criticalRules.includes(criticalRules.P1)) {
    const chanceOfNoCrit = 1 - chanceOfAtLeastOneCrit;

    const p1Saves =
      chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSave;
    const p1SaveCrits =
      chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSaveCritical;
    const nonP1Saves = chanceOfNoCrit * rolledDefenseDice * chanceOfSave;
    const nonP1SaveCrits =
      chanceOfNoCrit * rolledDefenseDice * chanceOfSaveCritical;

    expectedSaves = p1Saves + nonP1Saves;
    expectedCriticalSaves = p1SaveCrits + nonP1SaveCrits;
  }

  // RENDING
  if (weapon.criticalRules.includes(criticalRules.RENDING)) {
    expectedHits -= chanceOfAtLeastOneCrit / weapon.attackDice;
    expectedCriticalHits += chanceOfAtLeastOneCrit / weapon.attackDice;
  }

  // CEASELESS
  if (weapon.specialRules.includes(specialRules.CEASELESS)) {
    const expectedNaturalOnes = (1 / 6) * weapon.attackDice;

    expectedHits +=
      expectedNaturalOnes *
      oneDiceChanceOfSuccess(weaponSkill, weaponSkillCritical);
    expectedCriticalHits +=
      expectedNaturalOnes * oneDiceChanceOfCrit(weaponSkillCritical);
  }

  // RELENTLESS
  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = onsDiceChanceOfMiss(weaponSkill) * weapon.attackDice;

    expectedHits +=
      expectedMisses * oneDiceChanceOfSuccess(weaponSkill, weaponSkillCritical);
    expectedCriticalHits +=
      expectedMisses * oneDiceChanceOfCrit(weaponSkillCritical);
  }

  const expectedHitDamage =
    Math.max(0, expectedHits - expectedSaves) * weapon.damage;

  const expectedCritDamage =
    Math.max(0, expectedCriticalHits - expectedCriticalSaves) *
    weapon.damageCritical;

  // MWx
  let mw = 0;

  if (weapon.criticalRules.includes(criticalRules.MW3)) {
    mw = 3;
  }

  if (weapon.criticalRules.includes(criticalRules.MW4)) {
    mw = 4;
  }

  const expectedMortalWounds = expectedCriticalHits * mw;

  // const rendingDamage = weapon.criticalRules.includes(criticalRules.RENDING)
  //   ? calculateRendingDamage(weapon, weaponSkill) -
  //     chanceOfCrit(defenseProfile.saveCritical) * defenseProfile.defenseDice *
  //   : 0;
  const expectedTotalDamage =
    expectedHitDamage + expectedCritDamage + expectedMortalWounds;

  return {
    total: expectedTotalDamage.toFixed(2),
    hit: expectedHitDamage.toFixed(2),
    crit: expectedCritDamage.toFixed(2),
    mw: expectedMortalWounds.toFixed(2),
    // RENDING: rendingDamage.toFixed(2),
  };
}
