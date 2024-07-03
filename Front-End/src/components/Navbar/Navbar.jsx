import React, { useState } from 'react';
import Profile from '../card/Profile';
import { useNavigate } from 'react-router-dom';
import Search from '../SearchBar/Search';

function Navbar() {
  const[searchquery,setSearcgquery]=useState('')

  const navigate = useNavigate()
  const onlogout =()=>{
    navigate("/login")
  }

  const onsearch =()=>{

  }
  const onClearsearch=()=>{
    setSearcgquery("")
  }
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
      <h2 className='text-lg font-medium text-black py-2'>NOTES</h2>
  
      <Search value={searchquery} onChange={({target})=>{
        setSearcgquery(target.value)
      }} search ={onsearch}  onClearsearch={onClearsearch}/>
      <Profile logout={onlogout}/>


    </div>

    
  );
}

export default Navbar;
