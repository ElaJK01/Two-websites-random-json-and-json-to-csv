const express = require('express');
const helpers = require('../helpers');

const app = express();
const port = 3000;

app.get('/generate/json/:size', (req, res) => {
  const listSize = req.params.size;
  const dataJson = helpers.createJsonList(listSize);
  res.send(dataJson);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
