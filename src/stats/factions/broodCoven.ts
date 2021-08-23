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

export const acolyteHybridTrooper = {
  name: 'NEOPHYTE HYBRID (TROOPER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Cult knife and claw')],
}

export const acolyteHybridGunner = {
  name: 'NEOPHYTE HYBRID (GUNNER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Hand flamer'), ...getProfiles('Cult knife and claw')],
}

export const acolyteHybridFighter = {
  name: 'NEOPHYTE HYBRID (FIGHTER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Autopistol'),
    ...getProfiles('Heavy rock cutter'),
    ...getProfiles('Heavy rock drill'),
    ...getProfiles('Heavy rock saw'),
  ],
}

export const acolyteHybridIconBearer = {
  name: 'NEOPHYTE HYBRID (ICON BEARER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Cult knife and claw')],
}

export const acolyteHybridLeader = {
  name: 'NEOPHYTE HYBRID (LEADER)',
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

export const hybridMetamorphFighter = {
  name: 'HYBRID METAMORPH (FIGHTER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Metamorph mutations')],
}

export const hybridMetamorphGunner = {
  name: 'HYBRID METAMORPH (GUNNER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Hand flamer'), ...getProfiles('Metamorph mutations')],
}

export const hybridMetamorphIconBearer = {
  name: 'HYBRID METAMORPH (ICON BEARER)',
  ballisticSkill: 4,
  weaponSkill: 3,
  weapons: [...getProfiles('Autopistol'), ...getProfiles('Metamorph mutations')],
}

export const hybridMetamorphLeader = {
  name: 'HYBRID METAMORPH (LEADER)',
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
