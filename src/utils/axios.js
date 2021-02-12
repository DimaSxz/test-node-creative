import axios from 'axios';

import config from '../config/index.js'

// axios.defaults.responseType = 'json';
axios.defaults.baseURL = config.externalApi.url;
axios.defaults.params = {
    apikey: config.externalApi.key,
};

axios.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2));
    return request;
})

axios.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response;
})

export default axios;
