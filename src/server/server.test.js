const ayilen = require('aylien_textapi');
const dotenv = require('dotenv');
const supertest = require('supertest');
const app = require('./index');
const request = supertest(app);

async function fetchData() {
    const url = 'http://techcrunch.com/2015/07/16/microsoft-will-never-give-up-on-mobile';
    let textapi = new ayilen({
        application_id: process.env.APP_ID,
        application_key: process.env.APP_KEY
    });
    await textapi.classifyByTaxonomy({
        'url': url,
        'taxonomy': 'iab-qag'
    }, function (error, response) {
        if (error === null) {
            response['categories'].forEach(function (c) {
                console.log(c);
            });
        }
    });
}

it('post text to aylien', async () => {
    try {
        const data = await request.get('test');
        expect(data.status).toBe(200);

    } catch (error) {
        expect(error).toBe('error')
    }
});

