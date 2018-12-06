import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.tableContent = this.tableContent.bind(this);
        //  this.editTask =this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        var tasks = this.props.allTasks;
    }

    // editTask(name){

    // }

    deleteTask(name) {
        var tasks = this.props.allTasks;
        tasks.forEach(x => {
            if (x.name == name)
                delete (x.name);
        });

    }


tableContent(task, index) {
    return (<tr key={index}>
        <td >{index}</td>
        <td>{task.name}</td>
        <td>{task.desc}</td>
        <td>{task.desc}</td>
        {/* <td><button className="btn btn-warning" onClick={this.editTask(task.name)}>Edit</button></td> */}
        <td><button className="btn btn-danger" onClick={this.deleteTask(task.name)}>Delete</button></td>
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