// modules/luxon.js
export const getCurrentFormattedDate = () => {
  return luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
};

