const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

app.use(require('./controllers'));

app.listen(3001, () => console.log('Example app listening on port 3001!'));