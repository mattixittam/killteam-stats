import { getProfiles } from '../../helpers'

export const neophyteHybridTrooper = {
  name: 'NEOPHYTE HYBRID (TROOPER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [...getProfiles('Autogun'), ...getProfiles('Shotgun'), ...getProfiles('Gun butt')],
}

export const neophyteHybridGunner = {
  name: 'NEOPHYTE HYBRID (GUNNER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getProfiles('Flamer'),
    ...getProfiles('Grenade launcher'),
    ...getProfiles('Webber'),
    ...getProfiles('Gun butt'),
  ],
}

export const neophyteHybridHeavyGunner = {
  name: 'NEOPHYTE HYBRID (HEAVY GUNNER)',
  ballisticSkill: 4,
  weaponSkill: 4,
  weapons: [
    ...getProfiles('Heavy stubber'),
    ...getProfiles('Mining laser'),
    ...getProfiles('Seismic cannon'),
    ...getProfiles('Gun butt'),
  ],
}

export const dataSheetsGeneStealerCults = [neophyteHybridTrooper, neophyteHybridGunner, neophyteHybridHeavyGunner]
