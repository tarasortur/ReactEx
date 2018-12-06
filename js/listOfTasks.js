import React from "react";
import PropTypes from 'prop-types';
import EditTask from "./editTask";

export default class List extends React.Component {

    constructor(props) {
        super(props);

        this.tableContent = this.tableContent.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        var tasks = this.props.allTasks;
        this.deleteRow = this.deleteRow.bind(this);
    }
    deleteTask(name, e) {
        alert("deleting task " + name);
        this.props.actions.deleteTask(name);
        this.deleteRow(e);
    }
    deleteRow(e) {
        e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
    }
    editTask(task, e) {
        e.target.parentNode.parentNode.replaceWith(<EditTask 
                   updateTask={this.props.actions.editTask(task)} 
                   taskToEdit={task}/>)
    }

    tableContent(task, index) {
        return (<tr key={index}>
            <td>{index}</td>
            <td>{task.name}</td>
            <td>{task.desc}</td>
            <td>{task.desc}</td>
            <td><button className="btn btn-warning" onClick={(e) => this.editTask(task, e)}>Edit</button></td>
            <td><button className="btn btn-danger" id="deleteButton" ref="deleteButton" onClick={(e) => this.deleteTask(task.name, e)}>Delete</button></td>
        </tr>);
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
                    {this.props.allTasks.map(this.tableContent)}
                </tbody>
            </table>

        );
    }

}

List.propTypes = {
    actions: PropTypes.object,
}