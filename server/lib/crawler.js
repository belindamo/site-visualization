const helper = require('./http-helpers');
const url = require('url');

class Node {
  constructor(id, label) {
    this.id = id;
    this.label = label;
    this.nLinksTo = 0;
    this.nLinksFrom = 0;
  }
}

class Crawler {
  constructor(baseUrl, maxPages) {
    this.baseUrl = baseUrl;
    this.maxPages = maxPages;
    this.greatestLinkCount = 1;
    this.nodes = {};
    this.links = [];
  }

  // FIX - currently only adding child nodes in relation to base url
  addNodes(nodesInfo) {
    for (var nodeInfo of nodesInfo) { //nodeInfo has properties links, url, title
      if (JSON.stringify(nodeInfo) !== '{}' && this.nodes[nodeInfo['url']] === undefined) {
        console.log('nodeInfo: ', nodeInfo['url'], nodeInfo['title']);
        var node = new Node(nodeInfo['url'], nodeInfo['title']);
        node.nLinksTo = 1;
        this.nodes[this.baseUrl].nLinksFrom++;//relation to base
        
        var link = {source: this.baseUrl, target: nodeInfo['url']}; //link from baseUrl to childUrl
        this.links.push(link);
        
        for (var url of nodeInfo['links']) {
          if (this.nodes[url] !== undefined) {
            //add new link, add 1 to currNode's nLinksFrom, add 1 to this.nodes[url]'s nLinksTo
            this.links.push({
              source: nodeInfo['url'],
              target: url
            });
            node.nLinksFrom++;
            this.nodes[url].nLinksTo++;
          }
        }
        this.nodes[nodeInfo['url']] = node;
      }
    }
  }

  //I: links array
  //O: none, only adds to instance
  nextLevel(links) {
    return Promise.all(links.map((link) => {
      return helper.getPageInfo(link, 10, this.baseUrl);
    }));
  }
  
  run() { //MAKE INTO PROMISE
    console.log('running');
    
    return helper.getPageInfo(this.baseUrl, 10, this.baseUrl) //TESTING
      .then((baseInfo) => { //check if base url is valid
        // console.log('FIRST THEN BLOCK: baseInfo = ', baseInfo);
        this.nodes[this.baseUrl] = new Node(this.baseUrl, baseInfo.title); //add base node
        return new Promise((resolve, reject) => {
          if (JSON.stringify(baseInfo) === '{}') {
            reject('Base url is not valid');
          } else {
            resolve(baseInfo);
          }
        });
      })
      .then(baseInfo => this.nextLevel(baseInfo.links))
      .then((nodesInfo) => { // use links info
        // console.log(nodesInfo);
        this.addNodes(nodesInfo);
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