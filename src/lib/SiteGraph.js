var helpers = require('./helpers');

class Webcrawler {
  constructor(baseUrl, max) {
    this.baseUrl = baseUrl;
    this.nodes = [];
    this.links = [];
    this.maxNodes = max;
    this.greatestLinkCount = 0;
    this.crawl();
  }

  crawl() {

  }

}

class Node {
  constructor(id) {
    this.id = id;
    this.label = '';
    this.nLinksTo = 0;
    this.nLinksFrom = 0;
  }
}

export default Webcrawler;