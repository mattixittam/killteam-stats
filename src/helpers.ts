import { Weapon, weapons } from './stats/weapons'

interface Options {
  weaponBallisticSkillAdjustment?: number
  equipmentProfiles?: string[]
}

interface Equipment {
  label: string
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
}

export function getProfiles(name: string, options?: Options): Weapon[] {
  const modifiedSkill = options?.weaponBallisticSkillAdjustment

  return weapons
    .filter((weapon) => weapon.name === name)
    .map((profile) => ({
      ...profile,
      weaponBallisticSkillAdjustment: modifiedSkill ? modifiedSkill : profile.weaponBallisticSkillAdjustment,
    }))
}

export function generateEquipmentProfile(weapon: Weapon, newEquipment: Equipment): Weapon {
  return { ...weapon, profile: newEquipment.label, equipment: [...weapon.equipment, newEquipment] }
}

export function addEquipmentToProfiles(profiles: Weapon[], equipment: Equipment[]) {
  return profiles.reduce<Weapon[]>((acc, profile) => {
    const equippedProfiles = equipment.reduce<Weapon[]>((acc, eq) => {
      const newAcc = [...acc, generateEquipmentProfile(profile, eq)]
      return newAcc
    }, [])
    const newAcc = [...acc, profile, ...equippedProfiles]
    return newAcc
  }, [])
}
