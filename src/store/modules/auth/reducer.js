import {LOGIN, LOGOUT} from '../types';
const initialState = {    
    authentication: {
        isAuth: false
    },
    user: {},
}

 const authReducer = (state = initialState, action) => {
     switch(action.type){
         case LOGIN:{
             return {
                 ...state,
                 authentication: {
                    isAuth: true
                },
                 user: {...action.payload}
             }
         }

         case LOGOUT:{
            return {
                ...state,
                authentication: {
                   isAuth: false
               },
                user: {}
            }
        }

         default: {
             return state;
         }
     }

}

export default authReducer;
