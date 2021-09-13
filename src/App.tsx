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
  Drawer,
  Button,
} from '@material-ui/core'
import { Weapon, WeaponName } from './stats/weapons'
import { adeptusAstartesStats } from './stats/factions/adeptusAstartes'
import { hereticAstartesStats } from './stats/factions/hereticAstartes'
import { calculateDamage, DamageMelee, getAttackerAttackDice } from './calculation'
import { specialRules } from './rules'
import React, { Dispatch, FunctionComponent, SetStateAction, useState } from 'react'
import { forgeWorldStats } from './stats/factions/forgeWorld'
import { broodCovenStats } from './stats/factions/broodCoven'
import { DataSheet, WeaponOption, WeaponOptions } from './helpers'
import { custodianGuardWarrior, talonsOfTheEmperorStats } from './stats/factions/talonsOfTheEmperor'
import classNames from 'classnames'
import { CSSProperties } from 'react'

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

function handleSelectWeapon(profile: DataSheet, name: WeaponName, setDatasheet: Dispatch<SetStateAction<DataSheet>>) {
  if (Array.isArray(profile.selectedWeapons)) {
    if (profile.selectedWeapons.includes(name)) {
      console.warn('Duplicate weapon')
      return
    }

    setDatasheet({
      ...profile,
      selectedWeapons: [...profile.selectedWeapons, name],
    })

    return
  }

  setDatasheet({
    ...profile,
    selectedWeapons: [name],
  })
}

function handleDeselectWeapon(profile: DataSheet, name: WeaponName, setDatasheet: Dispatch<SetStateAction<DataSheet>>) {
  if (Array.isArray(profile.selectedWeapons)) {
    if (!profile.selectedWeapons.includes(name)) {
      console.warn('Unable to deselect, weapon not selected')
      return
    }

    setDatasheet({
      ...profile,
      selectedWeapons: [...profile.selectedWeapons.filter((weapon) => weapon !== name)],
    })

    return
  }

  console.warn('Unable to deselect, no selected weapons')
}

function isWeaponInOption(name: WeaponName, option: WeaponOption): boolean {
  return option.some((optionItem) => {
    return optionItem.includes(name)
  })
}

function isWeaponInOptions(name: WeaponName, options: WeaponOptions): boolean {
  return options.some((option) => {
    return isWeaponInOption(name, option)
  })
}

function isOptionComplete(selectedWeapons: WeaponName[], option: WeaponOption): boolean {
  return option.every((weaponsArray) => {
    return selectedWeapons.some((selectedWeapon) => {
      return weaponsArray.includes(selectedWeapon)
    })
  })
}

function areWeaponsInSameSuboption(weapon1: WeaponName, weapon2: WeaponName, option: WeaponOption): boolean {
  if (weapon1 === weapon2) {
    return false
  }

  return option.some((weaponsArray) => {
    return weaponsArray.includes(weapon1) && weaponsArray.includes(weapon2)
  })
}

function isWeaponAddable(weaponName: WeaponName, profile: DataSheet) {
  // For profiles without options set
  if (!profile.weaponOptions) {
    return true
  }

  let viableOptions = [...profile.weaponOptions]

  // If there are selected weapons:
  if (Array.isArray(profile.selectedWeapons) && profile.selectedWeapons.length > 0) {
    // Use only options that have at least 1 selected weapon in them
    profile.selectedWeapons.forEach((selectedWeapon) => {
      viableOptions = viableOptions.filter((option) => isWeaponInOption(selectedWeapon, option))
    })

    // Use only options that are not complete AND
    // ...which do not already have the suboption this weapon is in, filled
    viableOptions = viableOptions.filter((option) => {
      // Needed for typescript for some reason
      if (profile.selectedWeapons) {
        const isWeaponInSuboptionWithSelectedWeapons = profile.selectedWeapons.some((selectedWeapon) =>
          areWeaponsInSameSuboption(selectedWeapon, weaponName, option)
        )

        return !isOptionComplete(profile.selectedWeapons, option) && !isWeaponInSuboptionWithSelectedWeapons
      }

      return true
    })
  }

  return isWeaponInOptions(weaponName, viableOptions)
}

function generateWeaponRow(
  weapon: Weapon,
  attackProfile: DataSheet,
  setDatasheet: Dispatch<SetStateAction<DataSheet>>,
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

  const styles: CSSProperties = {
    backgroundColor,
  }

  const buttonCellStyles: CSSProperties = {
    backgroundColor,
    textAlign: 'center',
  }

  if (nextIsProfile) {
    styles.borderBottomWidth = 0
    buttonCellStyles.borderBottomWidth = 0
  }

  const neededSkill = weapon.type === 'MELEE' ? attackProfile.weaponSkill : attackProfile.ballisticSkill

  const weaponOrBallisticSkill =
    weapon.fixedWeaponBallisticSkill || neededSkill + (weapon.weaponBallisticSkillAdjustment || 0)

  const adjustedWsOrBs = Math.max(2, weaponOrBallisticSkill)

  const isSelected = attackProfile.selectedWeapons?.some((selectedName) => selectedName === weapon.name)
  const isSelectable = isWeaponAddable(weapon.name, attackProfile)
  const isDefaultWeapon = attackProfile.defaultWeapons?.includes(weapon.name)

  return (
    <TableRow
      key={weapon.name + weapon.profile}
      className={classNames({
        'weapon-selected': isSelected,
        'weapon-disabled': !isSelectable,
      })}
    >
      <TableCell style={buttonCellStyles} className={isDefaultWeapon ? 'default-weapon' : ''}>
        {isSelectable && !isSelected && !isProfile && (
          <>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={() => handleSelectWeapon(attackProfile, weapon.name, setDatasheet)}
            >
              +
            </Button>
          </>
        )}
        {isSelected && !isProfile && (
          <Button
            size="small"
            color="secondary"
            variant="contained"
            onClick={() => handleDeselectWeapon(attackProfile, weapon.name, setDatasheet)}
          >
            -
          </Button>
        )}
        {isDefaultWeapon && (
          <span>
            Always
            <br />
            Equipped
          </span>
        )}
      </TableCell>
      <TableCell style={styles}>{isProfile ? '' : weapon.name}</TableCell>
      <TableCell style={styles}>{weapon.profile}</TableCell>
      {weapon.name === 'Storm shield' ? (
        [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <TableCell style={styles} key={item}></TableCell>)
      ) : (
        <>
          <TableCell style={styles}>{getAttackerAttackDice(weapon)}</TableCell>
          <TableCell style={styles}>{adjustedWsOrBs}+</TableCell>
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
            <strong>
              {custodesDamage.type === 'melee' ? formatMeleeDamage(custodesDamage) : custodesDamage.total}
            </strong>
            {/* (hit: {custodesDamage.hit}, crit: {custodesDamage.crit}, mw: {custodesDamage.mw}) */}
          </TableCell>
        </>
      )}
    </TableRow>
  )
}

function StatBlock(dataSheet: DataSheet) {
  const [dataSheetLocal, setDataSheetLocal] = useState<DataSheet>(dataSheet)
  let rowColor = 'rgba(1,1,1,0.1)'

  function switchRowColor() {
    if (rowColor === 'rgba(1,1,1,0.1)') {
      rowColor = 'transparent'
    } else {
      rowColor = 'rgba(1,1,1,0.1)'
    }
  }

  const rangedWeapons = dataSheetLocal.weapons.filter((weapon) => weapon.type === 'RANGED')
  const meleeWeapons = dataSheetLocal.weapons.filter((weapon) => weapon.type === 'MELEE')

  return (
    <TableContainer component={Paper} style={{ margin: '20px' }} key={dataSheetLocal.name}>
      <Table size="small">
        <TableHead>
          <TableRow style={{ backgroundColor: 'rgb(255, 102, 0)' }}>
            <TableCell rowSpan={4} style={{ width: '50%', backgroundColor: 'rgb(40,40,40)', color: 'white' }}>
              <Typography variant="h5" fontWeight="700">
                {dataSheetLocal.name}
              </Typography>
            </TableCell>
            <TableCell style={{ textAlign: 'center', fontWeight: 700 }}>M</TableCell>
            <TableCell style={{ textAlign: 'center', fontWeight: 700 }}>APL</TableCell>
            <TableCell style={{ textAlign: 'center', fontWeight: 700 }}>GA</TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: 'rgba(1,1,1,0.1)' }}>
            <TableCell style={{ borderBottom: 0, textAlign: 'center' }}>{dataSheetLocal.movement}</TableCell>
            <TableCell style={{ borderBottom: 0, textAlign: 'center' }}>{dataSheetLocal.apl}</TableCell>
            <TableCell style={{ borderBottom: 0, textAlign: 'center' }}>{dataSheetLocal.groupActivation}</TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: 'rgb(255, 102, 0)' }}>
            <TableCell style={{ textAlign: 'center', fontWeight: 700 }}>DF</TableCell>
            <TableCell style={{ textAlign: 'center', fontWeight: 700 }}>SV</TableCell>
            <TableCell style={{ textAlign: 'center', fontWeight: 700 }}>W</TableCell>
          </TableRow>
          <TableRow style={{ backgroundColor: 'rgba(1,1,1,0.1)' }}>
            <TableCell style={{ textAlign: 'center' }}>{dataSheetLocal.defense}</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{dataSheetLocal.save}+</TableCell>
            <TableCell style={{ textAlign: 'center' }}>{dataSheetLocal.wounds}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table>
        <TableHead>
          {rangedWeapons.length > 0 && (
            <TableRow>
              <TableCell></TableCell>
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

            return generateWeaponRow(weapon, dataSheetLocal, setDataSheetLocal, {
              isProfile: sameNameAsPrevious,
              nextIsProfile: sameNameAsNext,
              backgroundColor: rowColor,
            })
          })}
        </TableBody>
        {meleeWeapons.length > 0 && (
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
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

            return generateWeaponRow(weapon, dataSheetLocal, setDataSheetLocal, {
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
  }

  const handleOpenDrawer = () => {
    setIsDrawerOpen(true)
  }

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
    setLvl2Value(0)
  }

  const handleChangeLvl2 = (event: any, newValue: any) => {
    setLvl2Value(newValue)
  }

  return (
    <div>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        anchor="right"
        onClose={handleCloseDrawer}
        style={{ minWidth: '500px' }}
      >
        <Typography variant="h6">Roster</Typography>
      </Drawer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {factions.map((faction) => (
            <Tab label={faction.name} />
          ))}
          {/* <Tab label="Roster" onClick={handleOpenDrawer} /> */}
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
                {fireTeam.dataSheets.map((dataSheet) => StatBlock(dataSheet))}
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
