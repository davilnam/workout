import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions/userActions'

const Navbar = () => {
  const user = useSelector(state => state.user.user)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logout())
  }
  return (
    <header>
      <div className="container">
        <Link to={'/'}>
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {isLoggedIn && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <Link to="/login" className='btn-login'>Login</Link>
              <Link to="/signup" className='btn-signup'>Signup</Link>
            </div>
          )}
        </nav>

      </div>
    </header>
  )
}

export default Navbar