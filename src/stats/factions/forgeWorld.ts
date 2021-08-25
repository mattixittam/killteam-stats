import { getWeaponProfiles } from '../../helpers'

export const skitariiRangerTrooper = {
  name: 'SKITARII RANGER (TROOPER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 3,
  weaponSkill: 4,
  weapons: [...getWeaponProfiles('Galvanic rifle'), ...getWeaponProfiles('Gun butt')],
}

export const skitariiRangerGunner = {
  name: 'SKITARII RANGER (GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 3,
  weaponSkill: 4,
  weapons: [
    ...getWeaponProfiles('Arc rifle'),
    ...getWeaponProfiles('Plasma caliver'),
    ...getWeaponProfiles('Transuranic arquebus'),
    ...getWeaponProfiles('Gun butt'),
  ],
}

export const skitariiRangerAlpha = {
  name: 'SKITARII RANGER ALPHA',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 2,
  weaponSkill: 4,
  weapons: [
    ...getWeaponProfiles('Arc rifle'),
    ...getWeaponProfiles('Galvanic rifle'),
    ...getWeaponProfiles('Phosphor blast pistol'),
    ...getWeaponProfiles('Radium pistol'),
    ...getWeaponProfiles('Arc maul'),
    ...getWeaponProfiles('Gun butt'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Taser goad'),
  ],
}

export const skitariiVanguardTrooper = {
  name: 'SKITARII VANGUARD (TROOPER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 3,
  weaponSkill: 4,
  weapons: [...getWeaponProfiles('Radium carbine'), ...getWeaponProfiles('Gun butt')],
}

export const skitariiVanguardGunner = {
  name: 'SKITARII VANGUARD (GUNNER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 7,
  ballisticSkill: 3,
  weaponSkill: 4,
  weapons: [
    ...getWeaponProfiles('Arc rifle'),
    ...getWeaponProfiles('Plasma caliver'),
    ...getWeaponProfiles('Transuranic arquebus'),
    ...getWeaponProfiles('Gun butt'),
  ],
}

export const skitariiVanguardAlpha = {
  name: 'SKITARII VANGUARD ALPHA',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 8,
  ballisticSkill: 2,
  weaponSkill: 4,
  weapons: [
    ...getWeaponProfiles('Arc pistol'),
    ...getWeaponProfiles('Phosphor blast pistol'),
    ...getWeaponProfiles('Radium carbine'),
    ...getWeaponProfiles('Radium pistol'),
    ...getWeaponProfiles('Arc maul'),
    ...getWeaponProfiles('Gun butt'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Taser goad'),
  ],
}

export const sicarianRuststalkerTrooper = {
  name: 'SICARIAN RUSTSTALKER (TROOPER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 10,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [...getWeaponProfiles('Chordclaw and transonic razor'), ...getWeaponProfiles('Transonic blades')],
}

export const sicarianRuststalkerPrinceps = {
  name: 'SICARIAN RUSTSTALKER PRINCEPS',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 11,
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [...getWeaponProfiles('Chordclaw and transonic razor'), ...getWeaponProfiles('Transonic blades')],
}

export const sicarianInfiltratorTrooper = {
  name: 'SICARIAN INFILTRATOR (TROOPER)',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 10,
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Flechette blaster'),
    ...getWeaponProfiles('Stubcarbine'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Taser goad'),
  ],
}

export const sicarianInfiltratorPrinceps = {
  name: 'SICARIAN INFILTRATOR PRINCEPS',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 11,
  ballisticSkill: 2,
  weaponSkill: 3,
  weapons: [
    ...getWeaponProfiles('Flechette blaster'),
    ...getWeaponProfiles('Stubcarbine'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Taser goad'),
  ],
}

export const forgeWorldStats = {
  name: 'Forge World',
  fireTeams: [
    {
      name: 'Skitarii Rangers',
      dataSheets: [skitariiRangerTrooper, skitariiRangerGunner, skitariiRangerAlpha],
    },
    {
      name: 'Skitarii Vanguards',
      dataSheets: [skitariiVanguardTrooper, skitariiVanguardGunner, skitariiVanguardAlpha],
    },
    {
      name: 'Sicarians',
      dataSheets: [
        sicarianRuststalkerTrooper,
        sicarianRuststalkerPrinceps,
        sicarianInfiltratorTrooper,
        sicarianInfiltratorPrinceps,
      ],
    },
  ],
}
