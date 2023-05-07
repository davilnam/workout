import axiosClient from '../axios'

const getWorkouts = () => {
    return axiosClient.get(`/api/workouts`);
}

const createWorkout = (data) => {
    return axiosClient.post(`/api/workouts`, data);
}

const updateWorkout = (data) => {
    const { _id, ...other } = data
    return axiosClient.put(`/api/workouts/${_id}`, other);
}

const deleteWorkout = (_id) => {
    return axiosClient.delete(`/api/workouts/${_id}`);
}

export {
    getWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout
}