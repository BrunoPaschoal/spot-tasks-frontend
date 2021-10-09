import axios from 'axios';

let getLocalStorageData = null;
let token = null;

try{
    getLocalStorageData = localStorage.getItem('persist:SPOT-TASKS');
    const firstParse = JSON.parse(getLocalStorageData);
    const user = JSON.parse(firstParse.authReducer);
    token = user.token;
} catch {
    token = null
}

const api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Authorization: token ? `Bearer ${token}` : '',
    }
})

export default api;