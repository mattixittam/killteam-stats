import { addEquipmentToProfiles, getProfiles, Profile } from '../../helpers'

export const adeptusAstartesEquipment = {
  STORM_SHIELD: {
    label: 'Storm shield',
  },
}

export const deathwatchVeteranWarrior: Profile = {
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
    ...getProfiles('Deathwatch Boltgun'),
    ...getProfiles('Deathwatch Shotgun'),
    ...getProfiles('Stalker pattern boltgun'),
    ...getProfiles('Storm bolter'),
    ...getProfiles('Fists'),
    ...getProfiles('Power weapon'),
  ],
}
export const deathwatchVeteranFighter: Profile = {
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
    ...getProfiles('Bolt pistol'),
    ...getProfiles('Grav-pistol'),
    ...getProfiles('Hand flamer'),
    ...getProfiles('Inferno pistol'),
    ...getProfiles('Plasma pistol'),
    ...getProfiles('Chainsword', { attackDiceAdjustment: 1 }),
    ...getProfiles('Heavy thunder hammer', { attackDiceAdjustment: 1 }),
    ...getProfiles('Lightning claw', { attackDiceAdjustment: 1 }),
    ...getProfiles('Lightning claws', { attackDiceAdjustment: 1 }),
    ...getProfiles('Power fist', { attackDiceAdjustment: 1 }),
    ...getProfiles('Power maul', { attackDiceAdjustment: 1 }),
    ...getProfiles('Power weapon', { attackDiceAdjustment: 1 }),
    ...getProfiles('Thunder hammer', { attackDiceAdjustment: 1 }),
  ],
}
export const deathwatchVeteranGunner: Profile = {
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
    ...getProfiles('Combi-flamer'),
    ...getProfiles('Combi-grav'),
    ...getProfiles('Combi-melta'),
    ...getProfiles('Combi-plasma'),
    ...getProfiles('Deathwatch Boltgun'),
    ...getProfiles('Flamer'),
    ...getProfiles('Grav-gun'),
    ...getProfiles('Meltagun'),
    ...getProfiles('Plasma gun'),
    ...getProfiles('Fists'),
  ],
}
export const deathwatchVeteranHeavyGunner: Profile = {
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
    ...getProfiles('Frag Cannon'),
    ...getProfiles('Infernus Heavy Bolter'),
    ...getProfiles('Missile Launcher'),
    ...getProfiles('Fists'),
  ],
}
export const deathwatchVeteranWatchSergeant: Profile = {
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
    ...getProfiles('Deathwatch Boltgun'),
    ...getProfiles('Deathwatch Shotgun'),
    ...getProfiles('Combi-flamer'),
    ...getProfiles('Combi-grav'),
    ...getProfiles('Combi-melta'),
    ...getProfiles('Combi-plasma'),
    ...getProfiles('Flamer'),
    ...getProfiles('Grav-gun'),
    ...getProfiles('Meltagun'),
    ...getProfiles('Plasma gun'),
    ...getProfiles('Stalker pattern boltgun'),
    ...getProfiles('Storm bolter'),
    ...getProfiles('Bolt pistol'),
    ...getProfiles('Grav-pistol'),
    ...getProfiles('Hand flamer'),
    ...getProfiles('Inferno pistol'),
    ...getProfiles('Plasma pistol'),
    ...getProfiles('Fists', { attackDiceAdjustment: 1 }),
    ...getProfiles('Heavy thunder hammer', { attackDiceAdjustment: 1 }),
    ...getProfiles('Lightning claws', { attackDiceAdjustment: 1 }),
    ...addEquipmentToProfiles(getProfiles('Chainsword', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
    ...addEquipmentToProfiles(getProfiles('Lightning claw', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
    ...addEquipmentToProfiles(getProfiles('Power fist', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
    ...addEquipmentToProfiles(getProfiles('Power maul', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
    ...addEquipmentToProfiles(getProfiles('Power weapon', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
    ...addEquipmentToProfiles(getProfiles('Thunder hammer', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
    ...addEquipmentToProfiles(getProfiles('Xenophase blade', { attackDiceAdjustment: 1 }), [
      adeptusAstartesEquipment.STORM_SHIELD,
    ]),
  ],
}

export const adeptusAstartesStats = {
  name: 'Adeptus Astartes',
  fireTeams: [
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
