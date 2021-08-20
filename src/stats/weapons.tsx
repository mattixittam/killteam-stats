import { specialRules, criticalRules, Rule } from "../App";

export interface Weapon {
  name: string;
  profile: string;
  attackDice: number;
  weaponSkillAdjustment?: number;
  damage: number;
  damageCritical: number;
  specialRules: Rule[];
  criticalRules: Rule[];
}

export const weapons: Weapon[] = [
  {
    name: "Deathwatch Boltgun",
    profile: "Dragonfire",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.NO_COVER],
    criticalRules: [],
  },
  {
    name: "Deathwatch Boltgun",
    profile: "Hellfire",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.RENDING],
  },
  {
    name: "Deathwatch Boltgun",
    profile: "Kraken",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Deathwatch Boltgun",
    profile: "Vengeance",
    attackDice: 4,
    damage: 4,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
  },
  {
    name: "Deathwatch Shotgun",
    profile: "Cryptclearer",
    attackDice: 4,
    damage: 4,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
  },
  {
    name: "Deathwatch Shotgun",
    profile: "Wyrmsbreath",
    attackDice: 5,
    weaponSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG3, specialRules.TORRENT],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Deathwatch Shotgun",
    profile: "Xenopurge",
    attackDice: 4,
    weaponSkillAdjustment: -1,
    damage: 3,
    damageCritical: 5,
    specialRules: [specialRules.RNG6],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Stalker pattern boltgun",
    profile: "",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.HEAVY, specialRules.AP1],
    criticalRules: [],
  },
  {
    name: "Storm bolter",
    profile: "",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RELENTLESS],
    criticalRules: [],
  },
  {
    name: "Frag Cannon",
    profile: "Frag",
    attackDice: 4,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BLAST2],
    criticalRules: [],
  },
  {
    name: "Frag Cannon",
    profile: "Shell",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP1],
    criticalRules: [],
  },
  {
    name: "Auto bolt rifle",
    profile: "",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.CEASELESS],
    criticalRules: [],
  },
  {
    name: "Heavy Bolter",
    profile: "",
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Heavy Bolter (CSM)",
    profile: "",
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Heavy Bolter (CSM)",
    profile: "Malefic Rounds",
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [
      specialRules.HEAVY,
      specialRules.FUSILLADE,
      specialRules.AP1,
    ],
    criticalRules: [],
  },
  {
    name: "Heavy Bolter (CSM)",
    profile: "Belt Feed",
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [
      specialRules.HEAVY,
      specialRules.FUSILLADE,
      specialRules.CEASELESS,
    ],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Infernus Heavy Bolter",
    profile: "Heavy Bolter",
    attackDice: 5,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.FUSILLADE],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Infernus Heavy Bolter",
    profile: "Heavy Flamer",
    attackDice: 6,
    weaponSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.HEAVY, specialRules.RNG6, specialRules.TORRENT],
    criticalRules: [],
  },
  {
    name: "Missile Launcher",
    profile: "Frag",
    attackDice: 4,
    damage: 3,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY, specialRules.BLAST2],
    criticalRules: [],
  },
  {
    name: "Missile Launcher",
    profile: "Krak",
    attackDice: 4,
    damage: 5,
    damageCritical: 7,
    specialRules: [specialRules.HEAVY, specialRules.AP1],
    criticalRules: [],
  },
  {
    name: "Boltgun (CSM)",
    profile: "",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
  },
  {
    name: "Boltgun (CSM)",
    profile: "Belt Feed",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.CEASELESS],
    criticalRules: [],
  },
  {
    name: "Boltgun (CSM)",
    profile: "Malefic Rounds",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Bolt pistol (CSM)",
    profile: "",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6],
    criticalRules: [],
  },
  {
    name: "Bolt pistol (CSM)",
    profile: "Belt Feed",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6, specialRules.CEASELESS],
    criticalRules: [],
  },
  {
    name: "Bolt pistol (CSM)",
    profile: "Malefic Rounds",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6],
    criticalRules: [criticalRules.P1],
  },
  {
    name: "Flamer",
    profile: "",
    attackDice: 5,
    weaponSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG6, specialRules.TORRENT],
    criticalRules: [],
  },
  {
    name: "Grav-gun",
    profile: "",
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.AP1, specialRules.GRAV],
    criticalRules: [],
  },
  {
    name: "Meltagun",
    profile: "",
    attackDice: 4,
    damage: 6,
    damageCritical: 3,
    specialRules: [specialRules.RNG6, specialRules.AP2],
    criticalRules: [criticalRules.MW4],
  },
  {
    name: "Plasma gun",
    profile: "Standard",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP1],
    criticalRules: [],
  },
  {
    name: "Plasma gun",
    profile: "Supercharge",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP2],
    criticalRules: [],
  },
  {
    name: "Combi-flamer",
    profile: "",
    attackDice: 5,
    weaponSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [
      specialRules.COMBI,
      specialRules.RNG6,
      specialRules.TORRENT,
      specialRules.LIMITED,
    ],
    criticalRules: [],
  },
  {
    name: "Combi-grav",
    profile: "",
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [
      specialRules.COMBI,
      specialRules.AP1,
      specialRules.GRAV,
      specialRules.LIMITED,
    ],
    criticalRules: [],
  },
  {
    name: "Combi-melta",
    profile: "",
    attackDice: 4,
    damage: 6,
    damageCritical: 3,
    specialRules: [
      specialRules.COMBI,
      specialRules.RNG6,
      specialRules.AP2,
      specialRules.LIMITED,
    ],
    criticalRules: [criticalRules.MW4],
  },
  {
    name: "Combi-plasma",
    profile: "Standard",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.COMBI, specialRules.AP1, specialRules.LIMITED],
    criticalRules: [],
  },
  {
    name: "Combi-plasma",
    profile: "Supercharge",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.COMBI, specialRules.AP2, specialRules.LIMITED],
    criticalRules: [],
  },
  {
    name: "Bolt pistol",
    profile: "",
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RNG6],
    criticalRules: [],
  },
  {
    name: "Grav-pistol",
    profile: "",
    attackDice: 4,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.RNG6, specialRules.AP1, specialRules.GRAV],
    criticalRules: [],
  },
  {
    name: "Hand flamer",
    profile: "",
    attackDice: 4,
    weaponSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.RNG6, specialRules.TORRENT],
    criticalRules: [],
  },
  {
    name: "Inferno pistol",
    profile: "",
    attackDice: 4,
    damage: 5,
    damageCritical: 3,
    specialRules: [specialRules.RNG3, specialRules.AP2],
    criticalRules: [criticalRules.MW3],
  },
  {
    name: "Plasma pistol",
    profile: "Standard",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.RNG6, specialRules.AP1],
    criticalRules: [],
  },
  {
    name: "Plasma pistol",
    profile: "Supercharge",
    attackDice: 4,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.RNG6, specialRules.AP2],
    criticalRules: [],
  },
];