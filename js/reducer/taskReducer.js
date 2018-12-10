import * as CONSTANTS from "../constants/CONSTANTS";

export default function (state = [], action) {

    switch (action.type) {
        case CONSTANTS.ADD_TASK:
            return [...state, Object.assign({}, action.task)];
            break;

        case CONSTANTS.DELETE_TASK:
            state.forEach((x) => {
                if (x.name == action.taskName) {
                    delete x.name;
                    delete x.desc;
                    x = undefined;
                }
            })
            return state;
            break;

        case CONSTANTS.EDIT_TASK:
            state.forEach((x) => {
                if (x.name == action.payload.name) {
                    x.desc = action.payload.desc;
                }
            })
            return [...state];
            break;

        case CONSTANTS.RESET_TASK:
            state.forEach((x) => {
                if (x.name == action.payload.name) {
                    x.desc = action.payload.desc;
                }
            })
            return [...state];
            break;    

        default:
            return state;
    }
}