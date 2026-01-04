// modules/luxon.js
const DateTime = luxon.DateTime;

export const getCurrentFormattedDate = () => {
  return DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
