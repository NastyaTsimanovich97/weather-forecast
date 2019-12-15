import { getCoord } from './getIP';

document.addEventListener('click', (e) => {
  const searchInput = document.querySelector('.search-city__input');
  if (e.target.classList.contains('search-city__button') && searchInput.value !== '') {
    getCoord(searchInput.value);
  }
});

document.addEventListener('keypress', (e) => {
  const searchInput = document.querySelector('.search-city__input');
  if (e.code === 'Enter' && searchInput.value !== '') {
    getCoord(searchInput.value);
  }
});
