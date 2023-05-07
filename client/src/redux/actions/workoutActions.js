import actionTypes from "./actionTypes";

export const getWorkouts = (data) => ({
    type: actionTypes.GET_WORKOUTS_SUCCESS,
    data
})

export const getWorkout = (data) => ({
    type: actionTypes.GET_WORKOUT_SUCCESS,
    data
})

export const createWorkout = (data) => ({
    type: actionTypes.CREATE_WORKOUT_SUCCESS,
    data
})

export const updateWorkout = (data) => ({
    type: actionTypes.UPDATE_WORDOUT_SUCCESS,
    data
})

export const deleteWorkout = (_id) => ({
    type: actionTypes.DELETE_WORKOUT_SUCCESS,
    _id
})


