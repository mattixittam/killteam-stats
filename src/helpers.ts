import { criticalRules, Rule, specialRules } from './rules'
import { equipment, EquipmentItem } from './stats/equipment'
import { Weapon, weapons } from './stats/weapons'

interface Options {
  weaponBallisticSkillAdjustment?: number
  attackDiceAdjustment?: number
  equipmentProfiles?: string[]
}

export interface Profile {
  name: string
  movement: number
  apl: number
  groupActivation: number
  defense: number
  save: number
  saveCritical: number
  wounds: number
  weaponSkill: number
  ballisticSkill: number
  weapons: Weapon[]
  defensiveMeleeWeapon?: Weapon
  abilities?: Rule[]
}

export interface DefenseProfile {
  name: string
  movement: number
  apl: number
  groupActivation: number
  defense: number
  save: number
  saveCritical: number
  wounds: number
  weaponSkill: number
  ballisticSkill: number
  weapons: Weapon[]
  defensiveMeleeWeapon: Weapon
  abilities?: Rule[]
}

export function getProfiles(name: string, options?: Options): Weapon[] {
  const modifiedSkill = options?.weaponBallisticSkillAdjustment
  const attackDiceAdjustment = options?.attackDiceAdjustment

  return weapons
    .filter((weapon) => weapon.name === name)
    .map((profile) => ({
      ...profile,
      weaponBallisticSkillAdjustment: modifiedSkill ? modifiedSkill : profile.weaponBallisticSkillAdjustment,
      attackDice: attackDiceAdjustment ? profile.attackDice + attackDiceAdjustment : profile.attackDice,
    }))
}

export function generateEquipmentProfile(weapon: Weapon, newEquipment: EquipmentItem): Weapon {
  const additionalSpecialRules = newEquipment.additionalSpecialRules || []
  const additionalCriticalRules = newEquipment.additionalCriticalRules || []
  const newCriticalRules = [...weapon.criticalRules]

  // MALEFIC ROUNDS
  if (newEquipment === equipment.MALEFIC_ROUNDS) {
    if (weapon.criticalRules.includes(criticalRules.P1)) {
      const index = newCriticalRules.indexOf(criticalRules.P1)
      newCriticalRules.splice(index, 1)
      additionalSpecialRules.push(specialRules.AP1)
    } else {
      additionalCriticalRules.push(criticalRules.P1)
    }
  }

  return {
    ...weapon,
    profile: `+ ${newEquipment.label}`,
    equipment: [...weapon.equipment, newEquipment],
    specialRules: [...weapon.specialRules, ...additionalSpecialRules],
    criticalRules: [...newCriticalRules, ...additionalCriticalRules],
  }
}

export function addEquipmentToProfiles(profiles: Weapon[], equipment: EquipmentItem[]) {
  return profiles.reduce<Weapon[]>((acc, profile) => {
    const equippedProfiles = equipment.reduce<Weapon[]>((acc, eq) => {
      const newAcc = [...acc, generateEquipmentProfile(profile, eq)]
      return newAcc
    }, [])
    const newAcc = [...acc, profile, ...equippedProfiles]
    return newAcc
  }, [])
}
