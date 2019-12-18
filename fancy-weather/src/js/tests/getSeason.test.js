const getSeason = require('./getSeason');

describe('get Season', () => {
  it('should return sring with season', () => {
    expect(getSeason(new Date('November 17, 1997 03:24:00'))).not.toEqual('winter');
    expect(getSeason(new Date('December 17, 1995 03:24:00'))).toEqual('winter');
    expect(getSeason(new Date('April 17, 1995 03:24:00'))).toEqual('spring');
    expect(getSeason(new Date('May 31, 23:00'))).toEqual('spring');
    expect(getSeason(new Date('August 31'))).toEqual('summer');
    expect(getSeason(new Date('June 22'))).toEqual('summer');
  })
})