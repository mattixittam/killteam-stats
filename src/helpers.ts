import { Weapon, weapons } from './stats/weapons'

interface Options {
  weaponBallisticSkillAdjustment?: number
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
