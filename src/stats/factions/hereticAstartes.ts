import { addEquipmentToProfiles, getProfiles, Profile } from '../../helpers'
import { equipment } from '../equipment'

export const chaosSmWarrior: Profile = {
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
    ...addEquipmentToProfiles(getProfiles('Boltgun'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...addEquipmentToProfiles(getProfiles('Bolt Pistol'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...getProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...addEquipmentToProfiles(getProfiles('Chainsword'), [equipment.GRISLY_TROPHY, equipment.DARK_BLESSING]),
  ],
}
export const chaosSmGunner: Profile = {
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
    ...getProfiles('Flamer'),
    ...getProfiles('Meltagun'),
    ...getProfiles('Plasma gun'),
    ...getProfiles('Fists'),
  ],
}
export const chaosSmHeavyGunner: Profile = {
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
    ...addEquipmentToProfiles(getProfiles('Heavy bolter'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...getProfiles('Missile launcher'),
    ...getProfiles('Fists'),
  ],
}
export const chaosSmIconBearer: Profile = {
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
    ...addEquipmentToProfiles(getProfiles('Boltgun'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...addEquipmentToProfiles(getProfiles('Bolt Pistol'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...getProfiles('Fists'),
    ...addEquipmentToProfiles(getProfiles('Chainsword'), [equipment.GRISLY_TROPHY, equipment.DARK_BLESSING]),
  ],
}
export const chaosSmAspiringChampion: Profile = {
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
    ...addEquipmentToProfiles(getProfiles('Boltgun'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...addEquipmentToProfiles(getProfiles('Bolt Pistol'), [equipment.BELT_FEED, equipment.MALEFIC_ROUNDS]),
    ...getProfiles('Plasma pistol'),
    ...getProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...addEquipmentToProfiles(getProfiles('Chainsword'), [equipment.GRISLY_TROPHY, equipment.DARK_BLESSING]),
    ...addEquipmentToProfiles(getProfiles('Power fist', { attackDiceAdjustment: 1 }), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
    ...addEquipmentToProfiles(getProfiles('Power weapon', { attackDiceAdjustment: 1 }), [
      equipment.GRISLY_TROPHY,
      equipment.DARK_BLESSING,
    ]),
  ],
}

export const chaosCultistFighter: Profile = {
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
    ...getProfiles('Boltgun'),
    ...getProfiles('Autogun'),
    ...getProfiles('Brutal assault weapon'),
    ...getProfiles('Gun butt'),
  ],
}

export const chaosCultistGunner: Profile = {
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
  weapons: [...getProfiles('Flamer'), ...getProfiles('Heavy stubber'), ...getProfiles('Gun butt')],
}

export const chaosCultistChampion: Profile = {
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
    ...getProfiles('Autogun'),
    ...getProfiles('Autopistol'),
    ...getProfiles('Shotgun'),
    ...getProfiles('Brutal assault weapon'),
    ...getProfiles('Gun butt'),
  ],
}

export const hereticAstartesStats = {
  name: 'Heretic Astartes',
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
