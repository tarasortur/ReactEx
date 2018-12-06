import * as CONSTANTS from "../constants/CONSTANTS";

export function addTask(task){
return { type : CONSTANTS.ADD_TASK ,task }
}

export function deleteTask(taskName){
    return {type : CONSTANTS.DELETE_TASK, itaskId}
}

export function editTask(taskName){
    return {type : CONSTANTS.EDIT_TASK, itaskId}
}