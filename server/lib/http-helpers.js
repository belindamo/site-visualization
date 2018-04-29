var request = require('request');
var cheerio = require('cheerio');
var $ = jQuery = require('jquery');
const url = require('url');

exports.containsRoot = (pageUrl, baseUrl) => {
  const base = url.parse(baseUrl);
  const page = url.parse(pageUrl);
  return base.host === page.host;
}

//resolve
exports.getFormattedUrl = function(source, currUrl) {
  if (typeof source === 'string') {
    if (source[source.length - 1] === '/') {
      source = source.slice(0, source.length-1);
      if (source === '') return '';
    }
    if (source[0] === '/') {
      return currUrl + source;
    } else if (source[0] + source[1] === './') {
      return currUrl + source.slice(1);
    } else {
      return source;
    } 
  } else {
    return '';
  }
};

//I: url, max pages to return, baseUrl
//O: obj of page's links and page title
//FIX - max pages is not doing what thought orig
exports.getPageInfo = function(url, max, baseUrl) {
  return new Promise((resolve, reject)=> {
    request(url, function (error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        var title = $('title').text();
        var links = $('a');
        var linksArr = [];
        $(links).each(function(i, link){
          var source = exports.getFormattedUrl($(link).attr('href'), url);
          if (source !== '' && linksArr.length <= max && exports.containsRoot(source, baseUrl)) {
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
