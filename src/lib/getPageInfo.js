var $ = require('jquery');
var getPageInfo = (url, callback) => {
  $.ajax({
    url: "/sites",
    type: 'GET',
    data: {
      baseUrl: url,
      maxPages: 3
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