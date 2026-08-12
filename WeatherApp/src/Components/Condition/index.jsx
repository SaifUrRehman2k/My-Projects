import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import moonIcon from '../../../public/customIcons/moon.svg'
import cloudMoonIcon from '../../../public/customIcons/cloud-moon.svg'

const Condition = () => {
  const { currentData } = useSelector(state => state.currentData)

  const customIcon = {
    1000: moonIcon,
    1003: cloudMoonIcon
  }
  const condition = useSelector(state => state.currentData?.currentData?.current?.condition)
  const conditionCode = useSelector(state => state.currentData?.currentData?.current?.condition.code)
  const cdnIcon = condition?.icon
  const isDay = useSelector(state => state.currentData?.currentData?.current?.is_day)

  
  // const dispatch = useDispatch()


  return (
    <>
      <div className='flex flex-col flex-wrap justify-between w-[50%]'>
        <div className='flex flex-row flex-nowrap gap-6'>
          <div className='w-[54px] h-[54px]'>
            <img className='w-[100%] h-[100%]' src={customIcon[conditionCode] && isDay == 0 ? customIcon[conditionCode] : cdnIcon} alt="" />
          </div>
          <div className='flex flex-col flex-wrap'>
            <h1 className='text-[3em]/8 font-[600] line'>{Math.round(currentData?.current?.temp_c)}°<span className='text-[0.4em] text-gray-500'>C</span></h1>
            <p>Real Feel' {Math.round(currentData?.current?.feelslike_c)}°C</p>
          </div>
        </div>
        <div className='flex-col flex-wrap'>
          <h1 className='text-[1.2em]'>{currentData?.current?.condition?.text}</h1>
          <Link className='text-blue-800 underline'>More Details</Link>
        </div>
      </div>
    </>
  )
}

export default Condition
