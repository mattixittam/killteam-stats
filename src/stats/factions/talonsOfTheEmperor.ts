import { addEquipmentToProfiles, DefenseProfile, getProfiles, Profile } from '../../helpers'
import { abilities } from '../abilities'

export const custodianGuardLeader: DefenseProfile = {
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
  weapons: [...getProfiles('Guardian spear'), ...getProfiles('Sentinel blade')],
  defensiveMeleeWeapon: getProfiles('Guardian spear')[0],
  abilities: [abilities.THE_EMPERORS_CHOSEN],
}

export const custodianGuardWarrior: DefenseProfile = {
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
  weapons: [...getProfiles('Guardian spear'), ...getProfiles('Sentinel blade')],
  defensiveMeleeWeapon: getProfiles('Guardian spear')[0],
  abilities: [abilities.THE_EMPERORS_CHOSEN],
}

export const sisterOfSilenceProsecutor: Profile = {
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
  weapons: [...getProfiles('Boltgun'), ...getProfiles('Gun butt', { attackDiceAdjustment: 1 })],
  abilities: [],
}

export const sisterOfSilenceWitchSeeker: Profile = {
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
  weapons: [...getProfiles('Flamer'), ...getProfiles('Gun butt', { attackDiceAdjustment: 1 })],
  abilities: [],
}

export const sisterOfSilenceVigilator: Profile = {
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
  weapons: [...getProfiles('Executioner greatblade')],
  abilities: [],
}

export const sisterOfSilenceSuperior: Profile = {
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
    ...getProfiles('Boltgun'),
    ...getProfiles('Flamer'),
    ...getProfiles('Executioner greatblade'),
    ...getProfiles('Gun butt', { attackDiceAdjustment: 1 }),
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
