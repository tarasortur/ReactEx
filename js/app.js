import "../css/bootstrap.css";
import "../styles/index.css";
import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "../js/components/createTask";
import Store from "./store/appStore";
import { Provider } from "react-redux";

const store = Store();
console.log("app storre is ", store);

ReactDOM.render(<Provider store={store}>
    <HomeComponent />
</Provider>, document.querySelector('#root'));
