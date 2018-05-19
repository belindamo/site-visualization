var node1 = {
  id: "www.example.com",
  label: "Home",
  size: 3,
  nLinksTo: 2, //links to the curr page
  nLinksFrom: 2 //links on the html curr page
};
var node2 = {
  id: "www.example.com/about",
  label: "About",
  size: 3,
  nLinksTo: 1,
  nLinksFrom: 2
};
var node3 = {
  id: "www.example.com/about/hello.html",
  label: "Hello there!",
  size: 3,
  nLinksTo: 1,
  nLinksFrom: 1
};
var node4 = {
  id: "www.example.com/contact",
  label: "Contact Us",
  size: 3,
  nLinksTo: 1,
  nLinksFrom: 0
};
var link1 = {
  id: "1",
  source: node1.id,
  target: node2.id
};
var link2 = {
  id: "2",
  source: node2.id,
  target: node1.id
};
var link3 = {
  id: "3",
  source: node2.id,
  target: node3.id
};
var link4 = {
  id: "4",
  source: node3.id,
  target: node1.id
};
var link5 = {
  id: "5",
  source: node1.id,
  target: node4.id
};


const exampleGraphData = {
  "nodes": [ node1, node2, node3, node4 ],
  "edges": [link1, link2, link3, link4, link5]
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