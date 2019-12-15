import convertInnerHTML from './convertInnerHTML';

const buttonCel = document.querySelector('.button-celsius');

buttonCel.addEventListener('click', () => {
  if (localStorage.getItem('degreesSystem') === 'F') {
    localStorage.setItem('degreesSystem', 'C');
    convertInnerHTML('.temp__weather-now', 'C');
    convertInnerHTML('.weather-feels_temperature', 'C');
    convertInnerHTML('.temperature__next-day-1', 'C');
    convertInnerHTML('.temperature__next-day-2', 'C');
    convertInnerHTML('.temperature__next-day-3', 'C');
  }
});
