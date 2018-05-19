import React from "react";
import ReactDOM from "react-dom";
import _ from "underscore";
import { InteractiveForceGraph, ForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink } from 'react-vis-force';
//https://github.com/uber/react-vis-force/blob/master/docs/InteractiveForceGraph.md
//https://github.com/uber/react-vis-force/blob/master/docs/ForceGraph.md

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

class SiteVisualization extends React.Component {
	
	constructor(props) {
    super(props);
		// props.graph is the graph data
    // this.myRef = React.createRef();
  }
  
  componentDidUpdate() {
    console.log(this.props);
  }

  createForceGraph() {
    var nodes = _.map(this.props.graph.nodes, (node, key) => (
			<ForceGraphNode key={key} node={{ id: node.id, label: node.label }} 
				fill={colors[Math.floor((node.nLinksTo + node.nLinksFrom)/
					this.props.graph.greatestLinkCount * (colors.length - 1))]} />
		));
		var links = _.map(this.props.graph.links, (link, index) => (
			<ForceGraphArrowLink key={index} link={{source: link.source, target: link.target}} />
    ));
    return (
			<ForceGraph
        zoomOptions={{minScale: 50}}
				simulationOptions={{ animate: true, height: 300, width: 600 }}
				labelAttr="label"
				onSelectNode={this.props.handleNodeSelect}
				highlightDependencies
			>
				{nodes}
				{links}
			</ForceGraph>
		);
  }  

	render() {
    // console.log('site v props: ', this.props);
		
    // console.log(x);
		return this.createForceGraph();
	}
	
};

export default SiteVisualization;