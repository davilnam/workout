import actionTypes from "../actions/actionTypes"

const initState = {
    data: []
}

const workoutReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_WORKOUTS_SUCCESS:
            return {
                ...state,
                data: action.data
            }
        case actionTypes.CREATE_WORKOUT_SUCCESS:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case actionTypes.UPDATE_WORDOUT_SUCCESS:
            const newData = [...state.data].map(item => {
                if (item._id === action.data._id) {
                    item = action.data
                }
                return item
            })
            return {
                ...state,
                data: newData
            }
        case actionTypes.DELETE_WORKOUT_SUCCESS:
            const copyData = [...state.data].filter(item => item._id !== action._id)
            return {
                ...state,
                data: copyData
            }
        default:
            return state
    }
}

export default workoutReducer