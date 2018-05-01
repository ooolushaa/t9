const express = require('express')
const app = express()

app.use(require('./controllers'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))