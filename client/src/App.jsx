import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Users from './pages/Users'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
<BrowserRouter >
<Navbar />
<Routes>

<Route path='/' element={<Home />} />
<Route path='/login' element={<Login />}></Route>
<Route path='/signup' element={<SignUp />}></Route>
<Route></Route>

</Routes>


</BrowserRouter>      
    </div>
  )
}

export default App
