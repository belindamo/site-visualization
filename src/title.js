import React from "react";
import ReactDOM from "react-dom";
// import './style.css'
import {Button, Icon} from 'react-materialize'

var Title = () => (
  <div>
    <Button waves='light'>
      <Icon left>saves</Icon>
    </Button>
    <div>this is a title!</div>
  </div>
);

export default Title;