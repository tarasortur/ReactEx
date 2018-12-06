import React from "react";

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.updateTask = this.updateTask.bind(this);
    }
    
    updateTask(){
        alert(`updating task`);
    }

    render() {
        return (<div>
            <div className="form-group">
                <label htmlFor="taskName">Task</label>
                <input type="text" className="form-control" ref="taskName" id="taskName" placeholder="Task Name" />
            </div>
            <div className="form-group">
                <label htmlFor="taskDesc">Task Desc</label>
                <input type="text" className="form-control" ref="taskDesc" id="taskName" placeholder="Task Description" />
            </div>
            <button className="btn btn-success" onClick={this.updateTask}>Update Task</button>
            <hr />
        </div>)
    }
}
