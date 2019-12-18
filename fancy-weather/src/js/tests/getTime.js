function getTime(date) {
  const hour = date.getHours();
  let time;
  if (hour > 0 && hour < 6) {
    time = 'nigth';
  }
  if (hour >= 6 && hour < 12) {
    time = 'morning';
  }
  if (hour >= 12 && hour < 19) {
    time = 'day';
  }
  if (hour >= 19 && hour < 23) {
    time = 'evening';
  }
  return time;
}

module.exports = getTime;