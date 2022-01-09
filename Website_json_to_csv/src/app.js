
const express = require('express')
const app = express()
const port = 5000
const lib = require('../lib')

app.get('/', async (req, res) => {
  const data = await lib.getData(2)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
