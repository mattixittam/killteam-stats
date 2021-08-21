import './App.css'
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
} from '@material-ui/core'
import { Weapon } from './stats/weapons'
import { dataSheetsDW } from './stats/factions/deathwatch'
import { dataSheetsCSM } from './stats/factions/chaos'
import { calculateDamage } from './calculation'
import { specialRules } from './rules'

const dataSheets = [...dataSheetsDW, ...dataSheetsCSM]

export interface Defenseprofile {
  defenseDice: number
  save: number
  saveCritical: number
  weaponSkill: number
  meleeWeapon: Weapon
}

const custodesProfile: Defenseprofile = {
  defenseDice: 3,
  save: 2,
  saveCritical: 6,
  weaponSkill: 2,
  meleeWeapon: {
    name: 'Guardian spear',
    profile: '',
    attackDice: 5,
    damage: 5,
    damageCritical: 7,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [],
    type: 'MELEE',
  },
}

export const meqProfile: Defenseprofile = {
  defenseDice: 3,
  save: 3,
  saveCritical: 6,
  weaponSkill: 3,
  meleeWeapon: {
    name: 'Power weapon',
    profile: '',
    attackDice: 5,
    damage: 4,
    damageCritical: 6,
    specialRules: [specialRules.LETHAL5],
    criticalRules: [],
    type: 'MELEE',
  },
}

const geqProfile: Defenseprofile = {
  defenseDice: 3,
  save: 4,
  saveCritical: 6,
  weaponSkill: 4,
  meleeWeapon: {
    name: 'Fists',
    profile: '',
    attackDice: 4,
    damage: 3,
    damageCritical: 4,
    specialRules: [],
    criticalRules: [],
    type: 'MELEE',
  },
}

export interface DamageMelee {
  type: 'melee'
  total: {
    maximumDamage: {
      done: number
      taken: number
    }
    maximumParry: {
      done: number
      taken: number
    }
  }
}

export interface DamageRanged {
  type: 'ranged'
  total: number
  hit: number
  crit: number
  mw?: number
}

type Damage = DamageMelee | DamageRanged

function formatMeleeDamage(damage: DamageMelee) {
  const d = damage.total
  return (
    <>
      <span>
        {d.maximumParry.done} - {d.maximumDamage.done} done
        <br />
        {d.maximumParry.taken} - {d.maximumDamage.taken} taken
      </span>
    </>
  )
}

function generateWeaponRow(
  weapon: Weapon,
  weaponSkill: number,
  {
    isProfile,
    nextIsProfile,
    backgroundColor = 'transparent',
  }: { isProfile: boolean; nextIsProfile: boolean; backgroundColor: string }
) {
  const geqDamage: Damage = calculateDamage(weapon, weaponSkill, geqProfile)
  const meqDamage = calculateDamage(weapon, weaponSkill, meqProfile)
  const custodesDamage = calculateDamage(weapon, weaponSkill, custodesProfile)

  const styles: { backgroundColor: string; borderBottomWidth?: number } = {
    backgroundColor,
  }

  if (nextIsProfile) {
    styles.borderBottomWidth = 0
  }

  return (
    <TableRow key={weapon.name + weapon.profile}>
      <TableCell style={styles}>{isProfile ? '' : weapon.name}</TableCell>
      <TableCell style={styles}>{weapon.profile}</TableCell>
      <TableCell style={styles}>{weapon.attackDice}</TableCell>
      <TableCell style={styles}>
        {Math.max(2, weapon.weaponSkillAdjustment ? weaponSkill + weapon.weaponSkillAdjustment : weaponSkill)}
      </TableCell>
      <TableCell style={styles}>
        {weapon.damage}/{weapon.damageCritical}
      </TableCell>
      <TableCell style={styles}>{weapon.specialRules.map((rule) => rule.label).join(', ')}</TableCell>
      <TableCell style={styles}>{weapon.criticalRules.map((rule) => rule.label).join(', ')}</TableCell>
      <TableCell style={styles}>
        <strong>{geqDamage.type === 'melee' ? formatMeleeDamage(geqDamage) : geqDamage.total}</strong>
        {/* (hit: {geqDamage.hit}, crit: {geqDamage.crit}, mw: {geqDamage.mw}, data: {JSON.stringify(geqDamage.data)}) */}
      </TableCell>
      <TableCell style={styles}>
        <strong>{meqDamage.type === 'melee' ? formatMeleeDamage(meqDamage) : meqDamage.total}</strong>
        {/* (hit: {meqDamage.hit}, crit: {meqDamage.crit}, mw: {meqDamage.mw}) */}
      </TableCell>
      <TableCell style={styles}>
        <strong>{custodesDamage.type === 'melee' ? formatMeleeDamage(custodesDamage) : custodesDamage.total}</strong>
        {/* (hit: {custodesDamage.hit}, crit: {custodesDamage.crit}, mw: {custodesDamage.mw}) */}
      </TableCell>
    </TableRow>
  )
}

function generateStatBlock(name: string, weaponSkill: number, weapons: Weapon[]) {
  let rowColor = 'rgba(1,1,1,0.1)'

  function switchRowColor() {
    if (rowColor === 'rgba(1,1,1,0.1)') {
      rowColor = 'transparent'
    } else {
      rowColor = 'rgba(1,1,1,0.1)'
    }
  }

  return (
    <TableContainer component={Paper} style={{ margin: '20px' }} key={name}>
      <Table size="small">
        <TableHead>
          <TableRow style={{ backgroundColor: 'rgba(1,1,1,0.3)' }}>
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
            const sameNameAsPrevious = index === 0 ? false : weapon.name === weapons[index - 1]?.name

            const sameNameAsNext = weapon.name === weapons[index + 1]?.name

            if (!sameNameAsPrevious) {
              switchRowColor()
            }

            return generateWeaponRow(weapon, weaponSkill, {
              isProfile: sameNameAsPrevious,
              nextIsProfile: sameNameAsNext,
              backgroundColor: rowColor,
            })
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function App() {
  return (
    <Grid container spacing={4}>
      <Grid item>
        {dataSheets.map((profile) => generateStatBlock(profile.name, profile.weaponSkill, profile.weapons))}
      </Grid>
    </Grid>
  )
}

export default App
