import * as L from "leaflet";


const colorMap: { [key: string]: string } = {
  '0': 'green',
  '1': 'yellow',
  '2': 'orange',
  '3': 'red',
  '4': 'purple',
}


export const markerList: L.LatLngTuple[] = [
  [40.5830903707402, -95.7669103810802],
  [40.5853775148397, -95.7646231585152],
  [40.5891637133853, -95.7608363833091],
  [40.5903990625458, -95.7554343887054],
  [40.5937249190194, -95.7521087498636],
  [40.5974507553308, -95.7483826481695],
  [40.6015091761901, -95.7479166671147],
  [40.6053489389506, -95.7511822171799],
  [40.6092394008873, -95.7520833336768],
  [40.6131994647908, -95.7548660573383],
  [40.6145833386612, -95.7600123761379],
  [40.6176055931417, -95.7634386177491],
  [40.6213075566123, -95.7671406821444],
  [40.6254237682041, -95.7687499999252],
  [40.6290955812117, -95.7707621643061],
  [40.6331689778948, -95.7729166664873],
  [40.6373301744483, -95.7729166664873],
  [40.641931994015, -95.7729166664873],
  [40.6460424684197, -95.775208683561],
  [40.6493276697545, -95.7784935898698],
  [40.6530316975996, -95.7821977881484],
  [40.656615824731, -95.7857824666037],
  [40.6602699618758, -95.7894366185105],
  [40.6635653478999, -95.7927319543544],
  [40.6645835667265, -95.7981521458991],
  [40.6645836232667, -95.8035989907914],
  [40.664583420675, -95.8090856310449],
  [40.6674781607182, -95.813311423299],
  [40.6687501476052, -95.8186690515462],
  [40.6687501531755, -95.8227146144279],
  [40.6687500161187, -95.8267574823597],
  [40.6723402615484, -95.8306735557927],
  [40.6730195470289, -95.8355195397078],
  [40.6767069702084, -95.8392069438284],
  [40.6803836447295, -95.8428833238422],
  [40.6840278206643, -95.8465276334014]
];


export const markerDict = [
  { latitude: 40.5830903707402, longitude: -95.7669103810802, xs_rch: 1.0 },
  { latitude: 40.5853775148397, longitude: -95.7646231585152, xs_rch: 1.0 },
  { latitude: 40.5891637133853, longitude: -95.7608363833091, xs_rch: 1.0 },
  { latitude: 40.5903990625458, longitude: -95.7554343887054, xs_rch: 1.0 },
  { latitude: 40.5937249190194, longitude: -95.7521087498636, xs_rch: 1.0 },
  { latitude: 40.5974507553308, longitude: -95.7483826481695, xs_rch: 1.0 },
  { latitude: 40.6015091761901, longitude: -95.7479166671147, xs_rch: 1.0 },
  { latitude: 40.6053489389506, longitude: -95.7511822171799, xs_rch: 1.0 },
  { latitude: 40.6092394008873, longitude: -95.7520833336768, xs_rch: 1.0 },
  { latitude: 40.6131994647908, longitude: -95.7548660573383, xs_rch: 2.0 },
  { latitude: 40.6145833386612, longitude: -95.7600123761379, xs_rch: 2.0 },
  { latitude: 40.6176055931417, longitude: -95.7634386177491, xs_rch: 2.0 },
  { latitude: 40.6213075566123, longitude: -95.7671406821444, xs_rch: 2.0 },
  { latitude: 40.6254237682041, longitude: -95.7687499999252, xs_rch: 2.0 },
  { latitude: 40.6290955812117, longitude: -95.7707621643061, xs_rch: 2.0 },
  { latitude: 40.6331689778948, longitude: -95.7729166664873, xs_rch: 2.0 },
  { latitude: 40.6373301744483, longitude: -95.7729166664873, xs_rch: 3.0 },
  { latitude: 40.641931994015, longitude: -95.7729166664873, xs_rch: 3.0 },
  { latitude: 40.6460424684197, longitude: -95.775208683561, xs_rch: 3.0 },
  { latitude: 40.6493276697545, longitude: -95.7784935898698, xs_rch: 3.0 },
  { latitude: 40.6530316975996, longitude: -95.7821977881484, xs_rch: 3.0 },
  { latitude: 40.656615824731, longitude: -95.7857824666037, xs_rch: 3.0 },
  { latitude: 40.6602699618758, longitude: -95.7894366185105, xs_rch: 3.0 },
  { latitude: 40.6635653478999, longitude: -95.7927319543544, xs_rch: 3.0 },
  { latitude: 40.6645835667265, longitude: -95.7981521458991, xs_rch: 4.0 },
  { latitude: 40.6645836232667, longitude: -95.8035989907914, xs_rch: 4.0 },
  { latitude: 40.664583420675, longitude: -95.8090856310449, xs_rch: 4.0 },
  { latitude: 40.6674781607182, longitude: -95.813311423299, xs_rch: 4.0 },
  { latitude: 40.6687501476052, longitude: -95.8186690515462, xs_rch: 4.0 },
  { latitude: 40.6687501531755, longitude: -95.8227146144279, xs_rch: 4.0 },
  { latitude: 40.6687500161187, longitude: -95.8267574823597, xs_rch: 4.0 },
  { latitude: 40.6723402615484, longitude: -95.8306735557927, xs_rch: 4.0 },
  { latitude: 40.6730195470289, longitude: -95.8355195397078, xs_rch: 0.0 },
  { latitude: 40.6767069702084, longitude: -95.8392069438284, xs_rch: 0.0 },
  { latitude: 40.6803836447295, longitude: -95.8428833238422, xs_rch: 0.0 },
  { latitude: 40.6840278206643, longitude: -95.8465276334014, xs_rch: 0.0 }
].map((item) => {
  return {
    geoData: new L.LatLng(item['latitude'], item['longitude']),
    color: colorMap[String(item['xs_rch'])]
  };
});


