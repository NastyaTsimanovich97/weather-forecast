import getLinkToImage from './getImage';
import { getLocation, getUserTime } from './generateHTML';
import { getMainWeather } from './generateWeatherNow';
import getThreeDaysWeather from './weather3Days';
import findLocalStorage from './localStorage';
import { getCoordinatesUser, createMap } from './generateMap';

export async function getWeather(lat, lon) {
  const weatherURL = {
    forecast: 'https://api.openweathermap.org/data/2.5/forecast?',
    latitude: `lat=${lat}`,
    longitude: `&lon=${lon}`,
    language: `&lang=${findLocalStorage('weatherLang', 'en')}`,
    units: '&APPID=4cda0ca169bf55ed167b2ae2e5ad15ef',
  };

  const responseWeather = await fetch(`${weatherURL.forecast}${weatherURL.latitude}${weatherURL.longitude}${weatherURL.language}${weatherURL.units}`);
  const userWeather = await responseWeather.json();

  const weather = userWeather.list[0].weather[0].main;
  getLinkToImage(userWeather.city.name, weather);
  getUserTime(userWeather.city.timezone);
  getMainWeather(userWeather);
  getThreeDaysWeather(userWeather);
}

export async function getTimezone(lat, lon) {
  const weatherURL = {
    forecast: 'https://api.openweathermap.org/data/2.5/forecast?',
    latitude: `lat=${lat}`,
    longitude: `&lon=${lon}`,
    language: `&lang=${findLocalStorage('weatherLang', 'en')}`,
    units: '&APPID=4cda0ca169bf55ed167b2ae2e5ad15ef',
  };
  const responseTimezone = await fetch(`${weatherURL.forecast}${weatherURL.latitude}${weatherURL.longitude}${weatherURL.language}${weatherURL.units}`);
  const timezone = await responseTimezone.json();
  getUserTime(timezone.city.timezone);
}

export async function getCoord(city) {
  const coordURL = {
    ip: 'https://api.opencagedata.com/geocode/v1/json?q=',
    cityWeather: city,
    language: `&language=${findLocalStorage('weatherLang', 'en')}`,
    key: '&key=32e76688999c4eadb768e9460475c4ce',
  };
  const responseCoordinates = await fetch(`${coordURL.ip}${coordURL.cityWeather}${coordURL.language}${coordURL.key}`);
  const userCoordinates = await responseCoordinates.json();
  localStorage.setItem('lat', userCoordinates.results[0].geometry.lat);
  localStorage.setItem('lon', userCoordinates.results[0].geometry.lng);
  const cityName = userCoordinates.results[0].formatted.split(',')[0];
  getWeather(userCoordinates.results[0].geometry.lat, userCoordinates.results[0].geometry.lng);
  createMap([userCoordinates.results[0].geometry.lng, userCoordinates.results[0].geometry.lat]);
  getLocation(cityName, userCoordinates.results[0].components.country);
}


export async function getIP() {
  const ip = await fetch('https://ipinfo.io/json?token=e7effd308f9bdb');
  const userIP = await ip.json();
  getCoord(userIP.city);
  getCoordinatesUser(userIP.loc);
}
getIP();
