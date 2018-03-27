import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import App from "./components/app.jsx";

$(document).ready(() => {
	ReactDOM.render(<App />, document.getElementById('app'));
});

