import React from 'react';
import { Link, Router } from "@reach/router";


export default class Listdata extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        var z = [], nodeli = [];
        this.props.data.map((x, i) => { if (x.status == this.props.status) z.push(x) });
        z.map((x, i) => {
            nodeLi.push(<li className="">
                <Link to={"/list/" + x.id} key={i}> Task {x.name}</Link></li>)
        })
        return { nodeli }
    }

}