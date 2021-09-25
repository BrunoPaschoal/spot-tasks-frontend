import {UPDATE_TASK} from '../types';

const initialState = {
    tasks: []
}

 const updateTaskReducer = (state = initialState, action) => {
     switch(action.type){
         case UPDATE_TASK:{
             const newState = {...state};
             newState.tasks = action.payload;
             return newState;
         }

         default: {
             return state;
         }
     }

}

export default updateTaskReducer;