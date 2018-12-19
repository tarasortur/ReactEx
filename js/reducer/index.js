import { combineReducers } from 'redux';
import taskReducers from "./taskReducer";
import statusReducer from "./statusReducer";

const appReducers = combineReducers({
    taskReducers, statusReducer
});

export default appReducers;