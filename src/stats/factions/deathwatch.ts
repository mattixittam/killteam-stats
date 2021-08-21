import { getProfiles } from '../../helpers'

export const deathwatchVeteranWarrior = {
  name: 'DEATHWATCH VETERAN (WARRIOR)',
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
export const deathwatchVeteranFighter = {
  name: 'DEATHWATCH VETERAN (FIGHTER)',
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Bolt pistol'),
    ...getProfiles('Grav-pistol'),
    ...getProfiles('Hand flamer'),
    ...getProfiles('Inferno pistol'),
    ...getProfiles('Plasma pistol'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Heavy thunder hammer'),
    ...getProfiles('Lightning claw'),
    ...getProfiles('Lightning claws'),
    ...getProfiles('Power fist'),
    ...getProfiles('Power maul'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Thunder hammer'),
  ],
}
export const deathwatchVeteranGunner = {
  name: 'DEATHWATCH VETERAN (GUNNER)',
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
export const deathwatchVeteranHeavyGunner = {
  name: 'DEATHWATCH VETERAN (HEAVY GUNNER)',
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Frag Cannon'),
    ...getProfiles('Infernus Heavy Bolter'),
    ...getProfiles('Missile Launcher'),
    ...getProfiles('Fists'),
  ],
}
export const deathwatchVeteranWatchSergeant = {
  name: 'DEATHWATCH VETERAN WATCH SERGEANT',
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
    ...getProfiles('Fists'),
    ...getProfiles('Heavy thunder hammer'),
    ...getProfiles('Lightning claws'),
    ...getProfiles('Chainsword'),
    ...getProfiles('Lightning claw'),
    ...getProfiles('Power fist'),
    ...getProfiles('Power maul'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Thunder hammer'),
    ...getProfiles('Xenophase blade'),
  ],
}

export const dataSheetsDW = [
  deathwatchVeteranWarrior,
  deathwatchVeteranFighter,
  deathwatchVeteranGunner,
  deathwatchVeteranHeavyGunner,
  deathwatchVeteranWatchSergeant,
]
