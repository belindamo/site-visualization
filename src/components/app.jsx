import React from "react";
import ReactDOM from "react-dom";
import Search from "./search.jsx";
import SiteTree from "./siteTree.jsx";
import getPageInfo from "./../lib/getPageInfo.js";
import Detail from "./detail.jsx";
// import exampleTreeData from "./../data/exampleTreeData.js"
import {Row, Col} from 'react-materialize';
import exampleGraphData from "./../data/exampleGraphData.js";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			graph: exampleGraphData,
			selectedNode: exampleGraphData.nodes[0]
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleNodeSelect = this.handleNodeSelect.bind(this);
	}

	handleSearch(url, nPages) {
		console.log('handling search', url, nPages);
		getPageInfo("http://www.reddit.com");
	}
	
	handleNodeSelect(evt, node) {
		console.log('Node selected: ', node);
		this.setState({selectedNode: node});
		
	}

	render() {
		return (
			<div className="center container">
				<h4>Site Map Visualization</h4>
				<Search handleSearch={this.handleSearch} />
				<Row>
					<Col m={3} s={12}>
						<Detail node={this.state.selectedNode}/>
					</Col>
					<Col m={9} s={12}>
						<SiteTree graph={this.state.graph} handleNodeSelect={this.handleNodeSelect}/>
					</Col>
				</Row>
			</div>

		);
	}
}

export default App;


