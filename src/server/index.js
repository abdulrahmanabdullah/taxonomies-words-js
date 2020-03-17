const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Use Router.
app.use('/', require('./api/route'));

// app.get('/test', async (req, res) => res.json({ msg: 'pass' }))
module.exports = app;

