import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../types';

export function loginRequest (payload){
    return{
        type: LOGIN_REQUEST,
        payload: payload
    }
}

export function loginSucccess (payload){
    return{
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export function loginFailure (payload){
    return{
        type: LOGIN_FAILURE,
        payload: payload
    }
}

//LOGOUT TYPES
export function logout (){
    return{
        type: LOGOUT,
    }
}