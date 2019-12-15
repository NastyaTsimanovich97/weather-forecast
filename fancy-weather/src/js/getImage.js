import { createBackground } from './generateHTML';

function getSeason(date) {
  const month = date.getMonth();
  let season;
  if (month === 11 || month < 2) {
    season = 'winter';
  }
  if (month >= 2 && month < 5) {
    season = 'spring';
  }
  if (month >= 5 && month < 8) {
    season = 'summer';
  }
  if (month >= 8 && month < 11) {
    season = 'autumn';
  }
  return season;
}

function getTime(date) {
  const hour = date.getHours();
  let time;
  if (hour > 0 && hour < 6) {
    time = 'nigth';
  }
  if (hour >= 6 && hour < 12) {
    time = 'morning';
  }
  if (hour >= 12 && hour < 19) {
    time = 'day';
  }
  if (hour >= 19 && hour < 23) {
    time = 'evening';
  }
  return time;
}

export default async function getLinkToImage(val, weatherVal) {
  const city = val.split(' ');
  const date = new Date();
  const urlImg = {
    main: 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature,',
    season: getSeason(date),
    time: getTime(date),
    weather: weatherVal,
    cityImg: city[city.length - 1],
    id: '&client_id=907c846499210c0f1e1e826746d6dd3abea3e00a12d93718493d1992e0e5c8f2',
  };
  try {
    const response = await fetch(`${urlImg.main}${urlImg.season}${urlImg.id}`);
    const img = await response.json();
    createBackground(img.urls.regular);
  } catch (err) {
    createBackground('../fancy-weather/src/img/background.jpg');
  }
}
