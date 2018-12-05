import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.tableContent = this.tableContent.bind(this);

    }

    tableContent(task, index) {
        return (<tr key={index}>
            <td >{index}</td>
            <td>{task.name}</td>
            <td>{task.desc}</td>
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
                    </tr>
                </thead>
                <tbody>
                    {this.props.allTasks.map(this.tableContent)}
                </tbody>
            </table>

        );
    }

} 