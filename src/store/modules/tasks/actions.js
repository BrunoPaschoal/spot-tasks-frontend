import {UPDATE_TASK} from '../types';

export function updateTask (payload){
    return{
        type: UPDATE_TASK,
        payload: payload
    }
}