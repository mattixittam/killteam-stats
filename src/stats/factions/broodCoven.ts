import { getProfiles } from '../../helpers'

export const neophyteHybridTrooper = {
  name: 'NEOPHYTE HYBRID (TROOPER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [...getProfiles('Autogun'), ...getProfiles('Shotgun'), ...getProfiles('Gun butt')],
}

export const neophyteHybridGunner = {
  name: 'NEOPHYTE HYBRID (GUNNER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getProfiles('Flamer'),
    ...getProfiles('Grenade launcher'),
    ...getProfiles('Webber'),
    ...getProfiles('Gun butt'),
  ],
}

export const neophyteHybridHeavyGunner = {
  name: 'NEOPHYTE HYBRID (HEAVY GUNNER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getProfiles('Heavy stubber'),
    ...getProfiles('Mining laser'),
    ...getProfiles('Seismic cannon'),
    ...getProfiles('Gun butt'),
  ],
}

export const neophyteHybridIconBearer = {
  name: 'NEOPHYTE HYBRID (ICON BEARER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [...getProfiles('Autogun'), ...getProfiles('Shotgun'), ...getProfiles('Gun butt')],
}

export const neophyteHybridLeader = {
  name: 'NEOPHYTE HYBRID (LEADER)',
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Autogun'),
    ...getProfiles('Shotgun'),
    ...getProfiles('Autopistol'),
    ...getProfiles('Bolt pistol'),
    ...getProfiles('Web pistol'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Gun butt', { weaponBallisticSkillAdjustment: 1 }),
    ...getProfiles('Power maul'),
    ...getProfiles('Power pick'),
  ],
}

export const dataSheetsNeophyteHybrids = [
  neophyteHybridTrooper,
  neophyteHybridGunner,
  neophyteHybridHeavyGunner,
  neophyteHybridIconBearer,
  neophyteHybridLeader,
]

export const broodCovenStats = {
  name: 'Brood Coven',
  fireTeams: [
    {
      name: 'Neophyte Hybrids',
      dataSheets: [...dataSheetsNeophyteHybrids],
    },
    {
      name: 'Acolyte Hybrids',
      dataSheets: [],
    },
    {
      name: 'Hybrid Metamorphs',
      dataSheets: [],
    },
  ],
}
