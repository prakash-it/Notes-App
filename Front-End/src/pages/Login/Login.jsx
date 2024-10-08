import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Password from '../../components/input/Password'
import { validateEmail } from '../../utils/helper'
export const Login = () => {
  const[ email, setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error, setError]=useState('')

  const submit = async (e) => {
    e.preventDefault();
  
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
  
    if (!password) {
      setError("Please enter a password");
      return;
    }

    
  };
  
  return (
    <>
    <Navbar/>

    <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
            <form onSubmit={submit}>
            <h4 className='text-2xl mb-7 '>Login</h4>

            <input type="text" value={email} placeholder='Email' className='input-box' onChange={(e)=>{setEmail(e.target.value)}} />
            <Password value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

             {error && <p className='text-red-700 text-xs pb-2'>{error}</p>}

            <button type='submit' className='btn-primary'>
                Login
            </button>

            <p className='text-sm text-center mt-4'>
                Not registered yet?{""}
                <Link to="/signup" className='font-medium text-primary underline'>Create an Accont</Link>
            </p>
            </form>
        </div>
    </div>
    </>
  )
}
