import { createHtmlElement } from './generateHTML';
import generateWeatherImg from './generateWeatherImg';
import convertDegrees from './convertDegrees';
import { descriptionRu, descriptionEn, descriptionBe } from './arrayWeather/arrayDescription';
import translateDescription from './arrayWeather/translateDescription';

export const wrapper = document.querySelector('.wrapper');
const container = createHtmlElement('div', 'container__weather-now', wrapper);

function weatherFeel(temp, humidity, wind, sun) {
  const e = (humidity / 100) * 6.105 * Math.exp((17.27 * temp) / (237.7 + temp));
  const temperatureFeel = temp + 0.348 * e - 0.70 * wind + 0.70 * (sun / (wind + 10)) - 4.25;
  return temperatureFeel;
}
export function generateMainWeather(temperature, descriptionNow,
  wind, humidityNow, img, feel, arrayDesc) {
  container.innerHTML = '';
  const tempHTML = createHtmlElement('p', 'temp__weather-now', container);
  tempHTML.innerHTML = Math.round(temperature);
  const degreesHTML = createHtmlElement('p', 'degree__weather-now', container);
  degreesHTML.innerHTML = '&#176;';

  const imgWeather = createHtmlElement('img', 'img-weather', container);
  imgWeather.setAttribute('src', generateWeatherImg(img));

  const containerDescription = createHtmlElement('div', 'container__weather-description', container);

  const weatherDescr = createHtmlElement('p', 'weather-description_parametr', containerDescription);
  weatherDescr.innerHTML = descriptionNow;

  const weatherFeels = createHtmlElement('div', 'weather-feels__container', containerDescription);
  const weatherFeelsParagraph = createHtmlElement('p', 'weather-description', weatherFeels);
  const weatherFeelsTemp = createHtmlElement('p', 'weather-feels_temperature', weatherFeels);
  const weatherFeelsDegrees = createHtmlElement('p', 'weather-feels_degrees', weatherFeels);
  weatherFeelsParagraph.innerHTML = `${arrayDesc[0]}:`;
  weatherFeelsTemp.innerHTML = `${Math.round(convertDegrees(feel + 273.15))}`;
  weatherFeelsDegrees.innerHTML = '&#176;';

  const windHTML = createHtmlElement('p', 'weather-description', containerDescription);
  windHTML.innerHTML = `${arrayDesc[1]}: ${wind}${arrayDesc[2]}`;

  const humidityHTML = createHtmlElement('p', 'weather-description', containerDescription);
  humidityHTML.innerHTML = `${arrayDesc[3]}: ${humidityNow}%`;
}

export function getMainWeather(weather) {
  let descriptionNow = weather.list[0].weather[0].description;
  const temperatureCels = weather.list[0].main.temp - 273.15;
  const temperature = convertDegrees(weather.list[0].main.temp);
  const humidityNow = weather.list[0].main.humidity;
  const wind = weather.list[0].wind.speed;
  const sun = 100 / weather.list[0].clouds.all;
  const img = weather.list[0].weather[0].icon;
  const feel = weatherFeel(temperatureCels, humidityNow, wind, sun);
  let arrayDesc;
  if (localStorage.getItem('weatherLang') === 'ru') {
    arrayDesc = descriptionRu;
  }
  if (localStorage.getItem('weatherLang') === 'en') {
    arrayDesc = descriptionEn;
  }
  if (localStorage.getItem('weatherLang') === 'be') {
    arrayDesc = descriptionBe;
    descriptionNow = translateDescription(weather.list[0].weather[0].description);
  }
  generateMainWeather(temperature, descriptionNow, wind, humidityNow, img, feel, arrayDesc);
}
