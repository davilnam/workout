import actionTypes from "./actionTypes";

export const login = (data) => ({
    type: actionTypes.LOGIN_SUCCESS,
    data
})

export const logout = () => ({
    type: actionTypes.LOGOUT_SUCCESS
})



