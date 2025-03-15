import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const navigate = useNavigate();

  const handleLogin = async ()=>{
      const res = await axios.post('http://localhost:5000/api/signup', {
        name,  
        email,
          password
  })
const data= await res.data;
console.log(data);
// navigate('/users')
}

  return (
    <div className='flex flex-col gap-3 rounded-md shadow-lg  w-fit p-4 mx-auto my-[26vh]'>

<input 
className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
value={name} onChange={(e)=>setName(e.target.value)}
type="text" name="name" id="name" placeholder='Enter Your Name' />

<input type="email" name="email" id="email" placeholder='Enter your e-mail' 
value={email} onChange={(e)=>setEmail(e.target.value)}
className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
/>
<input type="password" name="email" id="email" placeholder='Enter your password' 
onChange={(e)=>setPassword(e.target.value)}
value={password}
className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
/>
<button 
onClick={handleLogin}
className='px-3 py-2 bg-purple-500 rounded-full text-white font-semibold shadow-md w-[200px] mx-auto'
type="submit">Login</button>
    </div>

  )
}

export default SignUp
