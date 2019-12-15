export default function findLocalStorage(parametr, defaultValue) {
  if (!localStorage.getItem(parametr)) {
    localStorage.setItem(parametr, defaultValue);
  }
  return localStorage.getItem(parametr);
}
