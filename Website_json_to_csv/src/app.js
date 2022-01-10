const express = require('express');

const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const lib = require('../lib');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', async (req, res) => {
  const { size } = req.body;
  const fields = ['_type', '_id', 'name', 'type', 'geo_position.latitude', 'geo_position.longitude'];
  const data = await lib.getData(size);
  const csv = await lib.dataToCsv(data, fields);
  return res.send(csv);
});

app.get('/customdata', (req, res) => {
  res.render('custom');
});

app.post('/customdata', async (req, res) => {
  const { size } = req.body;
  const { customData } = req.body;
  const makeList = (v) => [].concat(v).map((data) => data);
  const dataList = makeList(customData);
  const data = await lib.getData(size);
  const csv = await lib.dataToCsv(data, dataList);
  return res.send(csv);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
