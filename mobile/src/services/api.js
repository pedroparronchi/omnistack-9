import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.86.2:3030/api/'
});

export default api;