import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col gap-3 rounded-md shadow-lg  w-fit p-4 mx-auto my-[26vh]'>
<input type="email" name="email" id="email" placeholder='Enter your e-mail' 
className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
/>
<input type="password" name="email" id="email" placeholder='Enter your password' 
className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
/>
<button 
className='px-3 py-2 bg-purple-500 rounded-full text-white font-semibold shadow-md w-[200px] mx-auto'
type="submit">Login</button>
    </div>

  )
}

export default Login
