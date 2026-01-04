// modules/luxon.js
import { DateTime } from 'luxon'; // ovo koristi ES6 import iz node_modules

export const getCurrentFormattedDate = () => {
  return DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
