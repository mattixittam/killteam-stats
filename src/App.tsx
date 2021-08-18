import "./App.css";
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  TableHead,
  Typography,
} from "@material-ui/core";

const specialRules: Rules = {
  NO_COVER: {
    label: "No Cover",
  },
  AP1: {
    label: "AP1",
    amount: 1,
  },
  AP2: {
    label: "AP2",
    amount: 2,
  },
  RELENTLESS: {
    label: "Relentless",
  },
  CEASELESS: {
    label: "Ceaseless",
  },
  HEAVY: {
    label: "Heavy",
  },
  BLAST2: {
    label: 'Blast 2"',
    amount: 2,
  },
  TORRENT: {
    label: "Torrent",
  },
  FUSILLADE: {
    label: "Fusillade",
  },
  RNG3: {
    label: 'Rng 3"',
  },
  RNG6: {
    label: 'Rng 6"',
  },
  GRAV: {
    label: "Grav",
  },
  LETHAL4: {
    label: "Lethal 4+",
  },
  LETHAL5: {
    label: "Lethal 5+",
  },
  COMBI: {
    label: "Combi",
  },
  LIMITED: {
    label: "Limited",
  },
};

interface Rule {
  label: string;
  amount?: number;
}
interface Rules {
  [x: string]: Rule;
}

const criticalRules: Rules = {
  RENDING: {
    label: "Rending",
  },
  P1: {
    label: "P1",
    amount: 1,
  },
  MW3: {
    label: "MW3",
    amount: 3,
  },
  MW4: {
    label: "MW4",
    amount: 4,
  },
};

interface Weapon {
  name: string;
  profile: string;
  attackDice: number;
  weaponSkillAdjustment?: number;
  damage: number;
  damageCritical: number;
  specialRules: Rule[];
  criticalRules: Rule[];
}

const weapons: Weapon[] = [
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

function getProfiles(name: string): Weapon[] {
  return weapons.filter((weapon) => weapon.name === name);
}

const deathwatchVeteranWarrior = {
  name: "DEATHWATCH VETERAN (WARRIOR)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Deathwatch Boltgun"),
    ...getProfiles("Deathwatch Shotgun"),
    ...getProfiles("Stalker pattern boltgun"),
    ...getProfiles("Storm bolter"),
  ],
};

const deathwatchVeteranFighter = {
  name: "DEATHWATCH VETERAN (FIGHTER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Bolt pistol"),
    ...getProfiles("Grav-pistol"),
    ...getProfiles("Hand flamer"),
    ...getProfiles("Inferno pistol"),
    ...getProfiles("Plasma pistol"),
  ],
};

const deathwatchVeteranGunner = {
  name: "DEATHWATCH VETERAN (GUNNER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Combi-flamer"),
    ...getProfiles("Combi-grav"),
    ...getProfiles("Combi-melta"),
    ...getProfiles("Combi-plasma"),
    ...getProfiles("Deathwatch Boltgun"),
    ...getProfiles("Flamer"),
    ...getProfiles("Grav-gun"),
    ...getProfiles("Meltagun"),
    ...getProfiles("Plasma gun"),
  ],
};

const deathwatchVeteranHeavyGunner = {
  name: "DEATHWATCH VETERAN (HEAVY GUNNER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Frag Cannon"),
    ...getProfiles("Infernus Heavy Bolter"),
    ...getProfiles("Missile Launcher"),
  ],
};

const deathwatchVeteranWatchSergeant = {
  name: "DEATHWATCH VETERAN WATCH SERGEANT",
  weaponSkill: 2,
  weapons: [
    ...getProfiles("Deathwatch Boltgun"),
    ...getProfiles("Deathwatch Shotgun"),
    ...getProfiles("Combi-flamer"),
    ...getProfiles("Combi-grav"),
    ...getProfiles("Combi-melta"),
    ...getProfiles("Combi-plasma"),
    ...getProfiles("Flamer"),
    ...getProfiles("Grav-gun"),
    ...getProfiles("Meltagun"),
    ...getProfiles("Plasma gun"),
    ...getProfiles("Stalker pattern boltgun"),
    ...getProfiles("Storm bolter"),
    ...getProfiles("Bolt pistol"),
    ...getProfiles("Grav-pistol"),
    ...getProfiles("Hand flamer"),
    ...getProfiles("Inferno pistol"),
    ...getProfiles("Plasma pistol"),
  ],
};

const chaosSmWarrior = {
  name: "CHAOS SPACE MARINE (WARRIOR)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Boltgun (CSM)"),
    ...getProfiles("Bolt Pistol (CSM)"),
  ],
};

const chaosSmGunner = {
  name: "CHAOS SPACE MARINE (GUNNER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Flamer"),
    ...getProfiles("Meltagun"),
    ...getProfiles("Plasma gun"),
  ],
};

const chaosSmHeavyGunner = {
  name: "CHAOS SPACE MARINE (HEAVY GUNNER)",
  weaponSkill: 3,
  weapons: [
    ...getProfiles("Heavy Bolter (CSM)"),
    ...getProfiles("Missile Launcher"),
  ],
};

const chaosSmAspiringChampion = {
  name: "CHAOS SPACE MARINE ASPIRING CHAMPION",
  weaponSkill: 2,
  weapons: [
    ...getProfiles("Boltgun (CSM)"),
    ...getProfiles("Bolt pistol (CSM)"),
    ...getProfiles("Plasma pistol"),
  ],
};

const profiles = [
  deathwatchVeteranWarrior,
  deathwatchVeteranFighter,
  deathwatchVeteranGunner,
  deathwatchVeteranHeavyGunner,
  deathwatchVeteranWatchSergeant,
  chaosSmWarrior,
  chaosSmGunner,
  chaosSmHeavyGunner,
  chaosSmAspiringChampion,
];

const custodesProfile = {
  defenseDice: 3,
  save: 2,
  saveCritical: 6,
};

const meqProfile = {
  defenseDice: 3,
  save: 3,
  saveCritical: 6,
};

const geqProfile = {
  defenseDice: 3,
  save: 4,
  saveCritical: 6,
};

function oneDiceChanceOfSuccess(successFrom: number, critFrom: number = 6) {
  const chanceOfSuccess = (7 - successFrom) * (1 / 6);
  const chanceOfCrit = (7 - critFrom) * (1 / 6);
  return chanceOfSuccess - chanceOfCrit;
}

function onsDiceChanceOfMiss(successFrom: number) {
  return (successFrom - 1) * (1 / 6);
}

function oneDiceChanceOfCrit(critFrom: number = 6) {
  return (7 - critFrom) * (1 / 6);
}

function calculateDamage(
  weapon: Weapon,
  weaponSkill: number,
  defenseProfile: typeof meqProfile
) {
  let rolledDefenseDice = defenseProfile.defenseDice;

  let weaponSkillCritical = 6;

  // LETHAL 5+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    weaponSkillCritical = Math.max(5, weaponSkill);
  }

  // LETHAL 4+
  if (weapon.specialRules.includes(specialRules.LETHAL5)) {
    weaponSkillCritical = Math.max(4, weaponSkill);
  }

  // GRAV
  if (
    weapon.specialRules.includes(specialRules.GRAV) &&
    defenseProfile.save <= 3
  ) {
    weaponSkillCritical = Math.max(4, weaponSkill);
  }

  // AP1
  if (weapon.specialRules.includes(specialRules.AP1)) {
    rolledDefenseDice -= 1;
  }

  // AP2
  if (weapon.specialRules.includes(specialRules.AP2)) {
    rolledDefenseDice -= 2;
  }

  const adjustedWeaponSkill = Math.max(
    2,
    weapon.weaponSkillAdjustment
      ? weaponSkill + weapon.weaponSkillAdjustment
      : weaponSkill
  );

  let expectedHits =
    oneDiceChanceOfSuccess(adjustedWeaponSkill, weaponSkillCritical) *
    weapon.attackDice;

  let expectedCriticalHits =
    oneDiceChanceOfCrit(weaponSkillCritical) * weapon.attackDice;

  const chanceOfAtLeastOneCrit = Math.min(expectedCriticalHits, 1);

  // Normal
  const chanceOfSave = oneDiceChanceOfSuccess(
    defenseProfile.save,
    defenseProfile.saveCritical
  );
  const chanceOfSaveCritical = oneDiceChanceOfCrit(defenseProfile.saveCritical);

  let expectedSaves = chanceOfSave * rolledDefenseDice;
  let expectedCriticalSaves = chanceOfSaveCritical * rolledDefenseDice;

  // Critical P1
  if (weapon.criticalRules.includes(criticalRules.P1)) {
    const chanceOfNoCrit = 1 - chanceOfAtLeastOneCrit;

    const p1Saves =
      chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSave;
    const p1SaveCrits =
      chanceOfAtLeastOneCrit * (rolledDefenseDice - 1) * chanceOfSaveCritical;
    const nonP1Saves = chanceOfNoCrit * rolledDefenseDice * chanceOfSave;
    const nonP1SaveCrits =
      chanceOfNoCrit * rolledDefenseDice * chanceOfSaveCritical;

    expectedSaves = p1Saves + nonP1Saves;
    expectedCriticalSaves = p1SaveCrits + nonP1SaveCrits;
  }

  // RENDING
  if (weapon.criticalRules.includes(criticalRules.RENDING)) {
    expectedHits -= chanceOfAtLeastOneCrit / weapon.attackDice;
    expectedCriticalHits += chanceOfAtLeastOneCrit / weapon.attackDice;
  }

  // CEASELESS
  if (weapon.specialRules.includes(specialRules.CEASELESS)) {
    const expectedNaturalOnes = (1 / 6) * weapon.attackDice;

    expectedHits +=
      expectedNaturalOnes *
      oneDiceChanceOfSuccess(weaponSkill, weaponSkillCritical);
    expectedCriticalHits +=
      expectedNaturalOnes * oneDiceChanceOfCrit(weaponSkillCritical);
  }

  // RELENTLESS
  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = onsDiceChanceOfMiss(weaponSkill) * weapon.attackDice;

    expectedHits +=
      expectedMisses * oneDiceChanceOfSuccess(weaponSkill, weaponSkillCritical);
    expectedCriticalHits +=
      expectedMisses * oneDiceChanceOfCrit(weaponSkillCritical);
  }

  const expectedHitDamage =
    Math.max(0, expectedHits - expectedSaves) * weapon.damage;

  const expectedCritDamage =
    Math.max(0, expectedCriticalHits - expectedCriticalSaves) *
    weapon.damageCritical;

  // MWx
  let mw = 0;

  if (weapon.criticalRules.includes(criticalRules.MW3)) {
    mw = 3;
  }

  if (weapon.criticalRules.includes(criticalRules.MW4)) {
    mw = 4;
  }

  const expectedMortalWounds = expectedCriticalHits * mw;

  // const rendingDamage = weapon.criticalRules.includes(criticalRules.RENDING)
  //   ? calculateRendingDamage(weapon, weaponSkill) -
  //     chanceOfCrit(defenseProfile.saveCritical) * defenseProfile.defenseDice *
  //   : 0;

  const expectedTotalDamage =
    expectedHitDamage + expectedCritDamage + expectedMortalWounds;

  return {
    total: expectedTotalDamage.toFixed(2),
    hit: expectedHitDamage.toFixed(2),
    crit: expectedCritDamage.toFixed(2),
    mw: expectedMortalWounds.toFixed(2),
    // RENDING: rendingDamage.toFixed(2),
  };
}

function generateWeaponRow(
  weapon: Weapon,
  weaponSkill: number,
  {
    isProfile,
    nextIsProfile,
    backgroundColor = "transparent",
  }: { isProfile: boolean; nextIsProfile: boolean; backgroundColor: string }
) {
  const geqDamage = calculateDamage(weapon, weaponSkill, geqProfile);
  const meqDamage = calculateDamage(weapon, weaponSkill, meqProfile);
  const custodesDamage = calculateDamage(weapon, weaponSkill, custodesProfile);

  const styles: { backgroundColor: string; borderBottomWidth?: number } = {
    backgroundColor,
  };

  if (nextIsProfile) {
    styles.borderBottomWidth = 0;
  }

  return (
    <TableRow>
      <TableCell style={styles}>{isProfile ? "" : weapon.name}</TableCell>
      <TableCell style={styles}>{weapon.profile}</TableCell>
      <TableCell style={styles}>{weapon.attackDice}</TableCell>
      <TableCell style={styles}>
        {Math.max(
          2,
          weapon.weaponSkillAdjustment
            ? weaponSkill + weapon.weaponSkillAdjustment
            : weaponSkill
        )}
      </TableCell>
      <TableCell style={styles}>
        {weapon.damage}/{weapon.damageCritical}
      </TableCell>
      <TableCell style={styles}>
        {weapon.specialRules.map((rule) => rule.label).join(", ")}
      </TableCell>
      <TableCell style={styles}>
        {weapon.criticalRules.map((rule) => rule.label).join(", ")}
      </TableCell>
      <TableCell style={styles}>
        <strong>{geqDamage.total}</strong>
        {/* (hit: {geqDamage.hit}, crit: {geqDamage.crit}, mw: {geqDamage.mw}) */}
      </TableCell>
      <TableCell style={styles}>
        <strong>{meqDamage.total}</strong>
        {/* (hit: {meqDamage.hit}, crit: {meqDamage.crit}, mw: {meqDamage.mw}) */}
      </TableCell>
      <TableCell style={styles}>
        <strong>{custodesDamage.total}</strong>
        {/* (hit: {custodesDamage.hit}, crit: {custodesDamage.crit}, mw: {custodesDamage.mw}) */}
      </TableCell>
    </TableRow>
  );
}

function generateStatBlock(
  name: string,
  weaponSkill: number,
  weapons: Weapon[]
) {
  let rowColor = "rgba(1,1,1,0.1)";

  function switchRowColor() {
    if (rowColor === "rgba(1,1,1,0.1)") {
      rowColor = "transparent";
    } else {
      rowColor = "rgba(1,1,1,0.1)";
    }
  }

  return (
    <TableContainer component={Paper} style={{ margin: "20px" }}>
      <Table size="small">
        <TableHead>
          <TableRow style={{ backgroundColor: "rgba(1,1,1,0.3)" }}>
            <TableCell colSpan={10}>
              <Typography variant="h5" fontWeight="700">
                {name}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>A</TableCell>
            <TableCell>BS/WS</TableCell>
            <TableCell>D</TableCell>
            <TableCell>SR</TableCell>
            <TableCell>!</TableCell>
            <TableCell>Dmg vs GEQ</TableCell>
            <TableCell>Dmg vs MEQ</TableCell>
            <TableCell>Dmg vs Custodes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weapons.map((weapon, index) => {
            const sameNameAsPrevious =
              index === 0 ? false : weapon.name === weapons[index - 1]?.name;

            const sameNameAsNext = weapon.name === weapons[index + 1]?.name;

            if (!sameNameAsPrevious) {
              switchRowColor();
            }

            return generateWeaponRow(weapon, weaponSkill, {
              isProfile: sameNameAsPrevious,
              nextIsProfile: sameNameAsNext,
              backgroundColor: rowColor,
            });
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function App() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        {profiles.map((profile) =>
          generateStatBlock(profile.name, profile.weaponSkill, profile.weapons)
        )}
      </Grid>
    </Grid>
  );
}

export default App;
