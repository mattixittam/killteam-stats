export interface Rule {
  label: string
  amount?: number
}
export interface Rules {
  [x: string]: Rule
}

export const specialRules = {
  NO_COVER: {
    label: 'No Cover',
  },
  AP1: {
    label: 'AP1',
    amount: 1,
  },
  AP2: {
    label: 'AP2',
    amount: 2,
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
  BLAST2: {
    label: 'Blast 2"',
    amount: 2,
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
}

export const criticalRules = {
  RENDING: {
    label: 'Rending',
  },
  P1: {
    label: 'P1',
    amount: 1,
  },
  MW3: {
    label: 'MW3',
    amount: 3,
  },
  MW4: {
    label: 'MW4',
    amount: 4,
  },
  STUN: {
    label: 'Stun',
  },
}
