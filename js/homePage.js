import React from 'react';
import CreateTask from './createTask';
import TaskList from './listOfTask';
import { Link, Router } from "@reach/router";
import Description from "./taskDescript";
import axios from 'axios';
import Back from './Back';

export default class EventHandle extends React.Component {
  constructor() {
    super();
    this.state = {
        tasks: []
    }
  };
  
    componentDidMount() {
        axios.get(`../../data/taskList.json`)
            .then(res => {
                const task = res.data;
                const tasks= task["list"];
                this.setState({ tasks });
            })
    }

  render() {
 var data= this.state.tasks;
 var len;
 //if(data.indexOf(name)){len=data.length();}
    return <div className="todoList container" >
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul class="nav navbar-nav">
            <Link to="/"><button className="btn btn-info">Back</button></Link>{"   "}
            <Link to="create"> <button className="btn btn-success"> Create Task</button> </Link>
            <Link to="list"><button className="btn btn-primary">List of Taks</button></Link>
          </ul>
          <div className='navbar-header'><h1 style={{color: 'white'}}>#iRemindYou</h1></div>
        </div>
      </nav>

      <Router >
        {/* <NotFound default /> */}
        <CreateTask path="create" data={data}>  
          </CreateTask>
        <TaskList path="list" data={data} >
          <Description path=":taskId" data={data}/>
        </TaskList>
      </Router>
    </div>
  }
}


const NotFound = () => (
  <div>Opps!!created</div>
);

