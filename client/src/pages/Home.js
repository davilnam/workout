/* eslint-disable array-callback-return */
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const workouts = useSelector(state => state.workout.data)

    return (
        <div className="pages">
            <Navbar />
            {
                isLoggedIn &&
                <div className="home">
                    <div className="workouts">
                        {workouts && workouts.map((workout) => {
                            return (
                                <WorkoutDetails workout={workout} key={workout._id} />
                            )
                        })}
                    </div>
                    <WorkoutForm />
                </div>
            }
            {
                !isLoggedIn &&
                <Outlet></Outlet>
            }

        </div>
    )
}

export default Home