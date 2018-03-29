import React from "react";
import ReactDOM from "react-dom";
import {Card, Section, Row, Col, Input, Button, Icon} from 'react-materialize';

class Detail extends React.Component {

	//props should contain node, which is current selected node
	constructor(props) {
		super(props);
		console.log(props.node);
	}

	render() {
		return (
			<Card className='left-align hoverable' textClassName='' title={this.props.node.label} actions={[<a href={this.props.node.id}>Go to page</a>]}>
				<p> <span>Url: </span><span>{this.props.node.id}</span></p>
				<p> <span>Links to other pages: </span><span>{this.props.node.nLinksFrom}</span></p>
				<p> <span>Links from other pages: </span><span>{this.props.node.nLinksTo}</span></p>  	
			</Card>
		);
	}
}

export default Detail;