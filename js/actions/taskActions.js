import * as CONSTANTS from "../constants/CONSTANTS";

export function addTask(task){
return { type : CONSTANTS.ADD_TASK ,task }
}

export function deleteTask(taskId){
    return {type : CONSTANTS.DELETE_TASK, itaskId}
}