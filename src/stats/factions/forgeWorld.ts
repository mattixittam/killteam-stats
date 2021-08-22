import { getProfiles } from '../../helpers'

export const skitariiRangerTrooper = {
  name: 'SKITARII RANGER (TROOPER)',
  ballisticSkill: 3,
  weaponSkill: 4,
  weapons: [...getProfiles('Galvanic rifle'), ...getProfiles('Gun butt')],
}

export const skitariiRangerGunner = {
  name: 'SKITARII RANGER (GUNNER)',
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
  ballisticSkill: 3,
  weaponSkill: 4,
  weapons: [...getProfiles('Radium carbine'), ...getProfiles('Gun butt')],
}

export const skitariiVanguardGunner = {
  name: 'SKITARII VANGUARD (GUNNER)',
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
  ballisticSkill: 3,
  weaponSkill: 3,
  weapons: [...getProfiles('Chordclaw and transonic razor'), ...getProfiles('Transonic blades')],
}

export const sicarianRuststalkerPrinceps = {
  name: 'SICARIAN RUSTSTALKER PRINCEPS',
  ballisticSkill: 2,
  weaponSkill: 2,
  weapons: [...getProfiles('Chordclaw and transonic razor'), ...getProfiles('Transonic blades')],
}

export const sicarianInfiltratorTrooper = {
  name: 'SICARIAN INFILTRATOR (TROOPER)',
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
  ballisticSkill: 2,
  weaponSkill: 3,
  weapons: [
    ...getProfiles('Flechette blaster'),
    ...getProfiles('Stubcarbine'),
    ...getProfiles('Power weapon'),
    ...getProfiles('Taser goad'),
  ],
}

const dataSheetsSkitariiRangers = [skitariiRangerTrooper, skitariiRangerGunner, skitariiRangerAlpha]

const dataSheetsSkitariiVanguard = [skitariiVanguardTrooper, skitariiVanguardGunner, skitariiVanguardAlpha]

const dataSheetsSicarian = [
  sicarianRuststalkerTrooper,
  sicarianRuststalkerPrinceps,
  sicarianInfiltratorTrooper,
  sicarianInfiltratorPrinceps,
]

export const forgeWorldStats = {
  name: 'Forge World',
  fireTeams: [
    {
      name: 'Skitarii Rangers',
      dataSheets: [...dataSheetsSkitariiRangers],
    },
    {
      name: 'Skitarii Vanguards',
      dataSheets: [...dataSheetsSkitariiVanguard],
    },
    {
      name: 'Sicarians',
      dataSheets: [...dataSheetsSicarian],
    },
  ],
}
