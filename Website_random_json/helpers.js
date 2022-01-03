const dummyjson = require('dummy-json')

function createJson() {
  const template = `{
    "_type": "{{position}}",
    "_id": "{{int 10000 50000}}",
    "key": "{{int 10000 50000}}",
    "name": "{{city}}",
    "fullName": "{{city}}, {{country}}",
    "iata_airport_code": "{{random 'AAR' 'ADB' 'AEH'}}",
    "type": "{{locatin}}",
    "country": "{{country}}",
    "geo_position": "latitude:{{lat}}, longitude: {{long}}",
    "location_id": "{{int 10000 50000}}",
    "inEurope": "{{boolean}}",
    "countryCode": "{{countryCode}}",
    "coreCountry": "{{boolean}}",
    "distance": "{{random 'null' '100' '200' '300'}}"

  }`;
  const arr = []
  const result = dummyjson.parse(template);
  return result 
}

helpers = {
  createJson
}


module.exports = helpers;
