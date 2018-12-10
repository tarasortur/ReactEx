import React from "react";
import PropTypes from 'prop-types';
import EditTask from "./editTask";

export default class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = { update: false }
        this.tableContent = this.tableContent.bind(this);
        this.updateTask = this.updateTask.bind(this);
      //  this.editTask = this.editTask.bind(this);
        this.resetTask = this.resetTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        var tasks = this.props.allTasks;
        this.deleteRow = this.deleteRow.bind(this);
    }
    deleteTask(name, e) {
        this.props.actions.deleteTask(name);
        this.deleteRow(e);
    }
    deleteRow(e) {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    }

    updateTask(task, self) {
        this.setState({ update: !this.state.update });
        var newTask = {};
        newTask.name = this.refs.taskName.value;
        newTask.desc = this.refs.taskDesc.value;
        newTask.status = this.refs.taskStatus.value;
        this.props.actions.editTask(newTask);
    }

    resetTask(task, self) {
        this.setState({ update: false })
        self.refs.taskDesc.value = task.desc;
        this.props.actions.resetTask(task);
    }

    tableContent(task, index) {
        var self = this;
        var edit = (<tr key={index}>
            <td>{index}</td>
            <td><input type='text' value={task.name} ref='taskName' readOnly={true} /></td>
            <td><input type='text' defaultValue={task.desc} ref='taskDesc' /></td>
            <td><input type='text' value={task.status} ref='taskStatus' readOnly={true} /></td>
            <td><button className="btn btn-success" onClick={() => this.updateTask(task, self)}>Update Task</button></td>
            <td><button className="btn btn-warning" onClick={() => this.resetTask(task, self)} ref="resetButton">Reset</button></td>
        </tr>);

        var nonEdit = (<tr key={index}>
            <td>{index}</td>
            <td>{task.name}</td>
            <td>{task.desc}</td>
            <td>{task.status}</td>
            <td><button className="btn btn-warning" onClick={() => { this.setState({ update: true }); }}>Edit</button></td>
            <td><button className="btn btn-danger" id="deleteButton" ref="deleteButton" onClick={(e) => this.deleteTask(task.name, e)}>Delete</button></td>
        </tr>);

        if (this.state.update)
            return (edit);
        else return (nonEdit);
    }
    
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Task ID </th>
                        <th scope="col">Task Name</th>
                        <th scope="col">Task Description</th>
                        <th scope="col">Status</th>
                        <th scope="col" colSpan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {this.props.allTasks.map((task,index)=>{this.tableContent(task,index)})} */}
                    {this.props.allTasks.map(this.tableContent)}
                </tbody>
            </table>
        );
    }
}

List.propTypes = {
    actions: PropTypes.object,
}