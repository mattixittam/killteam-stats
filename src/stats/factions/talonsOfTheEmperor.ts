import { getWeaponProfiles, DataSheet } from '../../helpers'
import { abilities } from '../abilities'

export const custodianGuardLeader: DataSheet = {
  name: 'CUSTODIAN GUARD (LEADER)',
  movement: 6,
  apl: 4,
  groupActivation: 1,
  defense: 3,
  save: 2,
  saveCritical: 6,
  wounds: 19,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [...getWeaponProfiles('Guardian spear'), ...getWeaponProfiles('Sentinel blade')],
  defensiveMeleeWeapon: getWeaponProfiles('Guardian spear')[0],
  abilities: [abilities.THE_EMPERORS_CHOSEN],
}

export const custodianGuardWarrior: DataSheet = {
  name: 'CUSTODIAN GUARD (WARRIOR)',
  movement: 6,
  apl: 4,
  groupActivation: 1,
  defense: 3,
  save: 2,
  saveCritical: 6,
  wounds: 18,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [...getWeaponProfiles('Guardian spear'), ...getWeaponProfiles('Sentinel blade')],
  defensiveMeleeWeapon: getWeaponProfiles('Guardian spear')[0],
  abilities: [abilities.THE_EMPERORS_CHOSEN],
}

export const sisterOfSilenceProsecutor: DataSheet = {
  name: 'SISTER OF SILENCE PROSECUTOR',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [...getWeaponProfiles('Boltgun'), ...getWeaponProfiles('Gun butt', { attackDiceAdjustment: 1 })],
  abilities: [],
}

export const sisterOfSilenceWitchSeeker: DataSheet = {
  name: 'SISTER OF SILENCE WITCHSEEKER',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [...getWeaponProfiles('Flamer'), ...getWeaponProfiles('Gun butt', { attackDiceAdjustment: 1 })],
  abilities: [],
}

export const sisterOfSilenceVigilator: DataSheet = {
  name: 'SISTER OF SILENCE VIGILATOR',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [...getWeaponProfiles('Executioner greatblade')],
  abilities: [],
}

export const sisterOfSilenceSuperior: DataSheet = {
  name: 'SISTER OF SILENCE SUPERIOR',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 9,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [
    ...getWeaponProfiles('Boltgun'),
    ...getWeaponProfiles('Flamer'),
    ...getWeaponProfiles('Executioner greatblade'),
    ...getWeaponProfiles('Gun butt', { attackDiceAdjustment: 1 }),
  ],
  abilities: [],
}

export const talonsOfTheEmperorStats = {
  name: 'Talons of the emperor',
  fireTeams: [
    {
      name: 'Custodian Guards',
      dataSheets: [custodianGuardWarrior, custodianGuardLeader],
    },
    {
      name: 'Sisters of silence',
      dataSheets: [
        sisterOfSilenceProsecutor,
        sisterOfSilenceWitchSeeker,
        sisterOfSilenceVigilator,
        sisterOfSilenceSuperior,
      ],
    },
  ],
}
