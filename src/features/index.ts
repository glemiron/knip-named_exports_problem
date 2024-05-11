import { ValuesType } from 'utility-types'

import * as FEATURES from './constants'

export type Feature = ValuesType<typeof FEATURES>
