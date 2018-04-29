import React from "react";
import ReactDOM from "react-dom";
import _ from "underscore";
import Tree from "react-d3-tree";
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink } from 'react-vis-force';
//https://github.com/uber/react-vis-force/blob/master/docs/InteractiveForceGraph.md
//https://github.com/uber/react-vis-force/blob/master/docs/ForceGraph.md

class SiteVisualization extends React.Component {
	
	constructor(props) {
    super(props);
    // console.log(props);
		// props.graph is the graph data
  }
  
  // componentDidUpdate() {
  //   console.log(this.props);
  // }

	render() {
    // console.log('site v props: ', this.props);
		var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var nodes = _.map(this.props.graph.nodes, (node, key) => (
			<ForceGraphNode key={key} node={{ id: node.id, label: node.label }} 
				fill={colors[Math.floor((node.nLinksTo + node.nLinksFrom)/
					this.props.graph.greatestLinkCount * (colors.length - 1))]} />
		));
		var links = _.map(this.props.graph.links, (link, index) => (
			<ForceGraphArrowLink key={index} targetRadius={2} link={{source: link.source, target: link.target}} />
    ));
    var x = (
			<InteractiveForceGraph
        zoomOptions={{minScale: 50}}
				simulationOptions={{ animate: true, height: 300, width: 600 }}
				labelAttr="label"
				onSelectNode={this.props.handleNodeSelect}
				highlightDependencies
			>
				{nodes}
				{links}
			</InteractiveForceGraph>
		);
    // console.log(x);
		return x;
	}
	
};

export default SiteVisualization;