import React from "react";
import ReactDOM from "react-dom";
import Search from "./search.jsx";
import SiteTree from "./siteTree.jsx";
import getPageInfo from "./../lib/getPageInfo.js";
import Detail from "./detail.jsx";
// import exampleTreeData from "./../data/exampleTreeData.js"
import {Row, Col} from 'react-materialize';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(url, nPages) {
		console.log('handling search', url, nPages);
		getPageInfo("http://www.reddit.com");
	}

	render() {
		return (
			<div className="center container">
				<h4>Site Map Visualization</h4>
				<Search handleSearch={this.handleSearch} />
				<Row>
					<Col m={3} s={12}>
						<Detail />
					</Col>
					<Col m={9} s={12}>
						<SiteTree />
					</Col>
				</Row>
			</div>

		);
	}
}

export default App;


