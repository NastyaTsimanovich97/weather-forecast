function generateWeatherImg(img) {
  let src = '';
  switch (img) {
    case ('01d'):
      src = '../fancy-weather/src/img/weather/sun.svg';
      break;
    case ('01n'):
      src = '../fancy-weather/src/img/weather/nightClear.svg';
      break;
    case ('02n'):
      src = '../fancy-weather/src/img/weather/night.svg';
      break;
    case ('02d'):
      src = '../fancy-weather/src/img/weather/sunny.svg';
      break;
    case ('03n'):
      src = '../fancy-weather/src/img/weather/cloud.svg';
      break;
    case ('03d'):
      src = '../fancy-weather/src/img/weather/cloud.svg';
      break;
    case ('04n'):
      src = '../fancy-weather/src/img/weather/cloudy.svg';
      break;
    case ('04d'):
      src = '../fancy-weather/src/img/weather/cloudy.svg';
      break;
    case ('09n'):
      src = '../fancy-weather/src/img/weather/snowflake.svg';
      break;
    case ('09d'):
      src = '../fancy-weather/src/img/weather/snowflake.svg';
      break;
    case ('10n'):
      src = '../fancy-weather/src/img/weather/rain.svg';
      break;
    case ('10d'):
      src = '../fancy-weather/src/img/weather/drizzle.svg';
      break;
    case ('11d'):
      src = '../fancy-weather/src/img/weather/storm.svg';
      break;
    case ('13n'):
      src = '../fancy-weather/src/img/weather/snowflake.svg';
      break;
    case ('13d'):
      src = '../fancy-weather/src/img/weather/snowflake.svg';
      break;
    case ('50n'):
      src = '../fancy-weather/src/img/weather/fog.svg';
      break;
    case ('50d'):
      src = '../fancy-weather/src/img/weather/fog.svg';
      break;
    default:
      src = `http://openweathermap.org/img/wn/${img}@2x.png`;
  }
  return src;
}

module.exports = generateWeatherImg;