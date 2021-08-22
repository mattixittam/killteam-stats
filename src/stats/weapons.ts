import { Rule } from '../rules'
import { nonHeavyRangedWeapons } from './weapons/nonHeavyRangedWeapons'
import { heavyRangedWeapons } from './weapons/heavyRangedWeapons'
import { meleeWeapons } from './weapons/meleeWeapons'
import { pistols } from './weapons/pistols'

export interface Weapon {
  name: string
  profile: string
  attackDice: number
  weaponBallisticSkillAdjustment?: number
  fixedWeaponBallisticSkill?: number
  damage: number
  damageCritical: number
  specialRules: Rule[]
  criticalRules: Rule[]
  type: 'RANGED' | 'MELEE'
}

export const weapons: Weapon[] = [...meleeWeapons, ...nonHeavyRangedWeapons, ...heavyRangedWeapons, ...pistols]
