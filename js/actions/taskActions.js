import * as CONSTANTS from "../constants/CONSTANTS";

export function addTask(task){
return { type : CONSTANTS.ADD_TASK ,task }
}

export function deleteTask(taskName){
    return {type : CONSTANTS.DELETE_TASK, taskName}
}

export function editTask( task ) {
    return {type : CONSTANTS.EDIT_TASK, payload:task}
}