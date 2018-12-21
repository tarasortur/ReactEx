import { combineReducers } from 'redux';
import taskReducers from "./taskReducer";
import statusReducer from "./statusReducer";

const appReducers = combineReducers({
    taskList : taskReducers  
    // task : statusReducer
});

export default appReducers;