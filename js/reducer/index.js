import { combineReducers } from 'redux';
import taskReducers from "./taskReducer";

const appReducers = combineReducers({
    taskReducers
});

export default appReducers;