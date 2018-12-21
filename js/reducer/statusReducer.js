import * as CONSTANTS from "../constants/CONSTANTS";

export const initialState = {
status : "PENDING"
} 

export default function (state=initialState , action ){

    switch(action.type){

        case CONSTANTS.ADD_TASK_STATUS:
           state.status = action.payload ;
            return state ;
            break;   
            
          default:
            return state;  
    }

}