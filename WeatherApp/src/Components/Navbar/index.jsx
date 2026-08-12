import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex-row align-middle justify-start px-4 shadow-lg/10 bg-gray-200  shadow-slate-500 text-[18px] text-gray-700 hidden sm:flex'>
        <NavLink to={'/'} end className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:border-b-[2px] pb-1
           border-b-gray-700'>Today</span>
        </NavLink>
        <NavLink to={'/hourly'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:border-b-[2px] pb-1
           border-b-gray-700'>Hourly</span>
        </NavLink>
        <NavLink to={'/tomorrow'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:border-b-[2px] pb-1
           border-b-gray-700'>Tomorrow</span>
        </NavLink>
        <NavLink to={'/radar'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:border-b-[2px] pb-1
           border-b-gray-700'>Radar</span>
        </NavLink>
        <NavLink to={'/forecast'} className='group pl-2 pr-5 py-1 hover:bg-transparent-100'>
          <span className='group-[.active]:border-b-[2px] pb-1
           border-b-gray-700'>10 Days</span>
        </NavLink>

    </div>
  )
}

export default Navbar
