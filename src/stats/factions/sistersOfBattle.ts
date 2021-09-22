import { DataSheet, getWeaponProfiles } from '../../helpers'

export const novitiateExactor: DataSheet = {
  name: 'NOVITIATE EXACTOR',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [...getWeaponProfiles('Neural whips')],
  defaultWeapons: ['Neural whips'],
  weaponOptions: [],
}

export const sistersOfBattleStats = {
  name: 'Sisters of Battle',
  fireTeams: [
    {
      name: 'Fireteam',
      dataSheets: [novitiateExactor],
    },
  ],
}
