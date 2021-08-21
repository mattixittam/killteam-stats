import { getProfiles } from '../../helpers'

export const chaosSmWarrior = {
  name: 'CHAOS SPACE MARINE (WARRIOR)',
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Boltgun (CSM)'),
    ...getProfiles('Bolt Pistol (CSM)'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Fists'),
  ],
}
export const chaosSmGunner = {
  name: 'CHAOS SPACE MARINE (GUNNER)',
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Flamer'),
    ...getProfiles('Meltagun'),
    ...getProfiles('Plasma gun'),
    ...getProfiles('Fists'),
  ],
}
export const chaosSmHeavyGunner = {
  name: 'CHAOS SPACE MARINE (HEAVY GUNNER)',
  weaponSkill: 3,
  weapons: [...getProfiles('Heavy Bolter (CSM)'), ...getProfiles('Missile Launcher'), ...getProfiles('Fists')],
}
export const chaosSmIconBearer = {
  name: 'CHAOS SPACE MARINE (ICON BEARER)',
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Boltgun (CSM)'),
    ...getProfiles('Bolt Pistol (CSM)'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Fists'),
  ],
}
export const chaosSmAspiringChampion = {
  name: 'CHAOS SPACE MARINE ASPIRING CHAMPION',
  weaponSkill: 2,
  weapons: [
    ...getProfiles('Boltgun (CSM)'),
    ...getProfiles('Bolt pistol (CSM)'),
    ...getProfiles('Plasma pistol'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Fists'),
    ...getProfiles('Power fist'),
    ...getProfiles('Power weapon'),
  ],
}

export const dataSheetsCSM = [
  chaosSmWarrior,
  chaosSmGunner,
  chaosSmHeavyGunner,
  chaosSmIconBearer,
  chaosSmAspiringChampion,
]
