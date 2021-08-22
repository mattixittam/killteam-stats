import { specialRules, criticalRules } from '../../rules'
import { Weapon } from '../weapons'

export const meleeWeapons: Weapon[] = [
  {
    name: 'Xenophase blade',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BRUTAL, specialRules.LETHAL5],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Xenophase blade',
    profile: '+ storm shield',
    attackDice: 5,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BRUTAL, specialRules.LETHAL5, specialRules.STORM_SHIELD],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Fists',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Gun butt',
    profile: '',
    attackDice: 3,
    damage: 2,
    damageCritical: 3,
    specialRules: [],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Arc maul',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [],
    criticalRules: [criticalRules.STUN],
    type: 'MELEE',
  },
  {
    name: 'Taser goad',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [criticalRules.STUN],
    type: 'MELEE',
  },
  {
    name: 'Chainsword',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy thunder hammer',
    profile: '',
    attackDice: 5,
    weaponBallisticSkillAdjustment: 1,
    damage: 6,
    damageCritical: 8,
    specialRules: [],
    criticalRules: [criticalRules.STUN],
    type: 'MELEE',
  },
  {
    name: 'Lightning claw',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Lightning claws',
    profile: '',
    attackDice: 5,
    damage: 6,
    damageCritical: 8,
    specialRules: [specialRules.LETHAL5, specialRules.RELENTLESS],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Power fist',
    profile: '',
    attackDice: 5,
    weaponBallisticSkillAdjustment: 1,
    damage: 5,
    damageCritical: 7,
    specialRules: [specialRules.BRUTAL],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Power maul',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [],
    criticalRules: [criticalRules.STUN],
    type: 'MELEE',
  },
  {
    name: 'Power pick',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 6,
    specialRules: [],
    criticalRules: [criticalRules.RENDING],
    type: 'MELEE',
  },
  {
    name: 'Power weapon',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Thunder hammer',
    profile: '',
    attackDice: 5,
    weaponBallisticSkillAdjustment: 1,
    damage: 5,
    damageCritical: 6,
    specialRules: [],
    criticalRules: [criticalRules.STUN],
    type: 'MELEE',
  },
  {
    name: 'Chordclaw and transonic razor',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.BALANCED],
    criticalRules: [],
    type: 'MELEE',
  },
  {
    name: 'Transonic blades',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 6,
    specialRules: [],
    criticalRules: [criticalRules.RENDING],
    type: 'MELEE',
  },
]
