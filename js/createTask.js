import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./actions/taskActions";
import List from "./listOfTasks";

class createTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: { name: "", desc: "" } }
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        var newTask = this.state.tasks;
        newTask.name = this.refs.taskName.value;
        newTask.desc = this.refs.taskDesc.value;
        this.setState({ tasks: newTask });
        //console.log("NewTask added as  ", JSON.stringify(this.state.tasks));
        this.refs.taskName.value = "";
        this.refs.taskDesc.value = "";
        this.props.actions.addTask(this.state.tasks);
    }

    render() {
        var allTasks = this.props.tasks || {};
        return (
            <div>
                <hr />
                <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" className="form-control" ref="taskName" id="taskName" placeholder="Task Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDesc">Task Desc</label>
                    <input type="text" className="form-control" ref="taskDesc" id="taskName" placeholder="Task Description" />
                </div>
                <button className="btn btn-success" onClick={this.addTask}>Add Task</button>
                <hr />
                <div>
                    <h2>List of Tasks</h2>
                    <hr />
                    <List allTasks={allTasks} actions={this.props.actions} />
                </div>
            </div>);
    }
}

function mapStateToProps(state) {
    console.log(`The state store is ${JSON.stringify(state)}`);
    return { tasks: state.taskReducers };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(taskActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(createTask);

