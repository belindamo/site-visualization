var $ = require('jquery');
var getPageInfo = (url, maxPages, callback) => {
  $.ajax({
    url: "/sites",
    type: 'GET',
    data: {
      baseUrl: url,
      maxPages: maxPages
    },
    success: (data) => {
      data = JSON.parse(JSON.stringify(data));
      // console.log('GET SUCCESS: ', data);
      callback(data);
    },
    error: (err) => {
      console.log(err);
    }
  });
};

export default getPageInfo;