import * as CONSTANTS from "../constants/CONSTANTS";

export default function (state = [], action) {

    switch (action.type) {
        case CONSTANTS.ADD_TASK:
            return [...state, Object.assign({}, action.task)];
            break;
         case CONSTANTS.DELETE_TASK:
            return state;
            break;    
        default:
            return state;
    }
}