var node1 = {
  id: "www.example.com",
  label: "Home",
  nLinksTo: 2, //links to the curr page
  nLinksFrom: 2 //links on the html curr page
};
var node2 = {
  id: "www.example.com/about",
  label: "About",
  nLinksTo: 1,
  nLinksFrom: 2
};
var node3 = {
  id: "www.example.com/about/hello.html",
  label: "Hello there!",
  nLinksTo: 1,
  nLinksFrom: 1
};
var node4 = {
  id: "www.example.com/contact",
  label: "Contact Us",
  nLinksTo: 1,
  nLinksFrom: 0
};
var link1 = {
  source: node1.id,
  target: node2.id
};
var link2 = {
  source: node2.id,
  target: node1.id
};
var link3 = {
  source: node2.id,
  target: node3.id
};
var link4 = {
  source: node3.id,
  target: node1.id
};
var link5 = {
  source: node1.id,
  target: node4.id
};


const exampleGraphData = {
  nodes: {
    "www.example.com": node1, 
    "www.example.com/about": node2, 
    "www.example.com/about/hello.html": node3, 
    "www.example.com/contact": node4
  },
  links: [link1, link2, link3, link4, link5],
  maxNodes: 200,
  greatestLinkCount: 4
};
// const exampleTreeData = [
//   {
//     name: 'https://developer.mozilla.org/en-US/docs/Web',
//     attributes: {
//       title: 'Web technology for developers | MDN'
//     },
//     children: [
//       {
//         name: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
//         attributes: {
//           title: "CSS | MDN"
//         },
//       },
//       {
//         name: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
//         attributes: {
//           title: "HTML | MDN"
//         },
//       },    ],
//   },
// ];

export default exampleGraphData;