import './App.css'
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  Tabs,
  Tab,
  Box,
} from '@material-ui/core'
import { Weapon } from './stats/weapons'
import { dataSheetsDeathWatch } from './stats/factions/deathwatch'
import { dataSheetsChaosSpaceMarines } from './stats/factions/chaos'
import { calculateDamage } from './calculation'
import { specialRules } from './rules'
import React, { FunctionComponent, useState } from 'react'
import { forgeWorldStats } from './stats/factions/forgeWorld'
import { broodCovenStats } from './stats/factions/broodCoven'

interface FireTeam {
  name: string
  dataSheets: any[]
}

interface Faction {
  name: string
  fireTeams: FireTeam[]
}
interface DataSheet {
  name: string
  ballisticSkill: number
  weaponSkill: number
  weapons: Weapon[]
}
type Factions = Faction[]

const factions: Factions = [
  {
    name: 'Adeptus Astartes',
    fireTeams: [
      {
        name: 'DeathWatch Veterans',
        dataSheets: [...dataSheetsDeathWatch],
      },
    ],
  },
  {
    name: 'Heretic Astartes',
    fireTeams: [
      {
        name: 'Chaos Space Marines',
        dataSheets: [...dataSheetsChaosSpaceMarines],
      },
    ],
  },
  forgeWorldStats,
  broodCovenStats,
]

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
    maxDamage: {
      done: number
      taken: number
    }
    minTakenDef: {
      done: number
      taken: number
    }
    minTakenAtt: {
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

function formatMeleeDamage(damage: DamageMelee) {
  const d = damage.total
  return (
    <>
      <span>
        ⚔️ vs ⚔️: <span style={{ color: 'green' }}>{d.maxDamage.done}</span>{' '}
        <span style={{ color: 'red' }}>{d.maxDamage.taken}</span>
        <br />
        ⚔️ vs 🛡️: <span style={{ color: 'green' }}>{d.minTakenDef.done}</span>{' '}
        <span style={{ color: 'red' }}>{d.minTakenDef.taken}</span>
        <br />
        🛡️ vs ⚔️: <span style={{ color: 'green' }}>{d.minTakenAtt.done}</span>{' '}
        <span style={{ color: 'red' }}>{d.minTakenAtt.taken}</span>
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
  const geqDamage = calculateDamage(weapon, weaponSkill, geqProfile)
  const meqDamage = calculateDamage(weapon, weaponSkill, meqProfile)
  const custodesDamage = calculateDamage(weapon, weaponSkill, custodesProfile)

  const styles: { backgroundColor: string; borderBottomWidth?: number } = {
    backgroundColor,
  }

  if (nextIsProfile) {
    styles.borderBottomWidth = 0
  }

  const weaponBallisticSkill =
    weapon.fixedWeaponBallisticSkill || weaponSkill + (weapon.weaponBallisticSkillAdjustment || 0)

  const adjustedballisticSkill = Math.max(2, weaponBallisticSkill)

  return (
    <TableRow key={weapon.name + weapon.profile}>
      <TableCell style={styles}>{isProfile ? '' : weapon.name}</TableCell>
      <TableCell style={styles}>{weapon.profile}</TableCell>
      <TableCell style={styles}>{weapon.attackDice}</TableCell>
      <TableCell style={styles}>{adjustedballisticSkill}</TableCell>
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

function generateStatBlock({ name, weaponSkill, ballisticSkill, weapons }: DataSheet) {
  let rowColor = 'rgba(1,1,1,0.1)'

  function switchRowColor() {
    if (rowColor === 'rgba(1,1,1,0.1)') {
      rowColor = 'transparent'
    } else {
      rowColor = 'rgba(1,1,1,0.1)'
    }
  }

  const rangedWeapons = weapons.filter((weapon) => weapon.type === 'RANGED')
  const meleeWeapons = weapons.filter((weapon) => weapon.type === 'MELEE')

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
          {rangedWeapons.length > 0 && (
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>A</TableCell>
              <TableCell>BS</TableCell>
              <TableCell>D</TableCell>
              <TableCell>SR</TableCell>
              <TableCell>!</TableCell>
              <TableCell>Avg Dmg vs GEQ</TableCell>
              <TableCell>Avg Dmg vs MEQ</TableCell>
              <TableCell>Avg Dmg vs Custodes</TableCell>
            </TableRow>
          )}
        </TableHead>
        <TableBody>
          {rangedWeapons.map((weapon, index) => {
            const sameNameAsPrevious = index === 0 ? false : weapon.name === rangedWeapons[index - 1]?.name
            const sameNameAsNext = weapon.name === rangedWeapons[index + 1]?.name

            if (!sameNameAsPrevious) {
              switchRowColor()
            }

            const neededSkill = weapon.type === 'RANGED' ? ballisticSkill : weaponSkill

            return generateWeaponRow(weapon, neededSkill, {
              isProfile: sameNameAsPrevious,
              nextIsProfile: sameNameAsNext,
              backgroundColor: rowColor,
            })
          })}
        </TableBody>
        {meleeWeapons.length > 0 && (
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Profile</TableCell>
              <TableCell>A</TableCell>
              <TableCell>WS</TableCell>
              <TableCell>D</TableCell>
              <TableCell>SR</TableCell>
              <TableCell>!</TableCell>
              <TableCell>
                Avg Dmg vs GEQ w/ Fists
                <br />(<span style={{ color: 'green' }}>done</span> <span style={{ color: 'red' }}>taken</span>)
              </TableCell>
              <TableCell>
                Avg Dmg vs MEQ w/ Power Weapon
                <br /> (<span style={{ color: 'green' }}>done</span> <span style={{ color: 'red' }}>taken</span>)
              </TableCell>
              <TableCell>
                Avg Dmg vs CEQ w/ Guardian Spear
                <br /> (<span style={{ color: 'green' }}>done</span> <span style={{ color: 'red' }}>taken</span>)
              </TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {meleeWeapons.map((weapon, index) => {
            const sameNameAsPrevious = index === 0 ? false : weapon.name === meleeWeapons[index - 1]?.name
            const sameNameAsNext = weapon.name === meleeWeapons[index + 1]?.name

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

interface TabPanelProps {
  index: number
  value: number
}

const TabPanel: FunctionComponent<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function App() {
  const [value, setValue] = useState(0)
  const [lvl2Value, setLvl2Value] = useState(0)

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  const handleChangeLvl2 = (event: any, newValue: any) => {
    setLvl2Value(newValue)
  }

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {factions.map((faction) => (
            <Tab label={faction.name} />
          ))}
        </Tabs>
      </Box>
      {factions.map((faction, index) => (
        <>
          <TabPanel index={index} value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={lvl2Value} onChange={handleChangeLvl2}>
                {faction.fireTeams.map((fireTeam) => (
                  <Tab label={fireTeam.name} />
                ))}
              </Tabs>
            </Box>
            {factions[index].fireTeams.map((fireTeam, fireTeamIndex) => (
              <TabPanel index={fireTeamIndex} value={lvl2Value}>
                {fireTeam.dataSheets.map((dataSheet) => generateStatBlock(dataSheet))}
              </TabPanel>
            ))}
          </TabPanel>
        </>
      ))}
    </div>
  )
}

export default App

// {
//   dataSheets.map((profile) => generateStatBlock(profile.name, profile.weaponSkill, profile.weapons))
// }
