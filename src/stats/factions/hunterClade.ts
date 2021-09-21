import { DataSheet, generateEquipmentVariantProfiles, getWeaponProfiles } from '../../helpers'
import { equipment } from '../equipment'

export const skitariiRangerMarksman: DataSheet = {
  name: 'SKITARII RANGER MARKSMAN',
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

export const skitariiRangerDiktat: DataSheet = {
  name: 'SKITARII RANGER DIKTAT',
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

export const skitariiRangerSurveyor: DataSheet = {
  name: 'SKITARII RANGER SURVEYOR',
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
  name: 'SKITARII RANGER GUNNER',
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
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Master-crafted radium pistol'), [equipment.ENRICHED_ROUNDS]),
    ...getWeaponProfiles('Arc maul'),
    ...getWeaponProfiles('Gun butt'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Taser goad'),
  ],
  weaponOptions: [
    [['Gun butt'], ['Galvanic rifle']],
    [['Power weapon'], ['Master-crafted radium pistol']],
    [
      ['Arc pistol', 'Phosphor blast pistol'],
      ['Arc maul', 'Taser goad'],
    ],
  ],
}

export const skitariiVanguardShocktrooper: DataSheet = {
  name: 'SKITARII VANGUARD SHOCKTROOPER',
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
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Radium carbine'), [equipment.ENRICHED_ROUNDS]),
    ...getWeaponProfiles('Gun butt'),
  ],
  defaultWeapons: ['Gun butt', 'Radium carbine'],
  weaponOptions: [],
}

export const skitariiVanguardDiktat: DataSheet = {
  name: 'SKITARII VANGUARD DIKTAT',
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
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Radium carbine'), [equipment.ENRICHED_ROUNDS]),
    ...getWeaponProfiles('Gun butt'),
  ],
  defaultWeapons: ['Gun butt', 'Radium carbine'],
  weaponOptions: [],
}

export const skitariiVanguardSurveyor: DataSheet = {
  name: 'SKITARII VANGUARD SURVEYOR',
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
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Radium carbine'), [equipment.ENRICHED_ROUNDS]),
    ...getWeaponProfiles('Gun butt'),
  ],
  defaultWeapons: ['Gun butt', 'Radium carbine'],
  weaponOptions: [],
}

export const skitariiVanguardGunner: DataSheet = {
  name: 'SKITARII VANGUARD GUNNER',
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
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Radium carbine'), [equipment.ENRICHED_ROUNDS]),
    ...generateEquipmentVariantProfiles(getWeaponProfiles('Master-crafted radium pistol'), [equipment.ENRICHED_ROUNDS]),
    ...getWeaponProfiles('Arc maul'),
    ...getWeaponProfiles('Gun butt'),
    ...getWeaponProfiles('Power weapon'),
    ...getWeaponProfiles('Taser goad'),
  ],
  weaponOptions: [
    [['Gun butt'], ['Radium carbine']],
    [['Power weapon'], ['Master-crafted radium pistol']],
    [
      ['Arc pistol', 'Phosphor blast pistol'],
      ['Arc maul', 'Taser goad'],
    ],
  ],
}

export const sicarianRuststalkerAssassin: DataSheet = {
  name: 'SICARIAN RUSTSTALKER ASSASSIN',
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
  weapons: [...getWeaponProfiles('Chordclaw and transonic blades')],
  defaultWeapons: ['Chordclaw and transonic blades'],
  weaponOptions: [],
}

export const sicarianInfiltratorTracker: DataSheet = {
  name: 'SICARIAN INFILTRATOR TRACKER',
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

export const hunterCladeStats = {
  name: 'Hunter Clade',
  fireTeams: [
    {
      name: 'Fireteam',
      dataSheets: [
        skitariiRangerMarksman,
        skitariiRangerDiktat,
        skitariiRangerSurveyor,
        skitariiRangerGunner,
        skitariiRangerAlpha,
        skitariiVanguardShocktrooper,
        skitariiVanguardDiktat,
        skitariiVanguardSurveyor,
        skitariiVanguardGunner,
        skitariiVanguardAlpha,
        sicarianRuststalkerAssassin,
        sicarianRuststalkerPrinceps,
        sicarianInfiltratorTracker,
        sicarianInfiltratorPrinceps,
      ],
    },
  ],
}
