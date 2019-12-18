import getLinkToImage from './getImage';

const changeBackground = document.querySelector('.button-refresh');

changeBackground.addEventListener('click', () => {
  const start = Date.now();
  const timer = setInterval(() => {
    const timePassed = Date.now() - start;
    changeBackground.style.transform = `rotate(${timePassed / 2}deg)`;
    if (timePassed > 1075) clearInterval(timer);
  }, 10);


  const city = document.querySelector('.location-city').innerHTML;
  const weather = document.querySelector('.weather-description_parametr').innerHTML;
  getLinkToImage(city, weather);
});
