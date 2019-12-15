import getLinkToImage from './getImage';

const changeBackground = document.querySelector('.button-refresh');

changeBackground.addEventListener('click', () => {
  const city = document.querySelector('.location-city').innerHTML;
  const weather = document.querySelector('.weather-description_parametr').innerHTML;
  getLinkToImage(city, weather);
});
