const express = require('express')
const helpers = require('../helpers');
const app = express()
const port = 3000


app.get('/generate/json/:size', (req, res) => {
  const list_size = req.params.size
  const dataJson = helpers.createJsonList(list_size)
  res.send(dataJson)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
