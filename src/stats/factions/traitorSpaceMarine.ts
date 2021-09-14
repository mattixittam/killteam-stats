import { generateEquipmentVariantProfiles, getWeaponProfiles, DataSheet } from '../../helpers'
import { equipment } from '../equipment'

export const chaosSmWarrior: DataSheet = {
  name: 'CHAOS SPACE MARINE (WARRIOR)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 12,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Boltgun'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Bolt pistol'), [
      equipment.BELT_FEED,
      equipment.MALEFIC_ROUNDS,
    ]),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Chainsword'), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
  ],
  weaponOptions: [
    [['Boltgun'], ['Fists']],
    [['Bolt pistol'], ['Chainsword']],
  ],
}
export const chaosSmGunner: DataSheet = {
  name: 'CHAOS SPACE MARINE (GUNNER)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 12,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Flamer'),
    ...getWeaponProfiles('Meltagun'),
    ...getWeaponProfiles('Plasma gun'),
    ...getWeaponProfiles('Fists'),
  ],
  defaultWeapons: ['Fists'],
  weaponOptions: [[['Flamer', 'Meltagun', 'Plasma gun']]],
}
export const chaosSmHeavyGunner: DataSheet = {
  name: 'CHAOS SPACE MARINE (HEAVY GUNNER)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 12,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Heavy bolter'), [
      equipment.BELT_FEED,
      equipment.MALEFIC_ROUNDS,
    ]),
    ...getWeaponProfiles('Missile launcher'),
    ...getWeaponProfiles('Fists'),
  ],
  defaultWeapons: ['Fists'],
  weaponOptions: [[['Missile launcher', 'Heavy bolter']]],
}
export const chaosSmIconBearer: DataSheet = {
  name: 'CHAOS SPACE MARINE (ICON BEARER)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 12,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Boltgun'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Bolt pistol'), [
      equipment.BELT_FEED,
      equipment.MALEFIC_ROUNDS,
    ]),
    ...getWeaponProfiles('Fists'),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Chainsword'), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
  ],
  weaponOptions: [
    [['Boltgun'], ['Fists']],
    [['Bolt pistol'], ['Chainsword']],
  ],
}
export const chaosSmAspiringChampion: DataSheet = {
  name: 'CHAOS SPACE MARINE ASPIRING CHAMPION',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 13,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Boltgun'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Bolt pistol'), [
      equipment.BELT_FEED,
      equipment.MALEFIC_ROUNDS,
    ]),
    ...getWeaponProfiles('Plasma pistol'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Chainsword'), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power fist', { attackDiceAdjustment: 1 }), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power weapon', { attackDiceAdjustment: 1 }), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
  ],
  weaponOptions: [
    [
      ['Bolt pistol', 'Plasma pistol'],
      ['Chainsword', 'Power fist', 'Power weapon'],
    ],
  ],
}

export const chaosCultistFighter: DataSheet = {
  name: 'CHAOS CULTIST (FIGHTER)',
  movement: 6,
  apl: 2,
  groupActivation: 2,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getWeaponProfiles('Boltgun'),
    ...getWeaponProfiles('Autogun'),
    ...getWeaponProfiles('Brutal assault weapon'),
    ...getWeaponProfiles('Gun butt'),
  ],
  weaponOptions: [
    [['Autogun'], ['Gun butt']],
    [['Autopistol'], ['Brutal assault weapon']],
  ],
}

export const chaosCultistGunner: DataSheet = {
  name: 'CHAOS CULTIST (GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [...getWeaponProfiles('Flamer'), ...getWeaponProfiles('Heavy stubber'), ...getWeaponProfiles('Gun butt')],
  defaultWeapons: ['Gun butt'],
  weaponOptions: [[['Flamer', 'Heavy stubber']]],
}

export const chaosCultistChampion: DataSheet = {
  name: 'CHAOS CULTIST CHAMPION',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Autogun'),
    ...getWeaponProfiles('Autopistol'),
    ...getWeaponProfiles('Shotgun'),
    ...getWeaponProfiles('Brutal assault weapon'),
    ...getWeaponProfiles('Gun butt'),
  ],
  weaponOptions: [
    [['Autogun'], ['Gun butt']],
    [['Autopistol'], ['Brutal assault weapon']],
    [['Shotgun'], ['Brutal assault weapon']],
  ],
}

export const traitorSpaceMarineStats = {
  name: 'Traitor Space Marines',
  fireTeams: [
    {
      name: 'Chaos Space Marines',
      dataSheets: [chaosSmWarrior, chaosSmGunner, chaosSmHeavyGunner, chaosSmIconBearer, chaosSmAspiringChampion],
    },
    {
      name: 'Chaos Cultists',
      dataSheets: [chaosCultistFighter, chaosCultistGunner, chaosCultistChampion],
    },
  ],
}
