import convertInnerHTML from './convertInnerHTML';

const buttonCel = document.querySelector('.button-celsius');
const buttonFar = document.querySelector('.button-fahrenheit');

buttonCel.addEventListener('click', () => {
  if (localStorage.getItem('degreesSystem') === 'F') {
    buttonFar.classList.remove('active-button');
    buttonCel.classList.add('active-button');
    localStorage.setItem('degreesSystem', 'C');
    convertInnerHTML('.temp__weather-now', 'C');
    convertInnerHTML('.weather-feels_temperature', 'C');
    convertInnerHTML('.temperature__next-day-1', 'C');
    convertInnerHTML('.temperature__next-day-2', 'C');
    convertInnerHTML('.temperature__next-day-3', 'C');
  }
});
