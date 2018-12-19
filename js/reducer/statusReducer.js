import CONSTANTS from "../constants/CONSTANTS";

export default function (state={} , action ){

    switch(action.type){

        case CONSTANTS.ADD_TASK_STATUS:
           state.status = action.payload ;
            return {state };
            break;    
    }

}