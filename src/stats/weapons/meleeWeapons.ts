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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Power weapon',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [],
    equipment: [],
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
    equipment: [],
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
    equipment: [],
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
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Cult knife and claw',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.BALANCED],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Cult bonesword and claw',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BALANCED, specialRules.LETHAL5],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy rock cutter',
    profile: '',
    attackDice: 4,
    weaponBallisticSkillAdjustment: 1,
    damage: 5,
    damageCritical: 7,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy rock cutter',
    profile: 'Mining tool rig (eq.)',
    attackDice: 4,
    weaponBallisticSkillAdjustment: 1,
    damage: 5,
    damageCritical: 7,
    specialRules: [specialRules.LETHAL5, specialRules.RELENTLESS],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy rock drill',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 7,
    specialRules: [specialRules.BRUTAL],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy rock drill',
    profile: 'Mining tool rig (eq.)',
    attackDice: 4,
    damage: 4,
    damageCritical: 7,
    specialRules: [specialRules.BRUTAL, specialRules.RELENTLESS],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy rock saw',
    profile: '',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Heavy rock saw',
    profile: 'Mining tool rig (eq.)',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.RELENTLESS],
    criticalRules: [],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Cult bonesword and metamorph mutations',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BALANCED, specialRules.LETHAL5],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'MELEE',
  },
  {
    name: 'Metamorph mutations',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BALANCED, specialRules.BRUTAL],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'MELEE',
  },
]
