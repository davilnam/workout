import { useState } from 'react'
import { useDispatch } from 'react-redux'
import React from 'react'
import { createWorkout } from '../api/workout'
import * as actions from '../redux/actions/workoutActions'

const WorkoutForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')


    const handleSubmit = React.useCallback(() => {
        if (title === '' || reps === '' || load === '') {
            alert('Missing input')
        } else {
            const fetchWorkouts = async () => {
                const response = await createWorkout({ title, load, reps })
                console.log(response)
                if (response && response.data) {
                    dispatch(actions.createWorkout(response.data.workout))
                }
            }
            fetchWorkouts()
            setTitle('')
            setLoad('')
            setReps('')
        }
    }, [dispatch, load, reps, title])

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

            <button onClick={handleSubmit}>Add Workout</button>
        </div>
    )
}

export default WorkoutForm