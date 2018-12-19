import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../actions/taskActions";
import List from "./listOfTasks";
import Button from "./button";
import DateTimePicker from "./dateTimePicker";

class createTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: { name: "", desc: "" },
            isChecked: false
        };
        this.addTask = this.addTask.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.clearInputValues = this.clearInputValues.bind(this);
        //this.passTask = this.passTask.bind(this);
    }

    // passTask() {
    //     var newTask = this.state.tasks;
    //     newTask.name = this.refs.taskName.value;
    //     newTask.desc = this.refs.taskDesc.value;
    //     this.setState({ tasks: newTask });
    // }
    addTask() {
        var newTask = this.state.tasks;
        newTask.name = this.refs.taskName.value;
        newTask.desc = this.refs.taskDesc.value;
        this.setState({ tasks: newTask });
       // this.props.actions.addTask(this.state.tasks);
    }

    clearInputValues() {
        this.refs.taskName.value = "";
        this.refs.taskDesc.value = "";
        this.refs.dateTimePicker.value = "";
    }

    handleCheckbox(e) {
        console.log(`Clicked on ${e.target.checked}`);
        this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
        var self = this;
        var allTasks = this.props.tasks || {};
        var datePicker = this.state.isChecked ? <DateTimePicker /> : null;
        return (
            <div>
                <hr />
                <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" className="form-control" ref="taskName" id="taskName" placeholder="Task Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDesc">Task Desc</label>
                    <input type="text" className="form-control" ref="taskDesc" id="taskName" placeholder="Task Description"
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="reminder">Remind me</label>
                    <DateTimePicker tasks={this.state.tasks} ref="dateTimePicker" />
                </div>
                <Button color='success' passedFunction={()=>self.addTask()} name='Add Task' />

                <hr />
                <div>
                    <h2>List of Tasks</h2>
                    <hr />
                    <List allTasks={allTasks} />
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

