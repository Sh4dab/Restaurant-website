import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

function Navbar() {
  const activeLink = 'bg-[#FBEEC1] rounded-xl text-black px-4 p-2';
  const notActiveLink = 'px-4 p-2';
  return (
    <>
      <div className='flex justify-evenly p-4 w-full bg-[#dfc499]'>
        <img src={logo} alt="logo" className='w-auto h-10' />
        <div className=' text-white flex justify-center rounded-xl bg-[#886255]'>
          <NavLink to="/" className={({ isActive }) => isActive ? activeLink : notActiveLink}>
            Home
          </NavLink>

          <NavLink to={"/menu"} className={({ isActive }) => isActive ? activeLink : notActiveLink}>
            Menu
          </NavLink>

          <NavLink to={"/contact"} className={({ isActive }) => isActive ? activeLink : notActiveLink}>
            Contact
          </NavLink>
        </div>
        <button className='px-4 bg-[#FBEEC1] bg-opacity-90 border-[#7f5539] border-2 rounded-full'>Book a Table</button>
      </div>
    </>
  )
}

export default Navbar