import { Weapon, weapons } from './stats/weapons'

export function getProfiles(name: string): Weapon[] {
  return weapons.filter((weapon) => weapon.name === name)
}
