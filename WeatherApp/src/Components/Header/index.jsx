import React from 'react'
import './header.css'
import Button from '../Button'
import { Link } from 'react-router'
import Seacrh from '../SearchBar'
import Menu from '../../assets/icons/menu.svg'


const Header = () => {
  return (
    <div className='flex justify-between align-middle p-3 h-14'>
      <h1 className='text-center m-0 text-3xl font-[600]'>Weather</h1>
      <div className='flex gap-3 align-middle'>
        <Seacrh class='hidden sm:flex'/>
        <Button>
            <Link className="px-1 hover:text-blue-500 py-2 flex flex-row flex-nowrap align-middle justify-center rounded-[6px] text-[0.8em]">Login</Link>
        </Button>
        <Link className='flex align-middle w-5 sm:hidden'><img src={Menu} alt="menu" className='h-8'/></Link>
      </div>
    </div>
  )
}

export default Header
