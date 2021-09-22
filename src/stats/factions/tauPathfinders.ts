import { DataSheet, getWeaponProfiles } from '../../helpers'

export const novitiateExactor: DataSheet = {
  name: 'MARKSMAN PATHFINDER',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 3,
  weaponSkill: 5,
  weapons: [...getWeaponProfiles('Marksman rail rifle'), ...getWeaponProfiles('Fists')],
  defaultWeapons: ['Marksman rail rifle', 'Fists'],
  weaponOptions: [],
}

export const tauPathfindersStats = {
  name: "T'au Pathfinders",
  fireTeams: [
    {
      name: 'Fireteam',
      dataSheets: [novitiateExactor],
    },
  ],
}
