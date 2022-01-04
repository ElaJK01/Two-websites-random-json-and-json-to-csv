const dummyjson = require('dummy-json')

function createJsonList(n) {
  const template = `{
    "data": [
      {{#repeat ${n}}}
      {
    "_type": "{{random "Position"}}",
    "_id": "{{int 10000 50000}}",
    "key": "{{int 10000 50000}}",
    "name": "{{city}}",
    "fullName": "{{city}}, {{country}}",
    "iata_airport_code": "{{random null 'AAR' 'ADB' 'AEH'}}",
    "type": "{{random "location"}}",
    "country": "{{country}}",
    "geo_position": {
      "latitude": {{lat}}, 
      "longitude": {{long}}
  }, 
    "location_id": "{{int 10000 50000}}",
    "inEurope": "{{boolean}}",
    "countryCode": "{{countryCode}}",
    "coreCountry": "{{boolean}}",
    "distance": "{{random 'null' '100' '200' '300'}}"
    }
    {{/repeat}}
  ]
  }`;
  const result = dummyjson.parse(template);
  const obj = JSON.parse(result)
  
  return obj
}

helpers = {
  createJsonList
}

module.exports = helpers;
