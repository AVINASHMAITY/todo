import React from 'react';
import logo from "../assest/notes.jpeg";

const Navbar = () => {
  return (
    <div className='flex gap-4 items-center bg-emerald-400 h-[80px] px-4'>
      <img className='w-[50px] rounded-md' src={logo} alt='not found'/>
      <p className='text-[30px] text-white'>Notes</p>
    </div>
  )
}

export default Navbar;
