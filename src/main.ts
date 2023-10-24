import * as L from 'leaflet';
import 'leaflet-easyprint';

import { markerList, markerDict } from './util';


const lat: number[] = [];
const long: number[] = [];
const features: L.Circle[] = [];

markerList.forEach((item) => {
  lat.push(item[0]);
  long.push(item[1]);
});

const latAvg = lat.reduce((acc, val) => acc + val, 0) / lat.length;
const longAvg = long.reduce((acc, val) => acc + val, 0) / long.length;
const map = L.map('map').setView([latAvg, longAvg], 13);



console.log(markerDict);

//markerList.forEach((item) => {
//  const circle = L.circle(item, {
//    color: '#f03',
//    fillColor: '#f03',
//    fillOpacity: 0.75,
//    radius: 25
//  }).addTo(map);
//  features.push(circle);
//});

markerDict.forEach((item) => {
  const circle = L.circle(item['geoData'], {
    color: item['color'],
    fillColor: item['color'],
    fillOpacity: 0.75,
    radius: 25
  }).addTo(map);
features.push(circle);
});

L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain_background/{z}/{x}/{y}{r}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const group: L.FeatureGroup = new L.FeatureGroup(features);
map.fitBounds(group.getBounds().pad(0.025));


(L as any).easyPrint({
  title: 'My awesome print button',
  position: 'topleft',
  sizeModes: ['Current'],
  exportOnly: true,
}).addTo(map);

