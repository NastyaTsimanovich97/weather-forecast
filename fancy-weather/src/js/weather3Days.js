import { createHtmlElement } from './generateHTML';
import { wrapper } from './generateWeatherNow';
import generateWeatherImg from './generateWeatherImg';
import convertDegrees from './convertDegrees';
import { dayOfWeekEn, dayOfWeekRu, dayOfWeekBe } from './arrayWeather/arrayDayOfWeek';

const containerThreeDays = createHtmlElement('div', 'container__three-days', wrapper);

class Weather {
  constructor(day) {
    this.day = day;
  }

  get getDayOfWeek() {
    let dayOfWeek;
    if (this.day <= 7) {
      dayOfWeek = this.day;
    } else {
      dayOfWeek = this.day - 7;
    }
    let dayOfWeekArray;
    if (localStorage.getItem('weatherLang') === 'en') {
      dayOfWeekArray = dayOfWeekEn;
    }
    if (localStorage.getItem('weatherLang') === 'ru') {
      dayOfWeekArray = dayOfWeekRu;
    }
    if (localStorage.getItem('weatherLang') === 'be') {
      dayOfWeekArray = dayOfWeekBe;
    }
    return dayOfWeekArray[dayOfWeek - 1];
  }

  get createElement() {
    const containerDay = createHtmlElement('div', `container__day-${this.day}`, containerThreeDays);
    containerDay.classList.add('container__day');
    const dayOfWeek = createHtmlElement('p', `day-${this.day}`, containerDay);
    dayOfWeek.classList.add('day-of-week');
    dayOfWeek.innerHTML = this.getDayOfWeek;
    const temperatureContainer = createHtmlElement('div', `container__temperature-${this.day}`, containerDay);
    temperatureContainer.classList.add('container__day-of-week__temperature');
    const temperature = createHtmlElement('p', `temperature-${this.day}`, temperatureContainer);
    temperature.classList.add('day-of-week__temperature');
    const temperatureDegrees = createHtmlElement('p', `temperature-${this.day}`, temperatureContainer);
    temperatureDegrees.classList.add('day-of-week__degrees');
    temperatureDegrees.innerHTML = '&#176;';
    return temperature;
  }

  get createImg() {
    const containerDay = document.querySelector(`.container__day-${this.day}`);
    const img = createHtmlElement('img', `img-${this.day}`, containerDay);
    img.classList.add('day-of-week__img');
    return img;
  }
}

function createThreeDaysWeather(day, temperature, img, number) {
  const weatherTomorrow = new Weather(day);
  const elementTemperature = weatherTomorrow.createElement;
  elementTemperature.innerHTML = `${temperature}`;
  elementTemperature.classList.add(`temperature__next-day-${number}`);
  const elementImg = weatherTomorrow.createImg;
  elementImg.setAttribute('src', generateWeatherImg(img));
}

function avgWeather(item, weather) {
  const temperature1 = weather.list[item - 1].main.temp;
  const temperature2 = weather.list[item].main.temp;
  const temperature3 = weather.list[item - 1].main.temp;
  return (temperature1 + temperature2 + temperature3) / 3;
}

export default function getThreeDaysWeather(weather) {
  containerThreeDays.innerHTML = '';
  const date = new Date().getTime();
  const hour = new Date(date + (weather.city.timezone - 10800) * 1000).getHours();
  const today = new Date().getDay();
  const tomorrow = today + 1;
  const dayAfterTomorrow = today + 2;
  const dayAfterAfterTomorrow = today + 3;
  let item;
  if ([0, 1, 2].indexOf(hour) > -1) {
    item = 12;
  }
  if ([3, 4, 5].indexOf(hour) > -1) {
    item = 11;
  }
  if ([6, 7, 8].indexOf(hour) > -1) {
    item = 10;
  }
  if ([9, 10, 11].indexOf(hour) > -1) {
    item = 9;
  }
  if ([12, 13, 14].indexOf(hour) > -1) {
    item = 8;
  }
  if ([15, 16, 17].indexOf(hour) > -1) {
    item = 7;
  }
  if ([18, 19, 20].indexOf(hour) > -1) {
    item = 6;
  }
  if ([21, 22, 23].indexOf(hour) > -1) {
    item = 5;
  }

  const temperature = Math.round(convertDegrees(avgWeather(item, weather)));
  const img = weather.list[item].weather[0].icon;

  const temperatureAfterTomorrow = Math.round(convertDegrees(avgWeather(item + 8, weather)));
  const imgAfterTomorrow = weather.list[item + 8].weather[0].icon;

  const tempAfterAfterTomorrow = Math.round(convertDegrees(avgWeather(item + 16, weather)));
  const imgAfterAfterTomorrow = weather.list[item + 16].weather[0].icon;

  createThreeDaysWeather(tomorrow, temperature, img, 1);
  createThreeDaysWeather(dayAfterTomorrow, temperatureAfterTomorrow, imgAfterTomorrow, 2);
  createThreeDaysWeather(dayAfterAfterTomorrow, tempAfterAfterTomorrow, imgAfterAfterTomorrow, 3);
}
