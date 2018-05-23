// var node1 = {
//   id: "www.example.com",
//   label: "Home",
//   sourceCt: 2, //links to the curr page
//   targetCt: 2 //links on the html curr page
// };
// var node2 = {
//   id: "www.example.com/about",
//   label: "About",
//   sourceCt: 1,
//   targetCt: 2
// };
// var node3 = {
//   id: "www.example.com/about/hello.html",
//   label: "Hello there!",
//   sourceCt: 1,
//   targetCt: 1
// };
// var node4 = {
//   id: "www.example.com/contact",
//   label: "Contact Us",
//   sourceCt: 1,
//   targetCt: 0
// };
// var link1 = {
//   source: node1.id,
//   target: node2.id
// };
// var link2 = {
//   source: node2.id,
//   target: node1.id
// };
// var link3 = {
//   source: node2.id,
//   target: node3.id
// };
// var link4 = {
//   source: node3.id,
//   target: node1.id
// };
// var link5 = {
//   source: node1.id,
//   target: node4.id
// };


// const exampleGraphData = {
//   nodes: {
//     "www.example.com": node1, 
//     "www.example.com/about": node2, 
//     "www.example.com/about/hello.html": node3, 
//     "www.example.com/contact": node4
//   },
//   links: [link1, link2, link3, link4, link5],
//   maxNodes: 200,
//   greatestLinkCount: 4
// };
// // const exampleTreeData = [
// //   {
// //     name: 'https://developer.mozilla.org/en-US/docs/Web',
// //     attributes: {
// //       title: 'Web technology for developers | MDN'
// //     },
// //     children: [
// //       {
// //         name: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
// //         attributes: {
// //           title: "CSS | MDN"
// //         },
// //       },
// //       {
// //         name: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
// //         attributes: {
// //           title: "HTML | MDN"
// //         },
// //       },    ],
// //   },
// // ];

var exampleGraphData = {
    "nodes": {
        "http://slickdeals.net": {
            "id": "http://slickdeals.net",
            "label": "Slickdeals: The Best Deals, Coupons, Promo Codes & Discounts",
            "sourceCt": 0,
            "targetCt": 0
        },
        "http://slickdeals.net/coupons/?src=catnav_coupons": {
            "id": "http://slickdeals.net/coupons/?src=catnav_coupons",
            "label": "Coupons, Promo Codes & Discounts | Slickdeals",
            "sourceCt": 1,
            "targetCt": 19
        },
        "http://slickdeals.net/deals/grocery/?src=catnav_grocery": {
            "id": "http://slickdeals.net/deals/grocery/?src=catnav_grocery",
            "label": "166 Grocery Deals, Sales, Coupons & Discounts from $1 to $250",
            "sourceCt": 2,
            "targetCt": 18
        },
        "http://slickdeals.net/deals/games/?src=catnav_games": {
            "id": "http://slickdeals.net/deals/games/?src=catnav_games",
            "label": "320 Video Games Deals, Sales & Coupons from $1 to $1000",
            "sourceCt": 3,
            "targetCt": 17
        },
        "http://slickdeals.net/deals/tv/?src=catnav_tv": {
            "id": "http://slickdeals.net/deals/tv/?src=catnav_tv",
            "label": "101 TV Deals, Sales, Coupons & Discounts from $5 to $2000+",
            "sourceCt": 4,
            "targetCt": 16
        },
        "http://slickdeals.net/deals/computers/?src=catnav_computers": {
            "id": "http://slickdeals.net/deals/computers/?src=catnav_computers",
            "label": "591 Computers Deals, Sales & Coupons from $1 to $2000",
            "sourceCt": 5,
            "targetCt": 15
        },
        "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards": {
            "id": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "label": "The Best Credit Card Offers & Deals of 2018 | Slickdeals",
            "sourceCt": 6,
            "targetCt": 14
        },
        "http://slickdeals.net/deals/home/?src=catnav_home": {
            "id": "http://slickdeals.net/deals/home/?src=catnav_home",
            "label": "825 Home & Home Improvement Deals & Sales from $1 to $2000+",
            "sourceCt": 7,
            "targetCt": 13
        },
        "http://slickdeals.net/deals/apparel/?src=catnav_apparel": {
            "id": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "label": "341 Clothing & Accessories Deals & Sales from $1 to $2000+",
            "sourceCt": 8,
            "targetCt": 12
        },
        "http://slickdeals.net/deals/tech/?src=catnav_tech": {
            "id": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "label": "802 Tech & Electronics Deals & Sales from $1 to $2000+",
            "sourceCt": 9,
            "targetCt": 11
        },
        "http://slickdeals.net/deals/photo/?src=catnav_photo": {
            "id": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "label": "111 Cameras Deals, Sales & Coupons from $1 to $2000+",
            "sourceCt": 10,
            "targetCt": 10
        },
        "http://slickdeals.net/deals/auto/?src=catnav_auto": {
            "id": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "label": "89 Autos Deals, Sales, Coupons & Discounts from $1 to $500",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/deals/beauty/?src=catnav_beauty": {
            "id": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "label": "199 Health & Beauty Deals, Sales & Coupons from $1 to $500",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/deals/children/?src=catnav_children": {
            "id": "http://slickdeals.net/deals/children/?src=catnav_children",
            "label": "224 Children Deals, Sales & Coupons from $1 to $1000",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment": {
            "id": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "label": "267 Entertainment Deals, Sales & Coupons from $1 to $1000",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/deals/travel/?src=catnav_travel": {
            "id": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "label": "143 Travel & Vacations Deals & Sales from $1 to $1000",
            "sourceCt": 10,
            "targetCt": 0
        },
        "https://slickdeals.net/?src=announcementBar&cno=1453615": {
            "id": "https://slickdeals.net/?src=announcementBar&cno=1453615",
            "label": "Best Buy DWA Rebate - Formstack",
            "sourceCt": 0,
            "targetCt": 0
        },
        "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky": {
            "id": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "label": "  \n      Chase Ink Business Preferred Card\n      -\n  Slickdeals.net\n",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/coupons/hulu/": {
            "id": "http://slickdeals.net/coupons/hulu/",
            "label": "2 Hulu Coupons, Promo Codes, Deals & Sales ~ May 2018",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky": {
            "id": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "label": "  \n      New Hulu Customers: Hulu Base Plan w/ Limited Commercials + HBO\n      -\n  Slickdeals.net\n",
            "sourceCt": 10,
            "targetCt": 0
        },
        "http://slickdeals.net/coupons/directv-now/": {
            "id": "http://slickdeals.net/coupons/directv-now/",
            "label": "3 DIRECTV NOW Coupons, Promo Codes, Deals & Sales ~ May 2018",
            "sourceCt": 10,
            "targetCt": 0
        }
    },
    "links": [
        {
            "source": "http://slickdeals.net/coupons/?src=catnav_coupons",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/grocery/?src=catnav_grocery",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/grocery/?src=catnav_grocery",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/games/?src=catnav_games",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/games/?src=catnav_games",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/games/?src=catnav_games",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/tv/?src=catnav_tv",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/tv/?src=catnav_tv",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/tv/?src=catnav_tv",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/tv/?src=catnav_tv",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/computers/?src=catnav_computers",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/computers/?src=catnav_computers",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/computers/?src=catnav_computers",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/computers/?src=catnav_computers",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/computers/?src=catnav_computers",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/home/?src=catnav_home",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/apparel/?src=catnav_apparel",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/tech/?src=catnav_tech",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/photo/?src=catnav_photo",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/auto/?src=catnav_auto",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/beauty/?src=catnav_beauty",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/children/?src=catnav_children",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/entertainment/?src=catnav_entertainment",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/deals/travel/?src=catnav_travel",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/f/9205591-chase-ink-business-preferred-card-80k-points-w-5k-spent-in-1st-3-mos?src=sticky",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/coupons/hulu/",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/f/11464615-new-hulu-customers-hulu-base-plan-w-limited-commercials-hbo-13-mo-more?src=sticky",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/coupons/?src=catnav_coupons"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/grocery/?src=catnav_grocery"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/games/?src=catnav_games"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/tv/?src=catnav_tv"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/computers/?src=catnav_computers"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/credit-card-offers/?src=catnav_creditcards"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/home/?src=catnav_home"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/apparel/?src=catnav_apparel"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/tech/?src=catnav_tech"
        },
        {
            "source": "http://slickdeals.net/coupons/directv-now/",
            "target": "http://slickdeals.net/deals/photo/?src=catnav_photo"
        }
    ],
    "maxNodes": 20,
    "greatestLinkCount": 20
};
export default exampleGraphData;
