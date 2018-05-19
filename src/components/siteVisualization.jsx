import React from "react";
import ReactDOM from "react-dom";
import myGraph from "./../data/sigmaExampleData.js";
import myGraph2 from "./../data/sigmaExampleData2.js";
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

class SiteVisualization extends React.Component {
	
	constructor(props) {
    super(props);
    console.log('hello');
		// props.graph is the graph data
    // this.myRef = React.createRef();
    this.state = {
      num : 0
    };
  }

  componentDidMount() {
  }
  
  componentDidUpdate() {
    console.log('updating');
    if (this.state.num === 0) {
      this.setState({
        num: 1
      });
    }
  }

  createForceGraph() {
  }  

	render() {
    var graph = this.state.num === 0 ? myGraph : myGraph2;
    console.log('num is ', this.state.num);
    console.log('graph is ', graph);
		return (
      <Sigma 
      ref={node => this.graph = node}
      graph={graph} 
      settings={{drawEdges: true, clone: false}}
      >
        <RelativeSize initialSize={15}/>
        <RandomizeNodePositions/>
      </Sigma>    
    );
	}
	
};

export default SiteVisualization;