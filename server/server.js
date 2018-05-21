const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const helper = require('./lib/http-helpers');
const Crawler = require('./lib/crawler');
// helper.getPageInfo();

app.use(bodyParser.urlencoded({extended: true})); //for urlencoded data
app.use(bodyParser.json()); //for json data

app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8080, () => {
  console.log('App listening on port 8080...');
});

//I: query - base url, max pages
//O: object 
app.get('/sites', (req, res) => {
  console.log('GET query:', req.query);
  var baseUrl = req.query.baseUrl;
  var maxPages = parseInt(req.query.maxPages);

  var crawler = new Crawler(baseUrl, maxPages);
  crawler.run()
  .then((siteData) => { 
    // console.log('RESULTS: ', siteData);
    res.status(200).send(siteData);
  })
  .catch((err) => {
    res.status(404).end(err);
  });
});
  

app.post('/sites', (req, res) => {
  console.log(req.body);
});
