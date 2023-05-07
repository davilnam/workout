import { Routes, Route } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {


  return (
    <div className="App">

      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
        </Route>
      </Routes>


    </div>
  );
}

export default App;