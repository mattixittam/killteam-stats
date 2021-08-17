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
} from "@material-ui/core";

const specialRules = {
  NO_COVER: {
    label: "No Cover",
  },
  AP1: {
    label: "AP1",
  },
  AP2: {
    label: "AP2",
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
  BLAST: {
    label: "Blast",
  },
};

interface Rule {
  label: string;
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
  },
  MW4: {
    label: "MW4",
  },
};

interface Weapon {
  faction: string;
  name: string;
  profile: string;
  attackDice: number;
  weaponSkillCritical: number;
  weaponSkillAdjustment?: number;
  damage: number;
  damageCritical: number;
  ap?: number;
  mw?: number;
  specialRules: Rule[];
  criticalRules: Rule[];
}

const weapons: Weapon[] = [
  {
    faction: "DEATHWATCH",
    name: "Deathwatch Boltgun",
    profile: "Dragonfire",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.NO_COVER],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Deathwatch Boltgun",
    profile: "Hellfire",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.RENDING],
  },
  {
    faction: "DEATHWATCH",
    name: "Deathwatch Boltgun",
    profile: "Kraken",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [criticalRules.P1],
  },
  {
    faction: "DEATHWATCH",
    name: "Deathwatch Boltgun",
    profile: "Vengeance",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 4,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Auto bolt rifle",
    profile: "",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.CEASELESS],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Stalker Pattern Boltgun",
    profile: "",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 3,
    damageCritical: 4,
    ap: 1,
    specialRules: [specialRules.HEAVY, specialRules.AP1],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Storm Bolter",
    profile: "",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 3,
    damageCritical: 4,
    specialRules: [specialRules.RELENTLESS],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Meltagun",
    profile: "",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 6,
    damageCritical: 3,
    mw: 4,
    ap: 2,
    specialRules: [specialRules.AP2],
    criticalRules: [criticalRules.MW4],
  },
  {
    faction: "DEATHWATCH",
    name: "PlasmaGun",
    profile: "Standard",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 5,
    damageCritical: 6,
    ap: 1,
    specialRules: [specialRules.AP1],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "PlasmaGun",
    profile: "Supercharge",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 5,
    damageCritical: 6,
    ap: 2,
    specialRules: [specialRules.AP2],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Frag Cannon",
    profile: "Frag",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.BLAST],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Frag Cannon",
    profile: "Shell",
    attackDice: 4,
    weaponSkillCritical: 6,
    damage: 5,
    damageCritical: 6,
    specialRules: [specialRules.AP1],
    criticalRules: [],
  },
  {
    faction: "DEATHWATCH",
    name: "Infernus heavy bolter",
    profile: "Heavy bolter",
    attackDice: 5,
    weaponSkillCritical: 6,
    damage: 4,
    damageCritical: 5,
    specialRules: [specialRules.HEAVY],
    criticalRules: [criticalRules.P1],
  },
  {
    faction: "DEATHWATCH",
    name: "Infernus heavy bolter",
    profile: "Heavy flamer",
    attackDice: 5,
    weaponSkillCritical: 6,
    weaponSkillAdjustment: -1,
    damage: 2,
    damageCritical: 2,
    specialRules: [specialRules.HEAVY],
    criticalRules: [],
  },
];

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

const deathWatchVeteranSkill = 3;

function chanceOfSuccess(successFrom: number, critFrom: number = 6) {
  const chanceOfSuccess = (7 - successFrom) * (1 / 6);
  const chanceOfCrit = (7 - critFrom) * (1 / 6);
  return chanceOfSuccess - chanceOfCrit;
}

function chanceOfMiss(successFrom: number) {
  return (successFrom - 1) * (1 / 6);
}

function chanceOfCrit(critFrom: number = 6) {
  return (7 - critFrom) * (1 / 6);
}

// function calculateRendingDamage(weapon: Weapon, weaponSkill: number) {
//   const critChance = chanceOfCrit(weapon.weaponSkillCritical);
//   const hitChance = chanceOfSuccess(weaponSkill, weapon.weaponSkillCritical);

//   const expectedCrits = critChance * weapon.attackDice;
//   const expectedHitsInRest = hitChance * (weapon.attackDice - 1);
//   const expectedHitsInRestClamped =
//     expectedHitsInRest > 1 ? 1 : expectedHitsInRest;

//   return expectedCrits * expectedHitsInRestClamped * weapon.damageCritical;
// }

function calculateDamage(
  weapon: Weapon,
  weaponSkill = deathWatchVeteranSkill,
  defenseProfile = meqProfile
) {
  const rolledDefenseDice = weapon.ap
    ? defenseProfile.defenseDice - weapon.ap
    : defenseProfile.defenseDice;

  const adjustedWeaponSkill = Math.max(
    2,
    weapon.weaponSkillAdjustment
      ? weaponSkill + weapon.weaponSkillAdjustment
      : weaponSkill
  );

  let expectedHits =
    chanceOfSuccess(adjustedWeaponSkill, weapon.weaponSkillCritical) *
    weapon.attackDice;

  const expectedSaves =
    chanceOfSuccess(defenseProfile.save, defenseProfile.saveCritical) *
    rolledDefenseDice;

  let expectedCriticalHits =
    chanceOfCrit(weapon.weaponSkillCritical) * weapon.attackDice;

  const expectedCriticalSaves =
    chanceOfCrit(defenseProfile.saveCritical) * rolledDefenseDice;

  if (weapon.criticalRules.includes(criticalRules.RENDING)) {
    const chanceOfRending = Math.min(1, expectedCriticalHits);

    expectedHits -= chanceOfRending / weapon.attackDice;
    expectedCriticalHits += chanceOfRending / weapon.attackDice;
  }

  if (weapon.specialRules.includes(specialRules.CEASELESS)) {
    const expectedNaturalOnes = (1 / 6) * weapon.attackDice;

    expectedHits +=
      expectedNaturalOnes *
      chanceOfSuccess(weaponSkill, weapon.weaponSkillCritical);
    expectedCriticalHits +=
      expectedNaturalOnes * chanceOfCrit(weapon.weaponSkillCritical);
  }

  if (weapon.specialRules.includes(specialRules.RELENTLESS)) {
    const expectedMisses = chanceOfMiss(weaponSkill) * weapon.attackDice;

    expectedHits +=
      expectedMisses * chanceOfSuccess(weaponSkill, weapon.weaponSkillCritical);
    expectedCriticalHits +=
      expectedMisses * chanceOfCrit(weapon.weaponSkillCritical);
  }

  const expectedHitDamage =
    Math.max(0, expectedHits - expectedSaves) * weapon.damage;

  const expectedCritDamage =
    Math.max(0, expectedCriticalHits - expectedCriticalSaves) *
    weapon.damageCritical;

  const expectedMortalWounds = weapon.mw ? expectedCriticalHits * weapon.mw : 0;

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

function App() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Profile</TableCell>
                <TableCell>A</TableCell>
                <TableCell>BS/WS</TableCell>
                <TableCell>D</TableCell>
                <TableCell>SR</TableCell>
                <TableCell>!</TableCell>
                <TableCell>Dmg vs MEQ</TableCell>
                <TableCell>Dmg vs GEQ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {weapons.map((weapon) => (
                <TableRow>
                  <TableCell>{weapon.name}</TableCell>
                  <TableCell>{weapon.profile}</TableCell>
                  <TableCell>{weapon.attackDice}</TableCell>
                  <TableCell>
                    {Math.max(
                      2,
                      weapon.weaponSkillAdjustment
                        ? deathWatchVeteranSkill + weapon.weaponSkillAdjustment
                        : deathWatchVeteranSkill
                    )}
                  </TableCell>
                  <TableCell>
                    {weapon.damage}/{weapon.damageCritical}
                  </TableCell>
                  <TableCell>
                    {weapon.specialRules.map((rule) => rule.label).join(", ")}
                  </TableCell>
                  <TableCell>
                    {weapon.criticalRules.map((rule) => rule.label).join(", ")}
                  </TableCell>
                  <TableCell>
                    {JSON.stringify(
                      calculateDamage(
                        weapon,
                        deathWatchVeteranSkill,
                        meqProfile
                      )
                    )}
                  </TableCell>
                  <TableCell>
                    {JSON.stringify(
                      calculateDamage(
                        weapon,
                        deathWatchVeteranSkill,
                        geqProfile
                      )
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default App;
