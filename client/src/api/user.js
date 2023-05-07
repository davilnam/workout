import axiosClient from '../axios'

const register = (data) => {
    return axiosClient.post(`/api/user/signup`, data);
}

const login = (data) => {
    return axiosClient.post(`/api/user/login`, data);
}


export {
    register,
    login
}