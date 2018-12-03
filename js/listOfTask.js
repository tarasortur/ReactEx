import React from 'react';
import { Link, Router } from "@reach/router";
import { fetchProducts } from "./TaskAction";
import axios from 'axios';
import Listdata from "./ListData";

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: 'all' };
        this.getContent = this.getContent.bind(this);
        this.buttonClick=this.buttonClick.bind(this);
    }

    getContent(status) {
        var self = this, z = [];
        var data = this.props.data;
        var nodeLi = [];
        switch (status) {
            case "all":
                data.map((x, i) => { nodeLi.push(<li><Link to={"/list/" + x.id} key={i} className="listsAll"> Task {x.name}</Link></li>) });
                break;
            case "Done":
                data.map((x, i) => { if (x.status == "Done") z.push(x) });
                z.map((x, i) => {
                    nodeLi.push(<li>
                        <Link to={"/list/" + x.id} key={i} className="listsDone"> Task {x.name}</Link></li>)
                });
                break; 
            case "Upcoming":
                data.map((x, i) => { if (x.status == "Upcoming") z.push(x) });
                z.map((x, i) => {
                    nodeLi.push(<li >
                        <Link to={"/list/" + x.id} key={i} className="listsUpcome"> Task {x.name}</Link></li>)
                });
                //  <Listdata status='Upcoming' data={data} />
                break;
        }
        return (<ul>{nodeLi}</ul>);
    }
    buttonClick(event){
        this.setState({ status: event.target.value });
    }

    render() {
        return <div className="taskList">
            <button onClick={this.buttonClick} value='all'>All</button>
            <button onClick={this.buttonClick} value="Upcoming">Upcoming</button>
            <button onClick={this.buttonClick} value="Done">Done</button>
            {this.getContent(this.state.status)}
            {this.props.children}
        </div>
    }
}



// const Listdata =(props)=>(
// props.data.map((x, i) => { if (x.status == props.status) z.push(x) }),
//    z.map((x,i)=> {nodeLi.push(<li className="">
// <Link to={"/list/" + x.id} key={i}> Task {x.name}</Link></li>)})

// );