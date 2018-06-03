const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const Crawler = require('./lib/crawler');

app.use(bodyParser.urlencoded({ extended: true })); // for urlencoded data
app.use(bodyParser.json()); // for json data

app.use(express.static(path.join(__dirname, '/../dist')));

// I: query - base url, max pages
// O: object
app.get('/sites', (req, res) => {
  const { baseUrl } = req.query;
  const maxPages = parseInt(req.query.maxPages, 10);

  const crawler = new Crawler(baseUrl, maxPages);
  crawler.run()
    .then((siteData) => {
      res.status(200).send(siteData);
    })
    .catch((err) => {
      res.status(404).end(err);
    });
});

app.listen(8080, () => {
  console.log('App listening on port 8080...');
});
