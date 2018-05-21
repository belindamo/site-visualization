var request = require('request');
var cheerio = require('cheerio');
var $ = jQuery = require('jquery');
const urlParser = require('url');
var resolveUrl = require('resolve-url');


//I: url, max pages to return, baseUrl
//O: obj of page's links and page title
//FIX - max pages is not doing what thought orig
exports.getPageInfo = function(url, maxLinks, baseUrl) {
  return new Promise((resolve, reject)=> {
    request(url, function (error, response, html) {
      console.log('URL: ', urlParser.resolve('http://google.com', 'https://www.google.com/hi'));
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var title = $('title').text();
        var links = $('a');
        var linksArr = [];
        $(links).each(function(i, link){
          // console.log(url, $(link).attr('href'));
          if ($(link).attr('href') && linksArr.length < maxLinks) {
            var source = urlParser.resolve(url, $(link).attr('href'));
            linksArr.push(source);
          }
        });
        resolve({title: title, links: linksArr, url: url});
      } else {
        resolve({});
      }
    });
  });
};
