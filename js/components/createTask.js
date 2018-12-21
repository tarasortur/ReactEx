import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Moment from "moment";

import * as taskActions from "../actions/taskActions";
import List from "./listOfTasks";
import Button from "./button";
import DateTimePicker from "./dateTimePicker";


class createTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: { name: "", desc: "", time: "" , status:"" },
            isChecked: false
        };
        this.addTask = this.addTask.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleTimeChange(moment) {
        var newTaskStatus = this.state.tasks.time;
        var x = moment._d.toString();
        this.setState({ tasks:{ time : x } });
    }

    addTask() {
        var newTask = this.state.tasks;
        newTask.name = this.refs.taskName.value;
        newTask.desc = this.refs.taskDesc.value;
        newTask.time = this.state.tasks.time;

        this.setState({ tasks : newTask });
        this.props.actions.addTask(this.state.tasks);
        this.refs.taskName.value = "";
        this.refs.taskDesc.value = "";
        
    }

    handleCheckbox(e) {
        console.log(`Clicked on ${e.target.checked}`);
        this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
        var self = this;
        var allTasks = this.props.tasks || {};
        var currentDate = Moment();
        var yesterday = Moment().subtract(1, 'day');
        var validDate = function (current) {
            return current.isAfter(yesterday);
        };
        var validTime = {
            hours: { min: currentDate._d.getHours() },
            minutes: { min: (currentDate._d.getMinutes() + 10) },
            seconds: { min: currentDate._d.getSeconds() }
        };
        return (
            <div>
                <hr />
                <div className="form-group">
                    <label htmlFor="taskName">Task</label>
                    <input type="text" className="form-control" ref="taskName" id="taskName" placeholder="Task Name" required={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDesc">Task Desc</label>
                    <input type="text" className="form-control" ref="taskDesc" id="taskName" placeholder="Task Description" required={true} />
                </div>
                <div className="form-group">
                    <label htmlFor="reminder">Remind me</label>
                    <DateTimePicker handleChange={this.handleTimeChange}
                                    validDate={validDate}
                                    validTime={validTime}
                                    dateTimeDefValue={currentDate} />
                </div>
                <Button color='success' passedFunction={() => self.addTask()} name='Add Task' />

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
    return { tasks : state.taskList };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(taskActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(createTask);

