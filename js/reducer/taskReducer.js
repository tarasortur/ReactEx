import * as CONSTANTS from "../constants/CONSTANTS";

export default function (state = [], action) {

    switch (action.type) {
        case CONSTANTS.ADD_TASK:
            return [...state, Object.assign({}, action.task)];
            break;
        // case CONSTANTS.DELETE_TASK:
        //     return state;
        //     break;  
        case CONSTANTS.DELETE_TASK:
            let res=Object.assign({},...state);
            delete res[action.task.name];
            return res;
            break;      
        default:
            return state;
    }
}