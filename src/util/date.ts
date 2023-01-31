export const getYearArray = (startYear = 1900) => {
  const nowYear = new Date().getFullYear();
  const yearArr = [];
  for (let year = nowYear; startYear <= year; year--) {
    yearArr.push(year);
  }
  return yearArr;
};
