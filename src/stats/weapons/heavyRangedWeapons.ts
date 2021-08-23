import { specialRules, criticalRules } from '../../rules'
import { Weapon } from '../weapons'

export const heavyRangedWeapons: Weapon[] = [
  {
    name: 'Stalker pattern boltgun',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.HEAVY, specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Heavy Bolter',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Heavy Bolter (CSM)',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Heavy Bolter (CSM)',
    profile: 'Malefic Rounds',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE, specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Heavy Bolter (CSM)',
    profile: 'Belt Feed',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE, specialRules.CEASELESS],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Infernus Heavy Bolter',
    profile: 'Heavy Bolter',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Infernus Heavy Bolter',
    profile: 'Heavy Flamer',
    attackDice: 6,
    fixedWeaponBallisticSkill: 2,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.HEAVY, specialRules.RNG6, specialRules.TORRENT],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Missile Launcher',
    profile: 'Frag',
    attackDice: 4,
    damage: 3,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.BLAST2],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Missile Launcher',
    profile: 'Krak',
    attackDice: 4,
    damage: 5,
    damageCritical: 7,
    specialRules: [specialRules.HEAVY, specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Heavy stubber',
    profile: '',
    attackDice: 5,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.HEAVY, specialRules.CEASELESS, specialRules.FUSILLADE],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Mining laser',
    profile: '',
    attackDice: 5,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.HEAVY, specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Seismic cannon',
    profile: 'Long-wave',
    attackDice: 6,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.HEAVY, specialRules.BLAST2],
    criticalRules: [criticalRules.STUN],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Seismic cannon',
    profile: 'Short-wave',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 4,
    damageCritical: 4,
    specialRules: [specialRules.HEAVY, specialRules.RNG6],
    criticalRules: [criticalRules.STUN, criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Galvanic rifle',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.HEAVY],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Transuranic arquebus',
    profile: '',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 5,
    damageCritical: 4,
    specialRules: [specialRules.AP1, specialRules.HEAVY, specialRules.UNWIELDY],
    criticalRules: [criticalRules.MW2],
    equipment: [],
    type: 'RANGED',
  },
]
