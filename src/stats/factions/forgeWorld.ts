import { DataSheet, getWeaponProfiles } from '../../helpers'

export const skitariiRangerTrooper: DataSheet = {
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
  defaultWeapons: ['Galvanic rifle', 'Gun butt'],
  weaponOptions: [],
}

export const skitariiRangerGunner: DataSheet = {
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
  defaultWeapons: ['Gun butt'],
  weaponOptions: [[['Arc rifle', 'Plasma caliver', 'Transuranic arquebus']]],
}

export const skitariiRangerAlpha: DataSheet = {
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
  weaponOptions: [
    [['Gun butt'], ['Galvanic rifle']],
    [
      ['Arc pistol', 'Phosphor blast pistol', 'Radium pistol'],
      ['Arc maul', 'Power weapon', 'Taser goad'],
    ],
  ],
}

export const skitariiVanguardTrooper: DataSheet = {
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
  defaultWeapons: ['Gun butt', 'Radium carbine'],
  weaponOptions: [],
}

export const skitariiVanguardGunner: DataSheet = {
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
  defaultWeapons: ['Gun butt'],
  weaponOptions: [[['Arc rifle', 'Plasma caliver', 'Transuranic arquebus']]],
}

export const skitariiVanguardAlpha: DataSheet = {
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
  weaponOptions: [
    [['Gun butt'], ['Radium carbine']],
    [
      ['Arc pistol', 'Phosphor blast pistol', 'Radium pistol'],
      ['Arc maul', 'Power weapon', 'Taser goad'],
    ],
  ],
}

export const sicarianRuststalkerTrooper: DataSheet = {
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
  weaponOptions: [[['Chordclaw and transonic razor', 'Transonic blades']]],
}

export const sicarianRuststalkerPrinceps: DataSheet = {
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
  weaponOptions: [[['Chordclaw and transonic razor', 'Transonic blades']]],
}

export const sicarianInfiltratorTrooper: DataSheet = {
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
  weaponOptions: [
    [
      ['Flechette blaster', 'Stubcarbine'],
      ['Power weapon', 'Taser goad'],
    ],
  ],
}

export const sicarianInfiltratorPrinceps: DataSheet = {
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
  weaponOptions: [
    [
      ['Flechette blaster', 'Stubcarbine'],
      ['Power weapon', 'Taser goad'],
    ],
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
