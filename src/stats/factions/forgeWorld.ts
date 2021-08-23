import { getProfiles } from '../../helpers'

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
  weapons: [...getProfiles('Galvanic rifle'), ...getProfiles('Gun butt')],
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
    ...getProfiles('Arc rifle'),
    ...getProfiles('Plasma caliver'),
    ...getProfiles('Transuranic arquebus'),
    ...getProfiles('Gun butt'),
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
    ...getProfiles('Arc rifle'),
    ...getProfiles('Galvanic rifle'),
    ...getProfiles('Phosphor blast pistol'),
    ...getProfiles('Radium pistol'),
    ...getProfiles('Arc maul'),
    ...getProfiles('Gun butt'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Taser goad'),
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
  weapons: [...getProfiles('Radium carbine'), ...getProfiles('Gun butt')],
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
    ...getProfiles('Arc rifle'),
    ...getProfiles('Plasma caliver'),
    ...getProfiles('Transuranic arquebus'),
    ...getProfiles('Gun butt'),
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
    ...getProfiles('Arc pistol'),
    ...getProfiles('Phosphor blast pistol'),
    ...getProfiles('Radium carbine'),
    ...getProfiles('Radium pistol'),
    ...getProfiles('Arc maul'),
    ...getProfiles('Gun butt'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Taser goad'),
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
  weapons: [...getProfiles('Chordclaw and transonic razor'), ...getProfiles('Transonic blades')],
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
  weapons: [...getProfiles('Chordclaw and transonic razor'), ...getProfiles('Transonic blades')],
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
    ...getProfiles('Flechette blaster'),
    ...getProfiles('Stubcarbine'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Taser goad'),
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
    ...getProfiles('Flechette blaster'),
    ...getProfiles('Stubcarbine'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Taser goad'),
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
