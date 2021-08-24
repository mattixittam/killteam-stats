import { Weapon, weapons } from './stats/weapons'

interface Options {
  weaponBallisticSkillAdjustment?: number
  attackDiceAdjustment?: number
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
  const attackDiceAdjustment = options?.attackDiceAdjustment

  return weapons
    .filter((weapon) => weapon.name === name)
    .map((profile) => ({
      ...profile,
      weaponBallisticSkillAdjustment: modifiedSkill ? modifiedSkill : profile.weaponBallisticSkillAdjustment,
      attackDice: attackDiceAdjustment ? profile.attackDice + attackDiceAdjustment : profile.attackDice,
    }))
}

export function generateEquipmentProfile(weapon: Weapon, newEquipment: Equipment): Weapon {
  return { ...weapon, profile: `+ ${newEquipment.label}`, equipment: [...weapon.equipment, newEquipment] }
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
