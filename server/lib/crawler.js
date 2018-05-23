const helper = require('./http-helpers');
const url = require('url');
var validUrl = require('valid-url');

const maxPageGet = 10;

class Node {
  constructor(id, label) {
    this.id = id;
    this.label = label;
    this.sourceCt = 0;
    this.targetCt = 0;
  }
}

class Link {
  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}

class Crawler {
  constructor(baseUrl, maxPages) {
    this.baseUrl = baseUrl;
    this.maxPages = maxPages;
    this.count = 0;
    this.greatestLinkCount = 0;
    this.nodes = {};
    this.links = [];
    this.queue = [];
  }

  addLinks(info) {
    // const source = info.url;
    // console.log('reached here: ', source, info.links);
    const from = this.nodes[info.url];
    for (var i = 0; i < info.links.length; i++) {
      const to = this.nodes[info.links[i]];
      // console.log(to);
      if (to) {
        this.links.push(new Link(info.url, info.links[i]));
        from.sourceCt++;
        to.targetCt++;
        if (from.sourceCt + from.targetCt > this.greatestLinkCount) {
          this.greatestLinkCount = from.sourceCt + from.targetCt;
        }
        // console.log('b/lregh');
        if (to.sourceCt + to.targetCt > this.greatestLinkCount) {
          this.greatestLinkCount = to.sourceCt + to.targetCt;
        }
      }
    }
  }

  addNode(info) {
    if (info) { // if is valid
      // console.log('info: ', info);
      this.nodes[info.url] = new Node(info.url, info.title);    
  
      // console.log('queue: ', this.queue);
      // console.log('info links: ', info.links);
      this.addLinks(info);

      //add links to queue
      this.queue = this.queue.concat(info.links);
      
      this.count++;
      // console.log('count ', this.count);
      if (this.count > this.maxPages) return Promise.resolve();
      
      // dequeue next node and addNode
      var nextUrl = this.queue.shift();
      // console.log('nextUrl: ', nextUrl);
      return helper.getPageInfo(nextUrl, maxPageGet, this.baseUrl)
        .then((info) => { return this.addNode(info) });
      // return helper.getPageInfo()
    } else {
      console.log('Invalid url ', info.url, ', moving on to next in queue' );
      var nextUrl = this.queue.shift();
      console.log('nextUrl: ', nextUrl);
      return helper.getPageInfo(nextUrl, maxPageGet, this.baseUrl)
        .then((info) => { return this.addNode(info) });
    }
  }
  
  /*
   * @output: Promise
   *  
   * 
   */
  run() { //MAKE INTO PROMISE
    return helper.getPageInfo(this.baseUrl, this.maxPages - this.count, this.baseUrl)
    .then((baseInfo) => { //check if base url is valid
      // this.nodes[this.baseUrl] = new Node(this.baseUrl, baseInfo.title); //add base node
      // this.addLinks(baseInfo);
      return new Promise((resolve, reject) => {
        baseInfo.url ? resolve(baseInfo) : reject('Base url is not valid');
      });
    })
    .then((baseInfo) => {
      return this.addNode(baseInfo);
    })
    .then((info) => { // use links info
      // console.log(info)
      return new Promise((resolve, reject) => { //deal with linksInfo. 
        var siteData = {
          nodes: this.nodes, 
          links: this.links, 
          maxNodes: this.maxPages, 
          greatestLinkCount: this.greatestLinkCount
        };
        resolve(siteData);
      })
    });

  }

}

module.exports = Crawler;
