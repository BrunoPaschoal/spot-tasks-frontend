import {LOGIN, LOGOUT} from '../types';

export function login (payload){
    return{
        type: LOGIN,
        payload: payload
    }
}

export function logout (){
    return{
        type: LOGOUT,
    }
}