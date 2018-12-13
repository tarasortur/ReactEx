import React from "react";
import Button from "./button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../actions/taskActions";

class EditItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { update: false, updatedDesc: "" }
        this.updateTask = this.updateTask.bind(this);
        this.resetTask = this.resetTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.onDescChanged = this.onDescChanged.bind(this);
    }

    updateTask(task, e) {
        console.log(`Update Task ${task.desc}`);
        var newTask = {}
        newTask.name = task.name;
        newTask.desc = this.state.updatedDesc || "";
        this.props.actions.editTask(newTask);
        this.setState({ update: false });
    }
    resetTask(task) {
        console.log(`Reset Task ${task.desc}`);
        this.props.actions.resetTask(task);
        this.setState({ update: false });
    }
    editTask(task) {
        console.log(`Edit Task ${task.desc}`);
        this.setState({ update: true });

    }
    deleteTask(name) {
        console.log(`Delete Task ${name}`);
        this.props.actions.deleteTask(name);
    }

    onDescChanged(event) {
        this.setState({ updatedDesc: event.target.value });
    }

    render() {
        var self = this;
        var task = this.props.task;

        var editable = (<tr>
            <td><input type='text' className="form-control" defaultValue={task.name} ref='taskName' id="taskName" /></td>
            <td><input type='text' className="form-control" defaultValue={task.desc} ref='taskDesc' id="taskDesc" onChange={this.onDescChanged} /></td>
            <td><input type='text' className="form-control" value={task.status || '  DONE   '} ref='taskStatus' readOnly /></td>
            <td><Button color='success' passedFunction={(e) => self.updateTask(task, e)} name='Update' /></td>
            <td><Button color='warning' passedFunction={() => self.resetTask(task)} name='Reset' /></td>
        </tr>);

        var nonEditable = (<tr>
            <td>{task.name}</td>
            <td>{task.desc}</td>
            <td>{task.status || "DONE"}</td>
            <td><Button color='success' passedFunction={() => self.editTask(task)} name='Edit' /></td>
            <td><Button color='danger' passedFunction={() => self.deleteTask(task.name)} name='Delete' /></td>
        </tr>

        );
        return (this.state.update ? editable : nonEditable);
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(taskActions, dispatch) }
}
export default connect(mapDispatchToProps)(EditItem);
