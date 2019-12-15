import { getCoord } from './getIP';
import findLocalStorage from './localStorage';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// eslint-disable-next-line no-undef
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.addEventListener('result', (e) => {
  const searchInput = document.querySelector('.search-city__input');
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');
  searchInput.value = transcript;
  if (e.results[0].isFinal) {
    getCoord(transcript);
  }
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('search-city__icon')) {
    recognition.lang = findLocalStorage('weatherLang', 'en');
    recognition.start();
  }
});
