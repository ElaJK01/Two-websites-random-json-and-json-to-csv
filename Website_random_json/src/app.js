const express = require('express')
const helpers = require('../helpers');
const app = express()
const port = 3000


app.get('/generate/json/:size', (req, res) => {
  const list_size = req.params.size
  const myJson = helpers.createJson()
  console.log(typeof(myJson))
  res.send(myJson)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
