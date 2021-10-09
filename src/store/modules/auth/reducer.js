import {LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE, LOGOUT} from '../types';

const initialState = {    
    isAuth: false,
    token: false,    
    user: {},
    isLoading: false,
}

 const authReducer = (state = initialState, action) => {
     switch(action.type){
         case LOGIN_SUCCESS:{            
             return {
                 ...state,
                 isAuth: true,
                 token: action.payload.token,
                 user: action.payload.user,
                 isLoading: false
             }
         }

         case LOGIN_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }

        case LOGIN_FAILURE:{
            return {
                ...state,
                isAuth: false,
                token: false,    
                user: {},
                isLoading: false,
            }
        }

        //logout
         case LOGOUT:{
            return initialState;
        }

         default: {
             return state;
         }
     }

}

export default authReducer;
