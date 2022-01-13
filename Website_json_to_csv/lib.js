const axios = require('axios');
const { Parser } = require('json2csv');

async function getData(size) {
  try {
    const response = await axios.get(`http://localhost:3000/generate/json/${size}`);
    return response.data;
  } catch (error) {
    console.error(`Error message: ${error}`);
  }
}

async function dataToCsv(myData, fields) {
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(myData.data);
  return csv;
}


const lib = {
  getData,
  dataToCsv,
};

module.exports = lib;
