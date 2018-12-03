import axios from 'axios'; 

export const fetchProductsBegin = ()=> {
        return {
         type: "GET_TASK",
          payload: axios.get('../../data/taskList.json')
        };
    }

   export const  fetchProductsFailure = (error)=> {
        return {
         type: "GET_TASK_FAIL",
          payload: "Yes its an error" + {error}
        };
    }

export function fetchProducts() {
 
    return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch("/data/taskList.json")
      .then(res => res.data)
      
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
}
