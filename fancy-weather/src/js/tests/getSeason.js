function getSeason(date) {
  const month = date.getMonth();
  let season;
  if (month === 11 || month < 2) {
    season = 'winter';
  }
  if (month >= 2 && month < 5) {
    season = 'spring';
  }
  if (month >= 5 && month < 8) {
    season = 'summer';
  }
  if (month >= 8 && month < 11) {
    season = 'autumn';
  }
  return season;
}

module.exports = getSeason;