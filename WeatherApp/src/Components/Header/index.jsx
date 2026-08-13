import React from 'react'
import './header.css'
import Button from '../Button'
import { Link } from 'react-router'
import Seacrh from '../SearchBar'
import { useDispatch } from 'react-redux'
import { sideBarState } from '../../App/AppSlices/Sidebar'


const Header = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-between bg-gray-800 text-white align-middle p-3 h-14'>
      <h1 className='text-center m-0 text-3xl font-[600]'>Weather</h1>
      <div className='flex gap-3 align-middle'>
        <Seacrh class='hidden sm:flex' />
        <Button>
          <Link className="px-1 hover:text-blue-500 py-2 flex flex-row flex-nowrap align-middle justify-center rounded-[6px] text-[0.8em]">Login</Link>
        </Button>
        <Link className='flex align-middle w-5 sm:hidden' onClick={()=> {dispatch(sideBarState())}}>
          <svg xmlns="http://www.w3.org/2000/svg" className='fill-gray-100 h-[2.5em]'  viewBox="0 -960 960 960"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </Link>
      </div>
    </div>
  )
}

export default Header
