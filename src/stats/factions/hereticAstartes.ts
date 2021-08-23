import { addEquipmentToProfiles, generateEquipmentProfile, getProfiles, Profile } from '../../helpers'
import { Weapon } from '../weapons'

export const hereticAstartesEquipment = {
  GRISLY_TROPHY: {
    label: 'Grisly trophy',
  },
  DARK_BLESSING: {
    label: 'Dark blessing',
  },
}

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
    ...getProfiles('Boltgun (CSM)'),
    ...getProfiles('Bolt Pistol (CSM)'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Fists'),
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
  weapons: [...getProfiles('Heavy Bolter (CSM)'), ...getProfiles('Missile Launcher'), ...getProfiles('Fists')],
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
    ...getProfiles('Boltgun (CSM)'),
    ...getProfiles('Bolt Pistol (CSM)'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Fists'),
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
    ...getProfiles('Boltgun (CSM)'),
    ...getProfiles('Bolt pistol (CSM)'),
    ...getProfiles('Plasma pistol'),
    ...getProfiles('Fists'),
    ...addEquipmentToProfiles(getProfiles('Chainsword'), [
      hereticAstartesEquipment.GRISLY_TROPHY,
      hereticAstartesEquipment.DARK_BLESSING,
    ]),
    ...addEquipmentToProfiles(getProfiles('Power fist'), [
      hereticAstartesEquipment.GRISLY_TROPHY,
      hereticAstartesEquipment.DARK_BLESSING,
    ]),
    ...addEquipmentToProfiles(getProfiles('Power weapon'), [
      hereticAstartesEquipment.GRISLY_TROPHY,
      hereticAstartesEquipment.DARK_BLESSING,
    ]),
  ],
}

export const hereticAstartesStats = {
  name: 'Heretic Astartes',
  fireTeams: [
    {
      name: 'Chaos Space Marines',
      dataSheets: [chaosSmWarrior, chaosSmGunner, chaosSmHeavyGunner, chaosSmIconBearer, chaosSmAspiringChampion],
    },
  ],
}
