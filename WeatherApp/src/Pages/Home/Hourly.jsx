import React, { useState } from 'react'
import Card, { Card2 } from '../../Components/Card'
import { SubCard1x2, SubCard1x5, SubCard5x5 } from '../../Components/SubCards'
import Condition from '../../Components/Condition'
import Table from '../../Components/Table'
import { HorizontalScrollCard } from '../../Components/ScrollCards'

const Hourly = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null)
  const toggleBtn = (index) => {
    setExpandedCardIndex(prev => prev === index ? null : index)
  } 

  return (
    <>
      <div className='flex flex-col flex-wrap align-middle justify-start mt-8 ml-5 gap-4'>

        {
          [...Array(3)].map((_, index) => (
            <Card2 classFromParent={`p-2 overflow-y-hidden ${expandedCardIndex === index ? 'h-[40em]' : 'h-[28em]'}`} key={index}>
              <div className='flex flex-row flex-wrap w-[100%] gap-5'>
                <div className='flex flex-row flex-wrap items-center justify-between p-2 w-full'>
                  <div className='flex flex-row items-center justify-between gap-4 w-[30%]'>
                    <p className='gap-2 w-max'>
                      <b>1pm</b>
                    </p>
                    <div className='w-[35%] sm:w-30 flex flex-row items-end justify-center sm:justify-start gap-1'>
                      <div className='w-[24px] h-[24px] bg-gray-500 '></div>
                      <h2 className='text-[1.4em]/6 font-[600]'>27°</h2>
                      <small className='text-[16px]/6 font-[400] text-gray-600'>22°</small>
                    </div>

                  </div>
                  <div className='flex flex-row items-center justify-between gap-4 w-[40%]'>
                    <h2 className='w-[50%] text-center sm:text-left text-[0.9em] text-gray-500 font-[300]'>RealFeel 20°C</h2>
                    <small className='w-max text-[16px] text-gray-600'>5%</small>
                    <button type='button' onClick={()=>toggleBtn(index)}>toggle</button>
                  </div>

                </div>

                <h2 className='self-start text-[1.4em] font-[600] w-100'>Condition</h2>
                <ul className='list-none flex flex-col items-center justify-around w-full h-full'>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 border-b-[2px] border-gray-300'><p>Weather</p> <h4>Sunny</h4></li>
                  <li className='flex flex-row items-center justify-between w-full px-0 py-3 '><p>Weather</p> <h4>Sunny</h4></li>
                </ul>


              </div>
            </Card2>
          ))

        }
        

      </div>
    </>
  )
}

export default Hourly
