import actionTypes from "../actions/actionTypes"

const initState = {
    isLoggedIn: false,
    user: null
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.data
            }
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer