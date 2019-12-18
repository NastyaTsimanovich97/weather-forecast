function getUserTime(timezone) {
  const date = new Date('April 17, 2019 12:00:00').getTime();
  const localTime = new Date(date + (timezone - 10800) * 1000);
  return localTime.getHours();
}

module.exports = getUserTime;