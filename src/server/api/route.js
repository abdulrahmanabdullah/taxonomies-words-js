const express = require('express');
const router = express.Router();
const mockApi = require('../mockAPI')
const ayilen = require('aylien_textapi');
const dotenv = require('dotenv');

// Grab app_id and key from .env file.
dotenv.config();

// Send index file.
router.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    console.log('Abdulrahman is a good and strong developer');
    res.sendFile(path.resolve('src/client/views/index.html'))
})

let textapi = new ayilen({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
});

router.get('/:inputText', (req, res) => {
    const value = req.params.inputText;
    textapi.classifyByTaxonomy({
        'text': value,
        'taxonomy': 'iptc-subjectcode'
    }, function (error, response) {
        if (error === null) {
            const { categories } = response;
            return res.json(categories);
        } else {
            console.log(error);
            return res.status(404).json({ message: 'wrong word, please try again.' })
        }
    });
})

//Test route with jest.
router.get('/test', (req, res) => res.json({ msg: 'im test route' }));


module.exports = router;