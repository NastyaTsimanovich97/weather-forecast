import convertDegrees, { convertDegreesKelvin } from './convertDegrees';

export default function convertInnerHTML(className, system) {
  const elementHTML = document.querySelector(className);
  const element = +elementHTML.innerHTML;
  elementHTML.innerHTML = '';
  if (system === 'F') {
    elementHTML.innerHTML = Math.round(convertDegrees(convertDegreesKelvin(element, 'C')));
  }
  if (system === 'C') {
    elementHTML.innerHTML = Math.round(convertDegrees(convertDegreesKelvin(element, 'F')));
  }
}
