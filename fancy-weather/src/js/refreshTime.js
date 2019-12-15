import { getWeather, getTimezone } from './getIP';

setTimeout(() => setInterval(() => {
  const lat = localStorage.getItem('lat');
  const lon = localStorage.getItem('lon');
  getTimezone(+lat, +lon);
}, 1000), 1000);


setInterval(() => {
  const lat = localStorage.getItem('lat');
  const lon = localStorage.getItem('lon');
  getWeather(+lat, +lon);
}, 60000);
