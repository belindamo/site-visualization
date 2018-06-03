const $ = require('jquery');

const getPageInfo = (url, maxPages, callback) => {
  $.ajax({
    url: '/sites',
    type: 'GET',
    data: {
      baseUrl: url,
      maxPages,
    },
    success: (data) => {
      callback(data);
    },
    error: (err) => {
      console.log('Error: ', err);
    },
  });
};

export default getPageInfo;
