import React, { useState } from 'react'
import Password from '../../components/input/Password'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { validateEmail } from '../../utils/helper'

export const Signup = () => {
    const[name , setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[errors,setErrors]=useState(null)


    const submit = async (e) => {
        e.preventDefault()

        if(!name)
            {
                setErrors("Please enter your name")
                return
            }
            if (!validateEmail(email)) {
                setErrors("Please enter a valid email address");
                return;
              }
            
              if (!password) {
                setErrors("Please enter a password");
                return;
              }

    }
  return (
    <>

    <Navbar/>
     <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
            <form onSubmit={submit}>
            <h4 className='text-2xl mb-7 '>SignUp</h4>

            <input type="text" value={name} placeholder='Name' className='input-box' onChange={(e)=>setName(e.target.value)}/>

            <input type="Email" value={email} placeholder='Email' className='input-box' onChange={(e)=>setEmail(e.target.value)}/>
        
            <Password value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            {errors && <p className='text-red-700 text-xs pb-2'>{errors}</p>}
            <button type='submit' className='btn-primary'>
                SignUp
            </button>

            <p className='text-sm text-center mt-4'>
                Already have an account?{""}
                <Link to="/login" className='font-medium text-primary underline'>Login</Link>
            </p>
            </form>
        </div>
    </div>
    </>
  )
}
