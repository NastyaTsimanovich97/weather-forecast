import { getCoord } from './getIP';
import { createSearchHTML } from './generateHTML';

const buttonLanguage = document.querySelector('.button-languages');

function translate() {
  const city = document.querySelector('.location-city').innerHTML;
  getCoord(city);
  createSearchHTML();
}

buttonLanguage.addEventListener('click', () => {
  const previous = localStorage.getItem('weatherLang');
  localStorage.setItem('weatherLang', buttonLanguage.value);
  if (previous !== localStorage.getItem('weatherLang')) {
    translate();
  }
});
