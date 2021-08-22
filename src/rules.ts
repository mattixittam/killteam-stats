export interface Rule {
  label: string
  amount?: number
}
export interface Rules {
  [x: string]: Rule
}

export const specialRules = {
  STORM_SHIELD: {
    label: 'Storm Shield',
  },
  NO_COVER: {
    label: 'No Cover',
  },
  AP1: {
    label: 'AP1',
  },
  AP2: {
    label: 'AP2',
  },
  RELENTLESS: {
    label: 'Relentless',
  },
  CEASELESS: {
    label: 'Ceaseless',
  },
  HEAVY: {
    label: 'Heavy',
  },
  BLAST1: {
    label: 'Blast 1"',
  },
  BLAST2: {
    label: 'Blast 2"',
  },
  TORRENT: {
    label: 'Torrent',
  },
  FUSILLADE: {
    label: 'Fusillade',
  },
  RNG3: {
    label: 'Rng 3"',
  },
  RNG6: {
    label: 'Rng 6"',
  },
  GRAV: {
    label: 'Grav',
  },
  LETHAL4: {
    label: 'Lethal 4+',
  },
  LETHAL5: {
    label: 'Lethal 5+',
  },
  COMBI: {
    label: 'Combi',
  },
  LIMITED: {
    label: 'Limited',
  },
  BRUTAL: {
    label: 'Brutal',
  },
  HOT: {
    label: 'Hot',
  },
  UNWIELDY: {
    label: 'Unwieldy',
  },
  BALANCED: {
    label: 'Balanced',
  },
}

export const criticalRules = {
  RENDING: {
    label: 'Rending',
  },
  P1: {
    label: 'P1',
  },
  MW2: {
    label: 'MW2',
  },
  MW3: {
    label: 'MW3',
  },
  MW4: {
    label: 'MW4',
  },
  STUN: {
    label: 'Stun',
  },
}
