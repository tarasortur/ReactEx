import "../css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "./createTask";
import Store from "./store/appStore";
import { Provider } from "react-redux";

const store = Store();

ReactDOM.render(<Provider store={store}>
    <HomeComponent />
</Provider>, document.querySelector('#root'));
