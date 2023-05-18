const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello-azhari', (req, res) => {
  res.send('Hello Azhari v1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
