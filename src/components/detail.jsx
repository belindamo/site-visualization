import React from "react";
import ReactDOM from "react-dom";
import {Card, Section, Row, Col, Input, Button, Icon} from 'react-materialize';

class Detail extends React.Component {

	//props should contain node, which is current selected node
	constructor(props) {
		super(props);
		// console.log(props.node);
	}

	render() {
		return (
      <Card key="card" className='left-align hoverable' textClassName='' title={this.props.node.label} 
        actions={[<a key="toPage" target="_blank" href={this.props.node.id}>Go to page</a>]}>
				<p key="url"> <span>Url: </span><span>{this.props.node.id}</span></p>
				<p key="linkFrom"> <span>Links to other pages: </span><span>{this.props.node.nLinksFrom.toString()}</span></p>
				<p key="linkTo"> <span>Links from other pages: </span><span>{this.props.node.nLinksTo.toString()}</span></p>  	
			</Card>
		);
	}
}

export default Detail;