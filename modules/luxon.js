// modules/luxon.js
import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const getCurrentFormattedDate = () => {
  return DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
