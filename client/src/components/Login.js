import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions'
import { login } from '../api/user'
import { getWorkouts } from '../api/workout'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleOnClick = React.useCallback(() => {
        const fetchWorkouts = async () => {
            const response = await getWorkouts()
            if (response && response.data) {
                dispatch(actions.getWorkouts(response.data.workouts))
            }
        }
        const fetchData = async () => {
            if (email !== '' && password !== '') {
                const response = await login({ email, password })
                console.log(response)
                // Save access token to storage
                if (response.data.success) {
                    let { accessToken } = response.data;
                    window.localStorage.setItem('accessToken', accessToken)
                    if (response && response.data) {
                        dispatch(actions.login(response.data.user))
                    }
                    fetchWorkouts()
                } else {
                    alert(response.data.mes)
                }
            } else {
                alert('Missing input')
            }
        }
        fetchData()

        setEmail('')
        setPassword('')


    }, [dispatch, email, password])

    return (
        <form className='login'>
            <p>Log In</p>
            <div className='form'>
                <label>Email address:</label>
                <input
                    type='text'
                    placeholder='Example@...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button onClick={handleOnClick}>Log in</button>
            </div>
        </form>
    )
}

export default Login