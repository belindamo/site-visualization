var $ = require('jquery');
var getPageInfo = (url) => {
  $.get(url)
    .done((data) => {
      console.log(data);
    })
    .fail(() => {
      console.log('Error');
    });
};

export default getPageInfo;