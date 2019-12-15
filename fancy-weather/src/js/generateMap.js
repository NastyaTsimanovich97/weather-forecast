import { wrapper } from './generateWeatherNow';
import { createHtmlElement } from './generateHTML';
import { coordArrayRu, coordArrayEn, coordArrayBe } from './arrayWeather/arrayDescription';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const mapContainer = createHtmlElement('div', 'map-container', wrapper);
const mapCoords = createHtmlElement('div', 'map-coords', wrapper);

export function createMap(coords) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibmFzdHlhdHNpbWFub3ZpY2giLCJhIjoiY2szc3J2cDJ5MDd1bzNkbzE4Y2JxOW4zdSJ9.bpshHlZ7d9UZH4SHNy7L9w';
  const map = new mapboxgl.Map({
    container: mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coords,
    zoom: 12,
  });

  map.addControl(new mapboxgl.NavigationControl());
  map.on('load', () => {
    map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', (error, image) => {
      if (error) throw error;
      map.addImage('cat', image);
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: coords,
              },
            }],
          },
        },
        layout: {
          'icon-image': 'cat',
          'icon-size': 0.1,
        },
      });
    });
  });

  mapCoords.innerHTML = '';
  let coordArray;
  if (localStorage.getItem('weatherLang') === 'ru') {
    coordArray = coordArrayRu;
  }
  if (localStorage.getItem('weatherLang') === 'en') {
    coordArray = coordArrayEn;
  }
  if (localStorage.getItem('weatherLang') === 'be') {
    coordArray = coordArrayBe;
  }
  const latitudeCont = createHtmlElement('p', 'coordinates-lat', mapCoords);
  latitudeCont.innerHTML = `${coordArray[0]}:`;

  const latitudeHTML = createHtmlElement('p', 'value-lat', latitudeCont);
  latitudeHTML.innerHTML = `${coords[1]}`;

  const longitudeCont = createHtmlElement('p', 'coordinates-lon', mapCoords);
  longitudeCont.innerHTML = `${coordArray[1]}:`;

  const longitudeHTML = createHtmlElement('p', 'value-lon', longitudeCont);
  longitudeHTML.innerHTML = `${coords[0]}`;
}
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export function getCoordinatesUser(coordinates) {
  function success(pos) {
    const crd = pos.coords;
    createMap([crd.longitude.toFixed(4), crd.latitude.toFixed(4)]);
  }

  function error() {
    const lng = +coordinates.split(',')[1];
    const lat = +coordinates.split(',')[0];
    createMap([lng, lat]);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}
