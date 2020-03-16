var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()

app.use(cors());
app.use(express.static('dist'))
console.log(__dirname)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', require('./api/route'));

// app.get('/test', async (req, res) => res.json({ msg: 'pass' }))
// designates what port the app will listen to for incoming requests
const PORT = process.env.PORT || 3300;
app.listen(PORT, () =>
    console.log('Server running on port ', PORT)
)

// To test Jest.
// module.exports = app;

