import React from "react";
import PropTypes from 'prop-types';
import EditItem from "../components/editTask";

export default class List extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        var self = this;
        return (<table className="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Task Name</th>
                        <th scope="col">Task Description</th>
                        <th scope="col">Status</th>
                        <th scope="col" colSpan="2"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.allTasks.map(function (task, index) {
                        return ( <EditItem key={task.name + '_' + index} task={task}/>)
                    })}
                </tbody>
            </table>
        );
    }
}