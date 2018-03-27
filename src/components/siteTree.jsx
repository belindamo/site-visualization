import React from "react";
import ReactDOM from "react-dom";
import Tree from "react-d3-tree";
import exampleTreeData from "./../data/exampleTreeData.js";
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';
//https://github.com/uber/react-vis-force/blob/master/docs/InteractiveForceGraph.md
//https://github.com/uber/react-vis-force/blob/master/docs/ForceGraph.md

var SiteTree = (props) => (
	<InteractiveForceGraph
	  simulationOptions={{ height: 300, width: 600 }}
	  labelAttr="label"
	  onSelectNode={(node) => console.log(node)}
	  highlightDependencies
	>
	  <ForceGraphNode node={{ id: 'first-node', label: 'First node' }} fill="red" />
	  <ForceGraphNode node={{ id: 'second-node', label: 'Second node' }} fill="blue" />
	  <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
	</InteractiveForceGraph>
);

export default SiteTree;