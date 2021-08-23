import { getProfiles, Profile } from '../../helpers'

export const neophyteHybridTrooper: Profile = {
  name: 'NEOPHYTE HYBRID (TROOPER)',
  movement: 6,
  apl: 2,
  groupActivation: 2,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [...getProfiles('Autogun'), ...getProfiles('Shotgun'), ...getProfiles('Gun butt')],
}

export const neophyteHybridGunner: Profile = {
  name: 'NEOPHYTE HYBRID (GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getProfiles('Flamer'),
    ...getProfiles('Grenade launcher'),
    ...getProfiles('Webber'),
    ...getProfiles('Gun butt'),
  ],
}

export const neophyteHybridHeavyGunner: Profile = {
  name: 'NEOPHYTE HYBRID (HEAVY GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getProfiles('Heavy stubber'),
    ...getProfiles('Mining laser'),
    ...getProfiles('Seismic cannon'),
    ...getProfiles('Gun butt'),
  ],
}

export const neophyteHybridIconBearer: Profile = {
  name: 'NEOPHYTE HYBRID (ICON BEARER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [...getProfiles('Autogun'), ...getProfiles('Shotgun'), ...getProfiles('Gun butt')],
}

export const neophyteHybridLeader: Profile = {
  name: 'NEOPHYTE HYBRID (LEADER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 7,
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

export const acolyteHybridTrooper: Profile = {
  name: 'NEOPHYTE HYBRID (TROOPER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Cult knife and claw')],
}

export const acolyteHybridGunner: Profile = {
  name: 'NEOPHYTE HYBRID (GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Hand flamer'), ...getProfiles('Cult knife and claw')],
}

export const acolyteHybridFighter: Profile = {
  name: 'NEOPHYTE HYBRID (FIGHTER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Autopistol'),
    ...getProfiles('Heavy rock cutter'),
    ...getProfiles('Heavy rock drill'),
    ...getProfiles('Heavy rock saw'),
  ],
}

export const acolyteHybridIconBearer: Profile = {
  name: 'NEOPHYTE HYBRID (ICON BEARER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Cult knife and claw')],
}

export const acolyteHybridLeader: Profile = {
  name: 'NEOPHYTE HYBRID (LEADER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 9,
  ballisticSkill: 3,
  weaponSkill: 2,
  weapons: [
    ...getProfiles('Autopistol'),
    ...getProfiles('Hand flamer'),
    ...getProfiles('Lash whip'),
    ...getProfiles('Cult bonesword and claw'),
    ...getProfiles('Cult knife and claw'),
  ],
}

export const hybridMetamorphFighter: Profile = {
  name: 'HYBRID METAMORPH (FIGHTER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Metamorph mutations')],
}

export const hybridMetamorphGunner: Profile = {
  name: 'HYBRID METAMORPH (GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Hand flamer'), ...getProfiles('Metamorph mutations')],
}

export const hybridMetamorphIconBearer: Profile = {
  name: 'HYBRID METAMORPH (ICON BEARER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Metamorph mutations')],
}

export const hybridMetamorphLeader: Profile = {
  name: 'HYBRID METAMORPH (LEADER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 5,
  saveCritical: 6,
  wounds: 9,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [
    ...getProfiles('Autopistol'),
    ...getProfiles('Hand flamer'),
    ...getProfiles('Cult bonesword and metamorph mutations'),
    ...getProfiles('Metamorph mutations'),
  ],
}

export const broodCovenStats = {
  name: 'Brood Coven',
  fireTeams: [
    {
      name: 'Neophyte Hybrids',
      dataSheets: [
        neophyteHybridTrooper,
        neophyteHybridGunner,
        neophyteHybridHeavyGunner,
        neophyteHybridIconBearer,
        neophyteHybridLeader,
      ],
    },
    {
      name: 'Acolyte Hybrids',
      dataSheets: [
        acolyteHybridTrooper,
        acolyteHybridGunner,
        acolyteHybridFighter,
        acolyteHybridIconBearer,
        acolyteHybridLeader,
      ],
    },
    {
      name: 'Hybrid Metamorphs',
      dataSheets: [hybridMetamorphFighter, hybridMetamorphGunner, hybridMetamorphIconBearer, hybridMetamorphLeader],
    },
  ],
}
