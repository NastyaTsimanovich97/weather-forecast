import findLocalStorage from './localStorage';

export default function convertDegrees(temperature) {
  const system = findLocalStorage('degreesSystem', 'C');
  let convert;
  const kelvin = 273.15;
  if (system === 'F') {
    convert = (((temperature - kelvin) * (9 / 5)) + 32);
  }
  if (system === 'C') {
    convert = temperature - kelvin;
  }
  return convert;
}

export function convertDegreesKelvin(temperature, system) {
  let convert;
  const kelvin = 273.15;
  if (system === 'F') {
    convert = (((temperature - 32) * (5 / 9)) + kelvin);
  }
  if (system === 'C') {
    convert = temperature + kelvin;
  }
  return convert;
}
