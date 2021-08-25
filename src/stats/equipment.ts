import { criticalRules, Rule, specialRules } from '../rules'

export interface EquipmentItem {
  label: string
  additionalSpecialRules?: Rule[]
  additionalCriticalRules?: Rule[]
}

export interface Equipment {
  [x: string]: EquipmentItem
}

export const equipment: Equipment = {
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
}
