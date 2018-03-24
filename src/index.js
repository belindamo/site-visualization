import React from "react";
import ReactDOM from "react-dom";
import Title from "./title.js"
// import styles from "./style.css";
import $ from 'jquery'
import {Button, Icon} from 'react-materialize'

const Index = () => {
  return <div>
    <Title />
    <Button waves='light'>
      <Icon left>save</Icon>
    </Button>
  </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));

export default Index;