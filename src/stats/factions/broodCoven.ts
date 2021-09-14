import { getWeaponProfiles, DataSheet } from '../../helpers'

export const neophyteHybridTrooper: DataSheet = {
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
  weapons: [...getWeaponProfiles('Autogun'), ...getWeaponProfiles('Shotgun'), ...getWeaponProfiles('Gun butt')],
  defaultWeapons: ['Gun butt', 'Autogun', 'Shotgun'],
  weaponOptions: [],
}

export const neophyteHybridGunner: DataSheet = {
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
    ...getWeaponProfiles('Flamer'),
    ...getWeaponProfiles('Grenade launcher'),
    ...getWeaponProfiles('Webber'),
    ...getWeaponProfiles('Gun butt'),
  ],
  defaultWeapons: ['Gun butt'],
  weaponOptions: [[['Flamer', 'Grenade launcher', 'Webber']]],
}

export const neophyteHybridHeavyGunner: DataSheet = {
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
    ...getWeaponProfiles('Heavy stubber'),
    ...getWeaponProfiles('Mining laser'),
    ...getWeaponProfiles('Seismic cannon'),
    ...getWeaponProfiles('Gun butt'),
  ],
  defaultWeapons: ['Gun butt'],
  weaponOptions: [[['Heavy stubber', 'Mining laser', 'Seismic cannon']]],
}

export const neophyteHybridIconBearer: DataSheet = {
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
  weapons: [...getWeaponProfiles('Autogun'), ...getWeaponProfiles('Shotgun'), ...getWeaponProfiles('Gun butt')],
  defaultWeapons: ['Gun butt', 'Autogun', 'Shotgun'],
  weaponOptions: [],
}

export const neophyteHybridLeader: DataSheet = {
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
    ...getWeaponProfiles('Autogun'),
    ...getWeaponProfiles('Shotgun'),
    ...getWeaponProfiles('Autopistol'),
    ...getWeaponProfiles('Bolt pistol'),
    ...getWeaponProfiles('Web pistol'),
    ...getWeaponProfiles('Chainsword'),
    ...getWeaponProfiles('Gun butt', { weaponBallisticSkillAdjustment: 1 }),
    ...getWeaponProfiles('Power maul'),
    ...getWeaponProfiles('Power pick'),
  ],
  weaponOptions: [
    [['Autogun', 'Shotgun'], ['Gun butt']],
    [
      ['Autopistol', 'Bolt pistol', 'Web pistol'],
      ['Chainsword', 'Power maul', 'Power pick'],
    ],
  ],
}

export const acolyteHybridTrooper: DataSheet = {
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
  weapons: [...getWeaponProfiles('Autopistol'), ...getWeaponProfiles('Cult knife and claw')],
  defaultWeapons: ['Autopistol', 'Cult knife and claw'],
  weaponOptions: [],
}

export const acolyteHybridGunner: DataSheet = {
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
  weapons: [...getWeaponProfiles('Hand flamer'), ...getWeaponProfiles('Cult knife and claw')],
  defaultWeapons: ['Hand flamer', 'Cult knife and claw'],
  weaponOptions: [],
}

export const acolyteHybridFighter: DataSheet = {
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
    ...getWeaponProfiles('Autopistol'),
    ...getWeaponProfiles('Heavy rock cutter'),
    ...getWeaponProfiles('Heavy rock drill'),
    ...getWeaponProfiles('Heavy rock saw'),
  ],
  defaultWeapons: ['Autopistol'],
  weaponOptions: [[['Heavy rock cutter', 'Heavy rock drill', 'Heavy rock saw']]],
}

export const acolyteHybridIconBearer: DataSheet = {
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
  weapons: [...getWeaponProfiles('Autopistol'), ...getWeaponProfiles('Cult knife and claw')],
  defaultWeapons: ['Autopistol', 'Cult knife and claw'],
  weaponOptions: [],
}

export const acolyteHybridLeader: DataSheet = {
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
    ...getWeaponProfiles('Autopistol'),
    ...getWeaponProfiles('Hand flamer'),
    ...getWeaponProfiles('Lash whip'),
    ...getWeaponProfiles('Cult bonesword and claw'),
    ...getWeaponProfiles('Cult knife and claw'),
  ],
  weaponOptions: [
    [
      ['Autopistol', 'Hand flamer', 'Lash whip'],
      ['Cult bonesword and claw', 'Cult knife and claw'],
    ],
  ],
}

export const hybridMetamorphFighter: DataSheet = {
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
  weapons: [...getWeaponProfiles('Autopistol'), ...getWeaponProfiles('Metamorph mutations')],
  defaultWeapons: ['Autopistol', 'Metamorph mutations'],
  weaponOptions: [],
}

export const hybridMetamorphGunner: DataSheet = {
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
  weapons: [...getWeaponProfiles('Hand flamer'), ...getWeaponProfiles('Metamorph mutations')],
  defaultWeapons: ['Hand flamer', 'Metamorph mutations'],
  weaponOptions: [],
}

export const hybridMetamorphIconBearer: DataSheet = {
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
  weapons: [...getWeaponProfiles('Autopistol'), ...getWeaponProfiles('Metamorph mutations')],
  defaultWeapons: ['Autopistol', 'Metamorph mutations'],
  weaponOptions: [],
}

export const hybridMetamorphLeader: DataSheet = {
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
    ...getWeaponProfiles('Autopistol'),
    ...getWeaponProfiles('Hand flamer'),
    ...getWeaponProfiles('Cult bonesword and metamorph mutations'),
    ...getWeaponProfiles('Metamorph mutations'),
  ],
  weaponOptions: [
    [
      ['Autopistol', 'Hand flamer'],
      ['Cult bonesword and metamorph mutations', 'Metamorph mutations'],
    ],
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
