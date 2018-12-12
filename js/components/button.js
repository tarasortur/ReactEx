import React from "react";

export default class EditItem extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (<button className={"btn btn-"+this.props.color} onClick={this.props.passedFunction}>{this.props.name}</button>)
    }

}