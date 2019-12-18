import convertInnerHTML from './convertInnerHTML';

const buttonFar = document.querySelector('.button-fahrenheit');
const buttonCel = document.querySelector('.button-celsius');

buttonFar.addEventListener('click', () => {
  if (localStorage.getItem('degreesSystem') === 'C') {
    buttonCel.classList.remove('active-button');
    buttonFar.classList.add('active-button');
    localStorage.setItem('degreesSystem', 'F');
    convertInnerHTML('.temp__weather-now', 'F');
    convertInnerHTML('.weather-feels_temperature', 'F');
    convertInnerHTML('.temperature__next-day-1', 'F');
    convertInnerHTML('.temperature__next-day-2', 'F');
    convertInnerHTML('.temperature__next-day-3', 'F');
  }
});
