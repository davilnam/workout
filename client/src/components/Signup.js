import React, { useState } from 'react'
import { register } from '../api/user'

function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleOnClick = React.useCallback(() => {
        const fetchData = async () => {
            const response = await register({ email, password })
            if (response && response.data && Object.keys(response.data.user).length > 0) {
                alert("Đăng kí thành công vui lòng đăng nhập")
            }
        }
        fetchData()
        setEmail('')
        setPassword('')
    }, [email, password])
    return (
        <div className='signup'>
            <p>Sign up</p>
            <div className='form'>
                <label>Email address:</label>
                <input
                    type='text'
                    placeholder='Example@...'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />


                <button onClick={handleOnClick}>Sign up</button>

            </div>
        </div>
    )
}

export default Signup