import { criticalRules, Rule, specialRules } from './rules'
import { equipment, Equipment } from './stats/equipment'
import { Weapon, WeaponName, weapons } from './stats/weapons'

interface Options {
  weaponBallisticSkillAdjustment?: number
  attackDiceAdjustment?: number
  equipmentProfiles?: string[]
}

export type WeaponOptions = WeaponOption[]
export type WeaponOption = WeaponName[][]

export interface DataSheet {
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
  weaponOptions?: WeaponOptions
  selectedWeapons?: WeaponName[]
  defaultWeapons?: WeaponName[]
}

export interface DataSheetDefender extends DataSheet {
  defensiveMeleeWeapon: Weapon
}

export function getWeaponProfiles(name: WeaponName, options?: Options): Weapon[] {
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

export function generateEquipmentVariantProfile(weapon: Weapon, newEquipment: Equipment): Weapon {
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

  const newWeapon = { ...weapon }

  // ENRICHED ROUNDS
  if (newEquipment === equipment.ENRICHED_ROUNDS) {
    newWeapon.damage += 1
  }

  return {
    ...newWeapon,
    profile: `+ ${newEquipment.label}`,
    equipment: [...weapon.equipment, newEquipment],
    specialRules: [...weapon.specialRules, ...additionalSpecialRules],
    criticalRules: [...newCriticalRules, ...additionalCriticalRules],
  }
}

export function generateEquipmentVariantProfiles(profiles: Weapon[], equipment: Equipment[]) {
  return profiles.reduce<Weapon[]>((acc, profile) => {
    const equippedProfiles = equipment.reduce<Weapon[]>((acc, eq) => {
      const newAcc = [...acc, generateEquipmentVariantProfile(profile, eq)]
      return newAcc
    }, [])
    const newAcc = [...acc, profile, ...equippedProfiles]
    return newAcc
  }, [])
}
