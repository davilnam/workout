import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000'
});

axiosClient.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem('accessToken');
    config.headers = {
        Authorization: token ? `Bearer ${token}` : null
    }
    return config
}, function (error) {
    return Promise.reject(error)
});

axiosClient.interceptors.response.use(function (response) {
    // refresh token
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient;

