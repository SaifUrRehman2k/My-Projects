import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex-row align-middle justify-start px-4  bg-gray-700 text-[18px] text-blue-100 hidden sm:flex'>
        <NavLink to={'/'} end className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:underline'>Today</span>
        </NavLink>
        <NavLink to={'/hourly'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:underline'>Hourly</span>
        </NavLink>
        <NavLink to={'/radar'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:underline'>Tomorrow</span>
        </NavLink>
        <NavLink to={'/tomorrow'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:underline'>Radar</span>
        </NavLink>
        <NavLink to={'/forecast'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:underline'>10 Days</span>
        </NavLink>

    </div>
  )
}

export default Navbar
