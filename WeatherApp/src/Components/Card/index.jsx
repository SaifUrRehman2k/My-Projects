import React from 'react'

const Card = ({children}) => {
  return (
    <div className='flex flex-col flex-wrap align-middle justify-around w-[90%] sm:w-[80%] md:w-[60%] h-max p-6 gap-8 bg-white rounded-[1em]'>
        <div className='flex flex-row flex-nowrap justify-between align-middle'>
            <h3>Today weather</h3>
            <p><b>Thu, 5pm</b></p>
        </div>
        {children}
    </div>
  )
}

export default Card
