const getWeatherImg = require('./getWeatherImg');

describe('description weather', () => {
  it('should return source on description img', () => {
    expect(getWeatherImg('10d')).toEqual('../fancy-weather/src/img/weather/drizzle.svg');
    expect(getWeatherImg('04d')).toEqual('../fancy-weather/src/img/weather/cloudy.svg');
    expect(getWeatherImg('50d')).toEqual('../fancy-weather/src/img/weather/fog.svg');
    expect(getWeatherImg('50n')).toEqual('../fancy-weather/src/img/weather/fog.svg');
    expect(getWeatherImg('5')).toEqual('http://openweathermap.org/img/wn/5@2x.png');
  })
})