import { call, put, all, takeLatest } from 'redux-saga/effects';
import { loginSucccess, loginFailure } from './actions';
import {LOGIN_REQUEST} from '../types';
import axios from '../../../services/api';

function* loginRequest ({payload}) {

    try{
        const response = yield call(axios.post, '/auth/singin', payload);
        yield put(loginSucccess({...response.data}))
        window.location.href = "/";
    } catch(e) {
        alert("Erro: ", e);

        yield put(loginFailure())
    }
}

export default all([takeLatest(LOGIN_REQUEST, loginRequest)])