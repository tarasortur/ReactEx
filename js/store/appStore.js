import {createStore} from "redux" ;
import reducers from "../reducer";

export default function(){
    return createStore(reducers);
}