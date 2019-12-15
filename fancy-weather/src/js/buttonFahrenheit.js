import convertInnerHTML from './convertInnerHTML';

const buttonFar = document.querySelector('.button-fahrenheit');

buttonFar.addEventListener('click', () => {
  if (localStorage.getItem('degreesSystem') === 'C') {
    localStorage.setItem('degreesSystem', 'F');
    convertInnerHTML('.temp__weather-now', 'F');
    convertInnerHTML('.weather-feels_temperature', 'F');
    convertInnerHTML('.temperature__next-day-1', 'F');
    convertInnerHTML('.temperature__next-day-2', 'F');
    convertInnerHTML('.temperature__next-day-3', 'F');
  }
});
