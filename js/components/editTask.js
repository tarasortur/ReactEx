import React from "react";
import Button from "./button";

export default class EditItem extends React.Component {

    constructor(props) {
        super(props);
        this.updateTask = this.updateTask.bind(this);
        this.resetTask = this.resetTask.bind(this);
    }
    
    updateTask(task,self) {
        var newTask = {};
        debugger;
        // newTask.name = e.target.parentNode.children.taskName.value;
        // newTask.desc = e.target.parentNode.children.taskDesc.value;
        //  this.props.actions.editTask(newTask);
    }
     resetTask(task) {
        // self.refs.taskDesc.value = task.desc;
        // this.props.actions.resetTask(task);
    }

    render() {
        var self = this;
        var task= this.props.task;
        return (<div className="well">
                    <input type='text' defaultValue={task.name} ref='taskName' id="taskName" />
                    <input type='text' defaultValue={task.desc} ref='taskDesc' id="taskDesc" />
                    <input type='text' value={task.status || '  DONE   '} ref='taskStatus' readOnly={true} />
                    <Button color='success' passedFunction={()=>self.updateTask(task,self)} name='Update'/>
                    <Button color='warning' passedFunction={()=>self.resetTask(task)} name='Reset'/>
                </div>);
    }
}


        // this.state = { update: false }
        // // this.tableContent = this.tableContent.bind(this);
        // this.updateTask = this.updateTask.bind(this);
        // this.editTask = this.editTask.bind(this);
        // this.resetTask = this.resetTask.bind(this);
        // this.deleteTask = this.deleteTask.bind(this);
        // var tasks = this.props.allTasks;
        // this.deleteRow = this.deleteRow.bind(this);
    // deleteTask(name, e) {
    //     this.props.actions.deleteTask(name);
    //     this.deleteRow(e);
    // }
    // deleteRow(e) {
    //     e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    // }
    // updateTask(task, self, e) {
    //     this.setState({ update: false });
    //     var newTask = {};
    //     newTask.name = e.target.parentNode.children.taskName.value;
    //     newTask.desc = e.target.parentNode.children.taskDesc.value;
    //     newTask.status = self.refs.taskStatus.value;
    //     this.props.actions.editTask(newTask);
    // }
    // resetTask(task, self) {
    //     this.setState({ update: false })
    //     self.refs.taskDesc.value = task.desc;
    //     this.props.actions.resetTask(task);
    // }
    // editTask(task, e) {
    //     this.setState({ update: true })
    // }
