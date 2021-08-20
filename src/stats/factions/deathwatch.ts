import { getProfiles } from "../../helpers";

export const deathwatchVeteranWarrior = {
  name: "DEATHWATCH VETERAN (WARRIOR)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Deathwatch Boltgun"),
    ...getProfiles("Deathwatch Shotgun"),
    ...getProfiles("Stalker pattern boltgun"),
    ...getProfiles("Storm bolter"),
  ],
};
export const deathwatchVeteranFighter = {
  name: "DEATHWATCH VETERAN (FIGHTER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Bolt pistol"),
    ...getProfiles("Grav-pistol"),
    ...getProfiles("Hand flamer"),
    ...getProfiles("Inferno pistol"),
    ...getProfiles("Plasma pistol"),
  ],
};
export const deathwatchVeteranGunner = {
  name: "DEATHWATCH VETERAN (GUNNER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Combi-flamer"),
    ...getProfiles("Combi-grav"),
    ...getProfiles("Combi-melta"),
    ...getProfiles("Combi-plasma"),
    ...getProfiles("Deathwatch Boltgun"),
    ...getProfiles("Flamer"),
    ...getProfiles("Grav-gun"),
    ...getProfiles("Meltagun"),
    ...getProfiles("Plasma gun"),
  ],
};
export const deathwatchVeteranHeavyGunner = {
  name: "DEATHWATCH VETERAN (HEAVY GUNNER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Frag Cannon"),
    ...getProfiles("Infernus Heavy Bolter"),
    ...getProfiles("Missile Launcher"),
  ],
};
export const deathwatchVeteranWatchSergeant = {
  name: "DEATHWATCH VETERAN WATCH SERGEANT",
  weaponSkill: 2,
  weapons: [
    ...getProfiles("Deathwatch Boltgun"),
    ...getProfiles("Deathwatch Shotgun"),
    ...getProfiles("Combi-flamer"),
    ...getProfiles("Combi-grav"),
    ...getProfiles("Combi-melta"),
    ...getProfiles("Combi-plasma"),
    ...getProfiles("Flamer"),
    ...getProfiles("Grav-gun"),
    ...getProfiles("Meltagun"),
    ...getProfiles("Plasma gun"),
    ...getProfiles("Stalker pattern boltgun"),
    ...getProfiles("Storm bolter"),
    ...getProfiles("Bolt pistol"),
    ...getProfiles("Grav-pistol"),
    ...getProfiles("Hand flamer"),
    ...getProfiles("Inferno pistol"),
    ...getProfiles("Plasma pistol"),
  ],
};

export const dataSheetsDW = [
  deathwatchVeteranWarrior,
  deathwatchVeteranFighter,
  deathwatchVeteranGunner,
  deathwatchVeteranHeavyGunner,
  deathwatchVeteranWatchSergeant,
];
