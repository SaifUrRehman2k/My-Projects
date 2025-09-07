import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex-row align-middle justify-start px-4  bg-gray-700 text-[18px] text-blue-100 hidden sm:flex'>
        <Link className='pl-2 pr-5 py-1 hover:bg-transparent-100 '>Today</Link>
        <Link className='pl-2 pr-5 py-1 hover:bg-transparent-100 '>Hourly</Link>
        <Link className='pl-2 pr-5 py-1 hover:bg-transparent-100 '>Tomorrow</Link>
        <Link className='pl-2 pr-5 py-1 hover:bg-transparent-100 '>Radar</Link>
        <Link className='pl-2 pr-5 py-1 hover:bg-transparent-100 '>10 Days</Link>

    </div>
  )
}

export default Navbar
