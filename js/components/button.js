import React from "react";

export default function EditItem(props) {
    return (<button className={"btn btn-" + props.color} onClick={props.passedFunction}>{props.name}</button>)
}