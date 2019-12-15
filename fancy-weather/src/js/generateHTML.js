import findLocalStorage from './localStorage';

const wrapper = document.querySelector('.wrapper');
const background = document.querySelector('.background');

export function createHtmlElement(tagName, className, parent) {
  const element = document.createElement(tagName);
  element.className = className;
  parent.append(element);
  return element;
}

export function createBackground(url) {
  background.style.backgroundImage = `url(${url})`;
}

const container = createHtmlElement('header', 'container', wrapper);
const containerButton = createHtmlElement('div', 'container-button', container);

const buttonRefresh = createHtmlElement('button', 'button-refresh', containerButton);
const imgRefresh = createHtmlElement('img', 'img-refresh', buttonRefresh);
imgRefresh.setAttribute('src', '../fancy-weather/src/img/reload1.svg');

const buttonLanguages = createHtmlElement('select', 'button-languages', containerButton);
const optionEn = createHtmlElement('option', 'button-languages__option', buttonLanguages);
optionEn.setAttribute('value', 'en');
optionEn.innerHTML = 'En';
const optionRu = createHtmlElement('option', 'button-languages__option', buttonLanguages);
optionRu.innerHTML = 'Ru';
optionRu.setAttribute('value', 'ru');
const optionBe = createHtmlElement('option', 'button-languages__option', buttonLanguages);
optionBe.innerHTML = 'Be';
optionBe.setAttribute('value', 'be');

if (findLocalStorage('weatherLang', 'en') === 'ru') {
  optionRu.setAttribute('selected', 'selected');
}
if (findLocalStorage('weatherLang', 'en') === 'en') {
  optionEn.setAttribute('selected', 'selected');
}
if (findLocalStorage('weatherLang', 'en') === 'be') {
  optionBe.setAttribute('selected', 'selected');
}

const buttonFahrenheit = createHtmlElement('button', 'button-fahrenheit', containerButton);
const imgFahrenheit = createHtmlElement('img', 'img-fahrenheit', buttonFahrenheit);
imgFahrenheit.setAttribute('src', '../fancy-weather/src/img/fahrenheit.svg');

const buttonCelsius = createHtmlElement('button', 'button-celsius', containerButton);
const imgCelsius = createHtmlElement('img', 'img-celsius', buttonCelsius);
imgCelsius.setAttribute('src', '../fancy-weather/src/img/celsius.svg');

const searchContainer = createHtmlElement('div', 'search-city__container', container);

export function createSearchHTML() {
  searchContainer.innerHTML = '';
  const searchInput = createHtmlElement('input', 'search-city__input', searchContainer);
  searchInput.setAttribute('type', 'search');
  searchInput.setAttribute('name', 'search-input');
  searchInput.setAttribute('id', 'search-input');
  if (findLocalStorage('weatherLang', 'en') === 'ru') {
    searchInput.setAttribute('placeholder', 'Поиск по городу');
  }
  if (findLocalStorage('weatherLang', 'en') === 'en') {
    searchInput.setAttribute('placeholder', 'Search city');
  }
  if (findLocalStorage('weatherLang', 'en') === 'be') {
    searchInput.setAttribute('placeholder', 'Пошук горада');
  }

  const searchIconContainer = createHtmlElement('div', 'search-city__icon-container', searchContainer);
  const searchIcon = createHtmlElement('img', 'search-city__icon', searchIconContainer);
  searchIcon.setAttribute('src', '../fancy-weather/src/img/microphone.svg');

  const searchButton = createHtmlElement('button', 'search-city__button', searchContainer);
  if (findLocalStorage('weatherLang', 'en') === 'ru') {
    searchButton.innerHTML = 'Поиск';
  }
  if (findLocalStorage('weatherLang', 'en') === 'en') {
    searchButton.innerHTML = 'Search';
  }
  if (findLocalStorage('weatherLang', 'en') === 'be') {
    searchButton.innerHTML = 'Пошук';
  }
}
createSearchHTML();

const divLocation = createHtmlElement('div', 'container-location', wrapper);


export function getLocation(city, country) {
  divLocation.innerHTML = '';
  const locCity = createHtmlElement('p', 'location-city', divLocation);
  locCity.innerHTML = `${city}`;
  const locCountry = createHtmlElement('p', 'location-country', divLocation);
  locCountry.innerHTML = `,${country}`;
}

const divDay = createHtmlElement('div', 'container-day', wrapper);
const day = createHtmlElement('p', 'day', divDay);

function createTimeHTML(localTime, lang) {
  const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  const dayWeek = localTime.toLocaleString(lang, options);
  day.innerHTML = '';
  day.innerHTML = `${dayWeek}`;
}

export function getUserTime(timezone) {
  const date = new Date().getTime();
  const localTime = new Date(date + (timezone - 10800) * 1000);
  createTimeHTML(localTime, localStorage.getItem('weatherLang'));
}
