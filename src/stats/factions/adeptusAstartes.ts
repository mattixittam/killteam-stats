import { generateEquipmentVariantProfiles, getWeaponProfiles, DataSheet } from '../../helpers'
import { equipment } from '../equipment'

export const deathwatchVeteranWarrior: DataSheet = {
  name: 'DEATHWATCH VETERAN (WARRIOR)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 11,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Deathwatch boltgun'),
    ...getWeaponProfiles('Deathwatch shotgun'),
    ...getWeaponProfiles('Stalker pattern boltgun'),
    ...getWeaponProfiles('Storm bolter'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...getWeaponProfiles('Power weapon'),
  ],
  weaponOptions: [
    ['Deathwatch boltgun', 'Power weapon'],
    [['Deathwatch shotgun', 'Stalker pattern boltgun', 'Storm bolter'], ['Fists']],
  ],
}
export const deathwatchVeteranFighter: DataSheet = {
  name: 'DEATHWATCH VETERAN (FIGHTER)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 11,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Bolt pistol'),
    ...getWeaponProfiles('Grav-pistol'),
    ...getWeaponProfiles('Hand flamer'),
    ...getWeaponProfiles('Inferno pistol'),
    ...getWeaponProfiles('Plasma pistol'),
    ...getWeaponProfiles('Heavy thunder hammer', { attackDiceAdjustment: 1 }),
    ...getWeaponProfiles('Lightning claws', { attackDiceAdjustment: 1 }),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Chainsword', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Lightning claw', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power fist', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power maul', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power weapon', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Thunder hammer', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
  ],
}
export const deathwatchVeteranGunner: DataSheet = {
  name: 'DEATHWATCH VETERAN (GUNNER)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 11,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Combi-flamer'),
    ...getWeaponProfiles('Combi-grav'),
    ...getWeaponProfiles('Combi-melta'),
    ...getWeaponProfiles('Combi-plasma'),
    ...getWeaponProfiles('Deathwatch boltgun'),
    ...getWeaponProfiles('Flamer'),
    ...getWeaponProfiles('Grav-gun'),
    ...getWeaponProfiles('Meltagun'),
    ...getWeaponProfiles('Plasma gun'),
    ...getWeaponProfiles('Fists'),
  ],
}
export const deathwatchVeteranHeavyGunner: DataSheet = {
  name: 'DEATHWATCH VETERAN (HEAVY GUNNER)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 11,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Frag Cannon'),
    ...getWeaponProfiles('Infernus heavy bolter'),
    ...getWeaponProfiles('Missile launcher'),
    ...getWeaponProfiles('Fists'),
  ],
}
export const deathwatchVeteranWatchSergeant: DataSheet = {
  name: 'DEATHWATCH VETERAN WATCH SERGEANT',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 12,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [
    ...getWeaponProfiles('Deathwatch boltgun'),
    ...getWeaponProfiles('Deathwatch shotgun'),
    ...getWeaponProfiles('Combi-flamer'),
    ...getWeaponProfiles('Combi-grav'),
    ...getWeaponProfiles('Combi-melta'),
    ...getWeaponProfiles('Combi-plasma'),
    ...getWeaponProfiles('Flamer'),
    ...getWeaponProfiles('Grav-gun'),
    ...getWeaponProfiles('Meltagun'),
    ...getWeaponProfiles('Plasma gun'),
    ...getWeaponProfiles('Stalker pattern boltgun'),
    ...getWeaponProfiles('Storm bolter'),
    ...getWeaponProfiles('Bolt pistol'),
    ...getWeaponProfiles('Grav-pistol'),
    ...getWeaponProfiles('Hand flamer'),
    ...getWeaponProfiles('Inferno pistol'),
    ...getWeaponProfiles('Plasma pistol'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...getWeaponProfiles('Heavy thunder hammer', { attackDiceAdjustment: 1 }),
    ...getWeaponProfiles('Lightning claws', { attackDiceAdjustment: 1 }),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Chainsword', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Lightning claw', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power fist', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power maul', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Power weapon', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Thunder hammer', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Xenophase blade', { attackDiceAdjustment: 1 }), [
      equipment.STORM_SHIELD,
    ]),
  ],
}

/**
 * REIVERS
 */

export const reiverWarrior: DataSheet = {
  name: 'REIVER (WARRIOR)',
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
    ...getWeaponProfiles('Bolt carbine'),
    ...getWeaponProfiles('Special issue bolt pistol'),
    ...getWeaponProfiles('Combat knife'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
  ],
}

export const reiverSergeant: DataSheet = {
  name: 'REIVER SERGEANT',
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
    ...getWeaponProfiles('Bolt carbine'),
    ...getWeaponProfiles('Special issue bolt pistol'),
    ...getWeaponProfiles('Combat knife'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
  ],
}

/**
 * INTERCESSORS
 */
export const intercessorWarrior: DataSheet = {
  name: 'INTERCESSOR (WARRIOR)',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 13,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Auto bolt rifle'),
    ...getWeaponProfiles('Bolt rifle'),
    ...getWeaponProfiles('Stalker bolt rifle'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
  ],
}

export const intercessorSergeant: DataSheet = {
  name: 'INTERCESSOR SERGEANT',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 14,
  ballisticSkill: 2,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Auto bolt rifle'),
    ...getWeaponProfiles('Bolt pistol'),
    ...getWeaponProfiles('Bolt rifle'),
    ...getWeaponProfiles('Hand flamer'),
    ...getWeaponProfiles('Plasma pistol'),
    ...getWeaponProfiles('Stalker bolt rifle'),
    ...getWeaponProfiles('Chainsword'),
    ...getWeaponProfiles('Chainsword'),
    ...getWeaponProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...getWeaponProfiles('Power fist'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Thunder hammer'),
  ],
}

export const adeptusAstartesStats = {
  name: 'Adeptus Astartes',
  fireTeams: [
    {
      name: 'Intercessors',
      dataSheets: [intercessorWarrior, intercessorSergeant],
    },
    {
      name: 'Reivers',
      dataSheets: [reiverWarrior, reiverSergeant],
    },
    {
      name: 'Deathwatch Veterans',
      dataSheets: [
        deathwatchVeteranWarrior,
        deathwatchVeteranFighter,
        deathwatchVeteranGunner,
        deathwatchVeteranHeavyGunner,
        deathwatchVeteranWatchSergeant,
      ],
    },
  ],
}
