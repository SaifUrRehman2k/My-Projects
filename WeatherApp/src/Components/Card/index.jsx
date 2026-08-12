import React from 'react'

export const Card = ({children, title, time}) => {
  return (
    <div className='flex flex-col flex-wrap align-middle justify-around w-[95%] sm:w-[80%] md:w-[70%]  h-max p-6 gap-8 bg-white rounded-[1em]'>
        <div className={`flex-row flex-nowrap justify-between align-middle ${title && time ? 'flex' : 'hidden'}`}>
            <h3 className='text-[0.9em] text-gray-700 font-[600]'>{title}</h3>
            <p className='text-[0.9em] font-[500]'><b>{time}</b></p>
        </div>
        {children}
    </div>
  )
}

export const Card2 = ({ children, classFromParent }) => {
  return (
    <div className={`flex flex-col flex-wrap align-middle transition-all delay-0 duration-300 ease-in-out justify-start w-[95%] sm:w-[80%] md:w-[70%] p-1 bg-white rounded-[1em] ${classFromParent}`}>
        {children}
    </div>
  )
}

export default Card
