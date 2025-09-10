import React from 'react'

export const SubCard1x2 = () => {
    return (
        <>
            <div className="flex flex-col flex-wrap items-center justify-around snap-start w-24 h-full p-2">
                <h3 className=' text-[14px]'>9pm</h3>
                <div className='h-[32px] w-[32px] bg-gray-500'></div>
                <h1 className=' text-[26px]'>32°C</h1>
                <small className='self-end text-gray-500'>5%</small>
            </div>
        </>
    )
}

export const SubCard1x5 = () => {
    return (
        <>
            <div className='flex flex-row items-center justify-between p-2'>
                <p className='flex flex-col flex-wrap items-center w-[20%] sm:w-25%'>
                    <b>Today</b>
                    <small>9/5</small>
                </p>
                <div className='w-[35%] sm:w-30 flex flex-row items-end justify-center sm:justify-start gap-1'>
                    <div className='w-[24px] h-[24px] bg-gray-500 '></div>
                    <h2 className='text-[1.4em]/6 font-[600]'>27°</h2>
                    <small className='text-[16px]/6 font-[400] text-gray-600'>22°</small>
                </div>
                <h2 className='w-[50%] text-center sm:text-left text-[1em] font-[600]'>Partially Cloudy</h2>
                <small className='w-[8%] sm:w-10 text-[16px] text-gray-600'>5%</small>
            </div>
        </>
    )
}


