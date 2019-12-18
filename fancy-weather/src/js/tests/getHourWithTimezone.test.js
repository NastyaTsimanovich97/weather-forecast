const getUserTime = require('./getHourWithTimezone');

describe('get User time', () => {
  it('should return date with timezone', () => {
    expect(getUserTime(0)).toEqual(9);
    expect(getUserTime(10800)).toEqual(12);
    expect(getUserTime(18000)).toEqual(14);
    expect(getUserTime(-18000)).toEqual(4);
  });
});




