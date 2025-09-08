import React from 'react'
import { Link } from 'react-router'

const Condition = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap justify-between w-[50%]'>
            <div className='flex flex-row flex-nowrap gap-6'>
                <div className='w-[54px] h-[54px] bg-amber-800'></div>
                <div className='flex flex-col flex-wrap'>
                    <h1 className='text-[3em]/8 font-[600] line'>29°<span className='text-[0.4em] text-gray-500'>C</span></h1>
                    <p>Real Feel' 33°C</p>
                </div>
            </div>
            <div className='flex-col flex-wrap'>
                <h1 className='text-[1.2em]'>Sunny</h1>
                <Link>More Details</Link>
            </div>
          </div>
    </>
  )
}

export default Condition
