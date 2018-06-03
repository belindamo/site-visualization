import React from "react";
import ReactDOM from "react-dom";
import {Card, Section, Row, Col, Input, Button, Icon} from 'react-materialize';

const Detail = (props) => (
  <Card key="card" className='left-align hoverable' textClassName='' title={props.node.label} 
    actions={[<a key="toPage" target="_blank" href={props.node.id}>Go to page</a>]}>
    <p key="url"> <span>Url: </span><span>{props.node.id}</span></p>
    <p key="linkFrom"> <span>Links going to other pages: </span><span>{props.node.sourceCt.toString()}</span></p>
    <p key="linkTo"> <span>Links coming from other pages: </span><span>{props.node.targetCt.toString()}</span></p>  	
  </Card>
);


export default Detail;