import { Rule, specialRules } from '../rules'

export interface Equipment {
  label: string
  damageAdjustment?: number
  criticalDamageAdjustment?: number
  additionalSpecialRules?: Rule[]
  additionalCriticalRules?: Rule[]
}

export interface EquipmentCollection {
  [x: string]: Equipment
}

export const equipment: EquipmentCollection = {
  STORM_SHIELD: {
    label: 'Storm shield',
  },
  GRISLY_TROPHY: {
    label: 'Grisly trophy',
  },
  DARK_BLESSING: {
    label: 'Dark blessing',
  },
  BELT_FEED: {
    label: 'Belt feed',
    additionalSpecialRules: [specialRules.CEASELESS],
  },
  MALEFIC_ROUNDS: {
    label: 'Malefic rounds',
  },
  ENRICHED_ROUNDS: {
    label: 'Enriched rounds',
    damageAdjustment: 1,
  },
}
