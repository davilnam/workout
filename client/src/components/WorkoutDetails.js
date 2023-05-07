import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { deleteWorkout } from '../api/workout'
import * as actions from '../redux/actions/workoutActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import WorkoutUpdate from './WorkoutUpdate'

import moment from 'moment'

const WorkoutDetails = ({ workout }) => {
    const dispatch = useDispatch()
    const [isShowModal, setIsShowModal] = useState(false)

    const handleClickDelete = React.useCallback(() => {
        const fetchWorkouts = async () => {
            const response = await deleteWorkout(workout._id)
            console.log("test delete", response)
            if (response && response.data) {
                dispatch(actions.deleteWorkout(response.data.workout._id))
            }
        }
        fetchWorkouts()
    }, [dispatch, workout])

    const handleClickUpdate = () => {
        setIsShowModal(true)
    }
    const isSave = () => {
        setIsShowModal(false)
    }
    return (
        <div>
            {!isShowModal ?
                <div className="workout-details" >
                    <h4>{workout.title}</h4>
                    <p><strong>Load (kg): </strong>{workout.load}</p>
                    <p><strong>Number of reps: </strong>{workout.reps}</p>
                    <p>{moment(workout.createAt).format('HH:MM MMM DD, YYYY')}</p>
                    <span className='pencil' onClick={handleClickUpdate}>
                        <FontAwesomeIcon icon={faPencil} />
                    </span>
                    <span className='trash' onClick={handleClickDelete}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </div>
                :
                <div className='isShowModal'>
                    <WorkoutUpdate
                        workout={workout}
                        isSave={isSave}
                    />
                </div>
            }
        </div>
    )
}

export default WorkoutDetails