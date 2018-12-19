import * as CONSTANTS from "../constants/CONSTANTS";

export function addTask(task) {
    return { type: CONSTANTS.ADD_TASK, task }
}

export function deleteTask(taskName) {
    return { type: CONSTANTS.DELETE_TASK, taskName }
}

export function editTask(newTask) {
    return { type: CONSTANTS.EDIT_TASK, payload: newTask }
}

export function resetTask(task) {
    return { type: CONSTANTS.RESET_TASK, payload: task }
}

export function addTaskStatus(status){
    return { type : CONSTANTS.ADD_TASK_STATUS , payload : status}
}