import { specialRules, criticalRules } from '../../rules'
import { Weapon } from '../weapons'

export const nonHeavyRangedWeapons: Weapon[] = [
  {
    name: 'Autogun',
    profile: '',
    attackDice: 4,
    damage: 2,
    damageCritical: 3,
    specialRules: [],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Shotgun',
    profile: '',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 3,
    damageCritical: 3,
    specialRules: [specialRules.RNG6],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Boltgun',
    profile: 'Dragonfire',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.NO_COVER],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Boltgun',
    profile: 'Hellfire',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Boltgun',
    profile: 'Kraken',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Boltgun',
    profile: 'Vengeance',
    attackDice: 4,
    damage: 4,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Shotgun',
    profile: 'Cryptclearer',
    attackDice: 4,
    damage: 4,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Shotgun',
    profile: 'Wyrmsbreath',
    attackDice: 5,
    weaponBallisticSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG3, specialRules.TORRENT],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Deathwatch Shotgun',
    profile: 'Xenopurge',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 3,
    damageCritical: 5,
    specialRules: [specialRules.RNG6],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Storm bolter',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RELENTLESS],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Bolt carbine',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Frag Cannon',
    profile: 'Frag',
    attackDice: 4,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BLAST2],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Frag Cannon',
    profile: 'Shell',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Auto bolt rifle',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.CEASELESS],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Bolt rifle',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Stalker bolt rifle',
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
    name: 'Boltgun',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Grenade launcher',
    profile: 'Frag',
    attackDice: 4,
    damage: 2,
    damageCritical: 4,
    specialRules: [specialRules.BLAST2],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Grenade launcher',
    profile: 'Krak',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Webber',
    profile: '',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG6, specialRules.LETHAL5],
    criticalRules: [criticalRules.STUN],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Flamer',
    profile: '',
    attackDice: 5,
    fixedWeaponBallisticSkill: 2,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG6, specialRules.TORRENT],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Grav-gun',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.AP1, specialRules.GRAV],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Meltagun',
    profile: '',
    attackDice: 4,
    damage: 6,
    damageCritical: 3,
    specialRules: [specialRules.RNG6, specialRules.AP2],
    criticalRules: [criticalRules.MW4],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Plasma gun',
    profile: 'Standard',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Plasma gun',
    profile: 'Supercharge',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP2],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Combi-flamer',
    profile: '',
    attackDice: 5,
    fixedWeaponBallisticSkill: 2,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.COMBI, specialRules.RNG6, specialRules.TORRENT, specialRules.LIMITED],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Combi-grav',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.COMBI, specialRules.AP1, specialRules.GRAV, specialRules.LIMITED],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Combi-melta',
    profile: '',
    attackDice: 4,
    damage: 6,
    damageCritical: 3,
    specialRules: [specialRules.COMBI, specialRules.RNG6, specialRules.AP2, specialRules.LIMITED],
    criticalRules: [criticalRules.MW4],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Combi-plasma',
    profile: 'Standard',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.COMBI, specialRules.AP1, specialRules.LIMITED],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Combi-plasma',
    profile: 'Supercharge',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.COMBI, specialRules.AP2, specialRules.LIMITED],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Hand flamer',
    profile: '',
    attackDice: 4,
    fixedWeaponBallisticSkill: 2,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG6, specialRules.TORRENT],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Plasma caliver',
    profile: 'Standard',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP1],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Plasma caliver',
    profile: 'Supercharge',
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP2, specialRules.HOT],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Arc rifle',
    profile: '',
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.AP1],
    criticalRules: [criticalRules.STUN],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Radium carbine',
    profile: '',
    attackDice: 4,
    damage: 2,
    damageCritical: 3,
    specialRules: [],
    criticalRules: [criticalRules.RENDING],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Flechette blaster',
    profile: '',
    attackDice: 5,
    damage: 2,
    damageCritical: 3,
    specialRules: [specialRules.RELENTLESS, specialRules.FUSILLADE, specialRules.RNG6],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Stubcarbine',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.CEASELESS],
    criticalRules: [],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Lash whip',
    profile: '',
    attackDice: 4,
    weaponBallisticSkillAdjustment: -1,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG3],
    criticalRules: [criticalRules.STUN],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Guardian spear',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 5,
    specialRules: [],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
  {
    name: 'Sentinel blade',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6],
    criticalRules: [criticalRules.P1],
    equipment: [],
    type: 'RANGED',
  },
]
