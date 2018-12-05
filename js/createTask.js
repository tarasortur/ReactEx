import React from 'react';
import { Link, Router } from "@reach/router";
export default class createTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        tasks: {}
    }
    this.addTask = this.addTask.bind(this);
    }

    addTask(){
    
        var newTask = this.state.tasks;
        newTask.name =this.refs.taskName.value;
        newTask.desc = this.refs.taskDesc.value;
        this.setState({ tasks : newTask});

console.log(" new task is " , JSON.stringify(this.state.tasks));
    }

//     buttonClick = () => {
//         var browserHistory = Router.browserHistory; 
//   this.setState({tasks : { ...this.state.tasks , name: document.getElementById('name').value } })
//   this.setState({tasks : { ...this.state.tasks , desc: document.getElementById('desc').value } })
//   console.log("state is " , this.state.tasks, browserHistory);
  
// }

    render() {
          
        return (
            <form className="form-horizontal" >
                <div className="form-group">
                    <label className="control-label col-sm-2">Task Name:</label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control" ref="taskName" id="name" placeholder="Task Name"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-sm-2" >Task Description:</label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control" ref="taskDesc" id="desc" placeholder="Task Description"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label><input type="checkbox"></input>Yes!!! Remember me</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default" onClick={this.addTask}>Create</button>
                    </div>
                </div>
            </form>)
    }
}
