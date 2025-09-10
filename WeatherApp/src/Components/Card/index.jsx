import React from 'react'

const Card = ({children, title, time}) => {
  return (
    <div className='flex flex-col flex-wrap align-middle justify-around w-[95%] sm:w-[80%] md:w-[70%]  h-max p-6 gap-8 bg-white rounded-[1em]'>
        <div className='flex flex-row flex-nowrap justify-between align-middle'>
            <h3 className='text-[0.9em] text-gray-700 font-[600]'>{title}</h3>
            <p className='text-[0.9em] font-[500]'><b>{time}</b></p>
        </div>
        {children}
    </div>
  )
}

export default Card
