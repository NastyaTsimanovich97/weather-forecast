function translateDescription(weather) {
  let result;
  switch (weather) {
    case ('overcast clouds'):
      result = 'пахмурна';
      break;
    case ('clear sky'):
      result = 'яснае неба';
      break;
    case ('few clouds'):
      result = 'мала аблокаў';
      break;
    case ('scattered clouds'):
      result = 'рассеяныя аблокі';
      break;
    case ('broken clouds'):
      result = 'воблачна';
      break;
    case ('rain'):
      result = 'дождж';
      break;
    case ('snow'):
      result = 'снег';
      break;
    case ('light snow'):
      result = 'невялікі снег';
      break;
    case ('light rain'):
      result = 'невялікі дождж';
      break;
    default:
      result = weather;
      break;
  }
  return result;
}

module.exports = translateDescription;