const getTime = require('./getTime');

describe('get Time', () => {
  it('should return sring with day period', () => {
    expect(getTime(new Date('November 17, 1997 03:24:00'))).not.toEqual('morning');
    expect(getTime(new Date('November 17, 2019 06:24:00'))).toEqual('morning');
    expect(getTime(new Date('November 22, 2019 19:59:00'))).toEqual('evening');
    expect(getTime(new Date('November 22, 2019 12:00:00'))).toEqual('day');
    expect(getTime(new Date('November 22, 2019 3:59:00'))).toEqual('nigth');
  })
})