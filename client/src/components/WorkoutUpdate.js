import { useState } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react'
import { updateWorkout } from '../api/workout'
import * as actions from '../redux/actions/workoutActions'

const WorkoutUpdate = ({ workout, isSave }) => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState(workout.title)
    const [load, setLoad] = useState(workout.load)
    const [reps, setReps] = useState(workout.reps)


    const handleSubmit = React.useCallback(() => {
        if (title === '' || reps === '' || load === '') {
            alert('Missing input')
        } else {
            const fetchWorkouts = async () => {
                const data = { ...workout, title, load, reps }
                const response = await updateWorkout(data)
                console.log(response)
                if (response && response.data) {
                    dispatch(actions.updateWorkout(response.data.workout))
                }
            }
            fetchWorkouts()
            setTitle('')
            setLoad('')
            setReps('')
            isSave()
        }
    }, [dispatch, workout, load, reps, title, isSave])

    return (
        <div className="create">
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                required
                value={title}
            />

            <label>Load (in kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                required
                value={load}
            />

            <label>Number of Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                required
                value={reps}
            />

            <button onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default WorkoutUpdate