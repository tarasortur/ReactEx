import React from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../actions/taskActions";

class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);
        this.handleTimeChange=this.handleTimeChange.bind(this);
    }
    handleTimeChange(moment) {
        var newTask = this.props.tasks;
        
        var x= moment._d.toString();
        //console.log(x);
        newTask.status = x;
        console.log(newTask);
        // this.props.addTask(newTask);
    }
    render() {
        var CurrentDate = Datetime.moment();
        var yesterday = Datetime.moment().subtract(1, 'day');
        var validDate = function (current) {
            return current.isAfter(yesterday);
        };
        var currTime = Datetime.moment().subtract(1, 'ms');
        var validTime = {
            hours: { min: CurrentDate._d.getHours() },
            minutes: { min: (CurrentDate._d.getMinutes()+10) },
            seconds: { min: CurrentDate._d.getSeconds() }
        };

        return (<Datetime dateFormat="YYYY-MM-DD"
            timeFormat={true}
            closeOnSelect={true}
            defaultValue={CurrentDate}
            onChange={this.handleTimeChange}
            isValidDate={validDate}
            timeConstraints={validTime} />
        );
    }
}
function mapDispatchToProps(dispatch) {
    return { addTask : bindActionCreators(addTask, dispatch) }
}

export default connect(null ,mapDispatchToProps)(DateTimePicker);
