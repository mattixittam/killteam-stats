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
    name: 'Heavy bolter',
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
    name: 'Infernus heavy bolter',
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
    name: 'Infernus heavy bolter',
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
    name: 'Missile launcher',
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
    name: 'Missile launcher',
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
    damageCritical: 3,
    specialRules: [specialRules.AP1, specialRules.HEAVY, specialRules.UNWIELDY],
    criticalRules: [criticalRules.MW3],
    equipment: [],
    type: 'RANGED',
  },
]
