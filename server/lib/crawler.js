const helper = require('./http-helpers');

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
    const from = this.nodes[info.url];
    for (let i = 0; i < info.links.length; i += 1) {
      const to = this.nodes[info.links[i]];
      if (to) {
        this.links.push(new Link(info.url, info.links[i]));
        from.sourceCt += 1;
        to.targetCt += 1;
        if (from.sourceCt + from.targetCt > this.greatestLinkCount) {
          this.greatestLinkCount = from.sourceCt + from.targetCt;
        }
        if (to.sourceCt + to.targetCt > this.greatestLinkCount) {
          this.greatestLinkCount = to.sourceCt + to.targetCt;
        }
      }
    }
  }

  addNode(info) {
    if (info) { // if is valid
      this.nodes[info.url] = new Node(info.url, info.title);
      this.addLinks(info);

      // add links to queue
      this.queue = this.queue.concat(info.links);
      this.count += 1;
      if (this.count > this.maxPages) return Promise.resolve();

      // dequeue next node and addNode
      const nextUrl = this.queue.shift();
      return helper.getPageInfo(nextUrl, maxPageGet, this.baseUrl)
        .then(nodeInfo => this.addNode(nodeInfo));
    }
    const nextUrl = this.queue.shift();
    return helper.getPageInfo(nextUrl, maxPageGet, this.baseUrl)
      .then(nodeInfo => this.addNode(nodeInfo));
  }

  run() {
    return helper.getPageInfo(this.baseUrl, this.maxPages - this.count, this.baseUrl)
      .then(baseInfo => ( // check if base url is valid
        new Promise((resolve, reject) => {
          if (baseInfo.url) resolve(baseInfo);
          else reject(new Error('Base url is not valid'));
        })
      ))
      .then(baseInfo => this.addNode(baseInfo))
      .then(() => ( // use links info
        new Promise((resolve) => {
          const siteData = {
            nodes: this.nodes,
            links: this.links,
            maxNodes: this.maxPages,
            greatestLinkCount: this.greatestLinkCount,
          };
          resolve(siteData);
        })
      ));
  }
}

module.exports = Crawler;
