import { specialRules, criticalRules } from '../../rules'
import { Weapon } from '../weapons'

export const pistols: Weapon[] = [
  {
    name: 'Bolt pistol',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Special issue bolt pistol',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6, specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Grav-pistol',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.RNG6, specialRules.AP1, specialRules.GRAV],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Inferno pistol',
    profile: '',
    attackDice: 4,
    damage: 5,
    damageCritical: 3,
    specialRules: [specialRules.RNG3, specialRules.AP2],
    criticalRules: [criticalRules.MW3],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Plasma pistol',
    profile: 'Standard',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.RNG6, specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Plasma pistol',
    profile: 'Supercharge',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.RNG6, specialRules.AP2, specialRules.HOT],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Arc pistol',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.RNG6, specialRules.AP1],
    criticalRules: [criticalRules.STUN],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Phosphor blast pistol',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.RNG6, specialRules.BLAST1, specialRules.NO_COVER],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Radium pistol',
    profile: '',
    attackDice: 4,
    damage: 2,
    damageCritical: 3,
    specialRules: [specialRules.RNG6],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Master-crafted radium pistol',
    profile: '',
    attackDice: 4,
    damage: 2,
    damageCritical: 4,
    specialRules: [specialRules.RNG6, specialRules.BALANCED],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Autopistol',
    profile: '',
    attackDice: 4,
    damage: 2,
    damageCritical: 3,
    specialRules: [specialRules.RNG6],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Web pistol',
    profile: '',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG6],
    criticalRules: [criticalRules.STUN],
    equipment: [],
    type: 'RANGED',
  },
]
