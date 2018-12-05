import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./actions/taskActions";
import List from "./listOfTasks";

class createTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tasks: { name: "", desc: "" } }
        this.createTodoRow = this.createTodoRow.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        var newTask = this.state.tasks;
        newTask.name = this.refs.taskName.value;
        newTask.desc = this.refs.taskDesc.value;
        this.setState({ tasks: newTask });
        console.log("NewTask added as  ", JSON.stringify(this.state.tasks));
        this.refs.taskName.value = "";
        this.refs.taskDesc.value = "";

        this.props.actions.addTask(this.state.tasks);
    }
    createTodoRow(tasks, index) {
        return (<div className="well" key={index}>{tasks.name}</div>)
    }

    render() {
        var allTasks= this.props.tasks || {};
        return (
            <div>
                <hr/>
                <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" className="form-control" ref="taskName" id="taskName" placeholder="Task Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDesc">Task Desc</label>
                    <input type="text" className="form-control" ref="taskDesc" id="taskName" placeholder="Task Description" />
                </div>
                <button className="btn btn-primary" onClick={this.addTask}>Add Task</button>
                <hr />
                <div>
                    <p>List of Tasks</p>
                    {/* {this.props.tasks.map(this.createTodoRow)} */}
                </div>
                <hr/>
                <List allTasks= {allTasks}/>

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

