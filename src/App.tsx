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
import { adeptusAstartesStats } from './stats/factions/adeptusAstartes'
import { hereticAstartesStats } from './stats/factions/hereticAstartes'
import { calculateDamage, DamageMelee, getAttackerAttackDice } from './calculation'
import { specialRules } from './rules'
import React, { FunctionComponent, useState } from 'react'
import { forgeWorldStats } from './stats/factions/forgeWorld'
import { broodCovenStats } from './stats/factions/broodCoven'
import { DataSheet } from './helpers'
import { custodianGuardWarrior, talonsOfTheEmperorStats } from './stats/factions/talonsOfTheEmperor'

interface FireTeam {
  name: string
  dataSheets: any[]
}

interface Faction {
  name: string
  fireTeams: FireTeam[]
}

type Factions = Faction[]

const factions: Factions = [
  adeptusAstartesStats,
  hereticAstartesStats,
  forgeWorldStats,
  broodCovenStats,
  talonsOfTheEmperorStats,
]

export const custodesProfile = custodianGuardWarrior

export const meqProfile: DataSheet = {
  name: 'MEQ',
  movement: 6,
  apl: 3,
  groupActivation: 1,
  defense: 3,
  save: 3,
  saveCritical: 6,
  wounds: 12,
  weaponSkill: 3,
  ballisticSkill: 3,
  weapons: [
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
  ],
}

const geqProfile: DataSheet = {
  name: 'GEQ',
  movement: 6,
  apl: 2,
  groupActivation: 1,
  defense: 3,
  save: 4,
  saveCritical: 6,
  wounds: 8,
  weaponSkill: 4,
  ballisticSkill: 4,
  weapons: [
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
  ],
}

function formatMeleeDamage(damage: DamageMelee) {
  const d = damage.total
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <span style={{ flex: 'none', flexBasis: '100px' }}>Max damage: </span>
          <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
            {d.maxDamage.defenderDamage.toFixed(2)}
            {d.maxDamage.defenderDead && '💀'}
          </span>{' '}
          <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>
            {d.maxDamage.attackerDamage.toFixed(2)}
            {d.maxDamage.attackerDead && '💀'}
          </span>
        </div>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <span style={{ flex: 'none', flexBasis: '100px' }}>Def. parry: </span>
          <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
            {d.parryDefender.defenderDamage.toFixed(2)}
            {d.parryDefender.defenderDead && '💀'}
          </span>{' '}
          <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>
            {d.parryDefender.attackerDamage.toFixed(2)}
            {d.parryDefender.attackerDead && '💀'}
          </span>
        </div>
        <div style={{ display: 'inline-flex', width: '100%' }}>
          <span style={{ flex: 'none', flexBasis: '100px' }}>Att. parry: </span>
          <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
            {d.parryAttacker.defenderDamage.toFixed(2)}
            {d.parryAttacker.defenderDead && '💀'}
          </span>{' '}
          <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>
            {d.parryAttacker.attackerDamage.toFixed(2)}
            {d.parryAttacker.attackerDead && '💀'}
          </span>
        </div>
        {/* <div style={{ display: 'inline-flex', width: '100%' }}>
          <span style={{ flex: 'none', flexBasis: '100px' }}>Both parry: </span>
          <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
            {d.parryBoth.defenderDamage.toFixed(2)}
            {d.parryBoth.defenderDead && '💀'}
          </span>{' '}
          <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>
            {d.parryBoth.attackerDamage.toFixed(2)}
            {d.parryBoth.attackerDead && '💀'}
          </span>
        </div> */}
      </div>
    </>
  )
}

function generateWeaponRow(
  weapon: Weapon,
  attackProfile: DataSheet,
  {
    isProfile,
    nextIsProfile,
    backgroundColor = 'transparent',
  }: { isProfile: boolean; nextIsProfile: boolean; backgroundColor: string }
) {
  const geqDamage = calculateDamage({
    attacker: { profile: attackProfile, weapon: weapon },
    defender: { profile: geqProfile, weapon: geqProfile.weapons[0] },
  })
  const meqDamage = calculateDamage({
    attacker: { profile: attackProfile, weapon: weapon },
    defender: { profile: meqProfile, weapon: meqProfile.weapons[0] },
  })
  const custodesDamage = calculateDamage({
    attacker: { profile: attackProfile, weapon: weapon },
    defender: {
      profile: custodesProfile,
      weapon: custodesProfile.weapons.find(
        (weapon) => weapon.name === 'Guardian spear' && weapon.type === 'MELEE'
      ) as Weapon,
    },
  })

  const styles: { backgroundColor: string; borderBottomWidth?: number } = {
    backgroundColor,
  }

  if (nextIsProfile) {
    styles.borderBottomWidth = 0
  }

  const neededSkill = weapon.type === 'MELEE' ? attackProfile.weaponSkill : attackProfile.ballisticSkill

  const weaponBallisticSkill =
    weapon.fixedWeaponBallisticSkill || neededSkill + (weapon.weaponBallisticSkillAdjustment || 0)

  const adjustedballisticSkill = Math.max(2, weaponBallisticSkill)

  return (
    <TableRow key={weapon.name + weapon.profile}>
      <TableCell style={styles}>{isProfile ? '' : weapon.name}</TableCell>
      <TableCell style={styles}>{weapon.profile}</TableCell>
      <TableCell style={styles}>{getAttackerAttackDice(weapon)}</TableCell>
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

function generateStatBlock(dataSheet: DataSheet) {
  let rowColor = 'rgba(1,1,1,0.1)'

  function switchRowColor() {
    if (rowColor === 'rgba(1,1,1,0.1)') {
      rowColor = 'transparent'
    } else {
      rowColor = 'rgba(1,1,1,0.1)'
    }
  }

  const rangedWeapons = dataSheet.weapons.filter((weapon) => weapon.type === 'RANGED')
  const meleeWeapons = dataSheet.weapons.filter((weapon) => weapon.type === 'MELEE')

  return (
    <TableContainer component={Paper} style={{ margin: '20px' }} key={dataSheet.name}>
      <Table size="small">
        <TableHead>
          <TableRow style={{ backgroundColor: 'rgba(1,1,1,0.3)' }}>
            <TableCell colSpan={10}>
              <Typography variant="h5" fontWeight="700">
                {dataSheet.name}
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

            return generateWeaponRow(weapon, dataSheet, {
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
                Avg Dmg vs GEQ w/ Gun butt
                <br />
                <div style={{ display: 'inline-flex', width: '100%' }}>
                  <span style={{ flex: 'none', flexBasis: '100px' }}>strategy</span>
                  <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
                    dmg done
                  </span>{' '}
                  <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>dmg taken</span>
                </div>
              </TableCell>
              <TableCell>
                Avg Dmg vs MEQ w/ Power Weapon
                <br />
                <div style={{ display: 'inline-flex', width: '100%' }}>
                  <span style={{ flex: 'none', flexBasis: '100px' }}>strategy</span>
                  <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
                    dmg done
                  </span>{' '}
                  <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>dmg taken</span>
                </div>
              </TableCell>
              <TableCell>
                Avg Dmg vs CEQ w/ Guardian Spear
                <br />
                <div style={{ display: 'inline-flex', width: '100%' }}>
                  <span style={{ flex: 'none', flexBasis: '100px' }}>strategy</span>
                  <span style={{ flex: 'none', color: 'green', flexBasis: '80px', marginLeft: '10px' }}>
                    dmg done
                  </span>{' '}
                  <span style={{ flex: 'none', color: 'red', flexBasis: '80px' }}>dmg taken</span>
                </div>
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

            return generateWeaponRow(weapon, dataSheet, {
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
    setLvl2Value(0)
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
