const translateDescription = require('./translateDescription');

describe('translate description weather', () => {
  it('should return sring on Belorusian', () => {
    expect(translateDescription('broken clouds')).toEqual('воблачна');
    expect(translateDescription('few clouds')).toEqual('мала аблокаў');
    expect(translateDescription('scattered clouds')).toEqual('рассеяныя аблокі');
    expect(translateDescription('snow')).toEqual('снег');
  })
})