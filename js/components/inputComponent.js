import React from "react";

export default class InputComponent extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        var task = this.props.task;
        return (this.props.isUpdate ? <div><input type='text' className="form-control" ref={(input) => { this.taskName = input; }} defaultValue={task.name} ref='taskName' id="taskName" />
            <input type='text' className="form-control" defaultValue={task.desc} ref='taskDesc' id="taskDesc" />
            <input type='text' className="form-control" value={task.status || '  DONE   '} ref='taskStatus' /> </div> : <div>{task.name}
                {task.desc}
                {task.status || '  DONE   '}</div>

        )
    }

}