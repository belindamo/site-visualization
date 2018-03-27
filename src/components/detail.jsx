import React from "react";
import ReactDOM from "react-dom";
import {Card, Section, Row, Col, Input, Button, Icon} from 'react-materialize';

var Detail = () => (
  <Card className='left-align hoverable' textClassName='' title='Home' actions={[<a href='#'>Go to page</a>]}>
		<p> <span>Url: </span><span>www.example.com</span></p>
  	<p> <span>Links to other pages: </span><span>5</span></p>
  	<p> <span>Links from other pages: </span><span>2</span></p>  	
  </Card>
);

export default Detail;