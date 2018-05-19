import React from "react";
import ReactDOM from "react-dom";
import Search from "./search.jsx";
import SiteVisualization from "./siteVisualization.jsx";
import getPageInfo from "./../lib/getPageInfo.js";
import Detail from "./detail.jsx";
import {Row, Col} from 'react-materialize';
import exampleGraphData from "./../data/exampleGraphData.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			graph: exampleGraphData,
			selectedNode:  exampleGraphData.nodes["www.example.com"]
    };
    // console.log(exampleGraphData);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleNodeSelect = this.handleNodeSelect.bind(this);
  }
  
  componentDidMount() {
    // console.log(exampleGraphData);
    // this.setState({
    //   graph: exampleGraphData,
		// 	selectedNode: exampleGraphData.nodes["www.example.com"]
    // });
    this.handleSearch('http://www.neopets.com');


    // getPageInfo('https://slickdeals.net', (data) => {
    //   this.setState({
    //     graph: data,
    //     selectedNode: data['nodes']["https://slickdeals.net"]
    //   });
    // });
  }

	handleSearch(url, nPages) {
    console.log('handling search', url, nPages);
    // this.setState({
    //   graph: exampleGraphData,
		// 	selectedNode: exampleGraphData.nodes["www.example.com"]
    // })
		getPageInfo(url, (data) => {
      data = JSON.parse(data);  
      console.log(data);
      this.setState({
        graph: data,
        selectedNode: data.nodes[url]
      });
      // console.log(this.state.graph, this.state.selectedNode);
      // this.forceUpdate();
    });
  }

	handleNodeSelect(evt, node) {
		// console.log('Node selected: ', node);
		this.setState({selectedNode: this.state.graph.nodes[node.id]});
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
						<SiteVisualization graph={this.state.graph} handleNodeSelect={this.handleNodeSelect}/>
					</Col>
				</Row>
			</div>

		);
	}
}

export default App;


