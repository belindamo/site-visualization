const helper = require('./http-helpers');
const url = require('url');

class Node {
  constructor(id, label) {
    this.id = id;
    this.label = label;
    this.size = 3;
    this.nLinksTo = 0;
    this.nLinksFrom = 0;
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
    // this.greatestLinkCount = 1;
    this.nodes = {};
    this.links = [];
    this.queue = [];
  }


  addNode(info) {
    if (info.url) { // if is valid
      console.log('info: ', info);
      this.nodes[info.url] = new Node(info.url, info.title);
      // console.log('queue: ', this.queue);
      // console.log('info links: ', info.links);
      
      //add links to queue
      this.queue = this.queue.concat(info.links);
      
      this.count++;
      console.log('count ', this.count);
      if (this.count >= this.maxPages) return Promise.resolve();
      
      // dequeue next node and addNode
      var nextUrl = this.queue.shift();
      console.log('nextUrl: ', nextUrl);
      return helper.getPageInfo(nextUrl, 2, this.baseUrl)
        .then((info) => { return this.addNode(info) });
      // return helper.getPageInfo()
    } else {
      console.log('Invalid url ', info.url, ', moving on to next in queue' );
      var nextUrl = this.queue.shift();
      console.log('nextUrl: ', nextUrl);
      return helper.getPageInfo(nextUrl, 2, this.baseUrl)
        .then((info) => { return this.addNode(info) });
    }
  }
  
  /*
   * @output: Promise
   *  
   * 
   */
  run() { //MAKE INTO PROMISE
    return helper.getPageInfo(this.baseUrl, 2, this.baseUrl)
    .then((baseInfo) => { //check if base url is valid
      this.nodes[this.baseUrl] = new Node(this.baseUrl, baseInfo.title); //add base node
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
        };
        resolve(siteData);
      })
    });

    // return helper.getPageInfo(this.baseUrl, 10, this.baseUrl) //TESTING
    //   .then((baseInfo) => { //check if base url is valid
    //     this.nodes[this.baseUrl] = new Node(this.baseUrl, baseInfo.title); //add base node
    //     return new Promise((resolve, reject) => {
    //       if (JSON.stringify(baseInfo) === '{}') {
    //         reject('Base url is not valid');
    //       } else {
    //         resolve(baseInfo);
    //       }
    //     });
    //   })
    //   .then(baseInfo => this.nextLevel(baseInfo.links))
    //   .then((nodesInfo) => { // use links info
    //     this.addNodes(nodesInfo);
    //     return new Promise((resolve, reject) => { //deal with linksInfo. 
    //       var siteData = {
    //         nodes: this.nodes, 
    //         links: this.links, 
    //         maxNodes: this.maxPages, 
    //         greatestLinkCount: this.greatestLinkCount
    //       };
    //       resolve(siteData);
    //     })
    //   });
  }

}

module.exports = Crawler;




  // // FIX - currently only adding child nodes in relation to base url
  // addNodes(nodesInfo) {
  //   for (var nodeInfo of nodesInfo) { //nodeInfo has properties links, url, title
  //     if (JSON.stringify(nodeInfo) !== '{}' && this.nodes[nodeInfo['url']] === undefined) {
  //       console.log('nodeInfo: ', nodeInfo['url'], nodeInfo['title']);
  //       var node = new Node(nodeInfo['url'], nodeInfo['title']);
  //       node.nLinksTo = 1;
  //       this.nodes[this.baseUrl].nLinksFrom++;//relation to base
        
  //       var link = new Link(this.baseUrl, nodeInfo['url']); //link from baseUrl to childUrl
  //       this.links.push(link);
        
  //       for (var url of nodeInfo['links']) {
  //         if (this.nodes[url] !== undefined) {
  //           //add new link, add 1 to currNode's nLinksFrom, add 1 to this.nodes[url]'s nLinksTo
  //           this.links.push({
  //             source: nodeInfo['url'],
  //             target: url
  //           });
  //           node.nLinksFrom++;
  //           this.nodes[url].nLinksTo++;
  //         }
  //       }
  //       this.nodes[nodeInfo['url']] = node;
  //     }
  //   }
  // }

  // //I: links array
  // //O: none, only adds to instance
  // nextLevel(links) {
  //   return Promise.all(links.map((link) => {
  //     return helper.getPageInfo(link, 10, this.baseUrl);
  //   }));
  // }