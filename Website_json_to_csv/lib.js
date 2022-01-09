const axios = require('axios');

async function getData(size) {
  try {
    const response = await axios.get(`http://localhost:3000/generate/json/${size}`);
    return response.data
  } catch (error) {
    console.error(`Error message: ${error}`);
  }
}

const lib = {
  getData,
}

module.exports = lib


