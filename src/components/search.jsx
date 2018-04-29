import React from "react";
import ReactDOM from "react-dom";
import _ from "underscore";
import {Section, Row, Col, Input, Button, Icon} from 'react-materialize';


class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state={text:'https://slickdeals.net', max: 200};

		this.handleMaxChange = this.handleMaxChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
	}

	handleMaxChange(e) {
		this.setState({max: _.escape(e.target.value)});
	}

	handleTextChange(e) {
		this.setState({text: _.escape(e.target.value)});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleSearch(this.state.text, this.state.max);
	}

	handleEnter(e) {
		if (e.key === "Enter") {
			this.handleSubmit(e);
		}
	}

	render() {
		return (
			<Row className="valign-wrapper">
				<Col m={1}> </Col>
				<Col m={5}>
					<Input m={12} type="text" label="Base Url" onKeyUp={this.handleEnter} onChange={this.handleTextChange}><Icon large>web</Icon></Input>
				</Col>
				<Col m={3}>
					<Input type="number" label="Max Pages" onKeyUp={this.handleEnter} onChange={this.handleMaxChange}><Icon large>library_books</Icon></Input>					
				</Col>
				<Col m={1}>
					<Button onClick={this.handleSubmit} waves='light'>Go<Icon right>send</Icon></Button>
				</Col>
				<Col m={2}> </Col>
			</Row>
		);
	}

} 

export default Search;