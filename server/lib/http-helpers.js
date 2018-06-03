const request = require('request');
const cheerio = require('cheerio');
const urlParser = require('url');

// I: url, max pages to return
// O: obj of page's links and page title
// FIX - max pages is not doing what thought orig
exports.getPageInfo = function (url, maxLinks) {
  return new Promise((resolve) => {
    request(url, (error, response, html) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const title = $('title').text();
        const links = $('a');
        const linksArr = [];
        $(links).each((i, link) => {
          if ($(link).attr('href') && linksArr.length < maxLinks) {
            const source = urlParser.resolve(url, $(link).attr('href'));
            linksArr.push(source);
          }
        });
        resolve({ title, links: linksArr, url });
      } else {
        resolve(null);
      }
    });
  });
};
