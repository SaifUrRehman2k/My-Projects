import React, { useState } from 'react'

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
            <div className='flex flex-col sm:flex-row items-center flex-1 justify-evenly sm:justify-between sm:border-0 border border-gray-300 p-0 sm:p-2 min-w-[12em] max-w-[100%] h-[16em] sm:h-max'>
                <p className='flex flex-col flex-wrap items-center sm:w-25%'>
                    <b>Today</b>
                    <small>9/5</small>
                </p>
                <div className='w-max sm:w-30 flex flex-col sm:flex-row items-center sm:items-end justify-center sm:justify-start gap-1'>
                    <div className='w-[24px] h-[24px] bg-gray-500 '></div>
                    <h2 className='text-[1.4em]/6 font-[600]'>27°</h2>
                    <small className='text-[16px]/6 font-[400] text-gray-600'>22°</small>
                </div>
                <h2 className='w-max sm:w-[50%] text-center sm:text-left text-[1em] font-[600]'>Partially Cloudy</h2>
                <small className='w-[8%] sm:w-10 text-[16px] text-gray-600'>5%</small>
            </div>
        </>
    )
}

export const SubCard5x5 = ({ children , classFromParent, toggleBtnFucntion }) => {

    return (
        <>
            <div className={`flex flex-col flex-nowrap items-center justify-around w-full ${classFromParent}`}>
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
                        <button type='button' onClick={toggleBtnFucntion}>fck btn</button>
                    </div>

                </div>

                <div className='flex flex-col items-center justify-between p-2 w-full overflow-hidden'>
                    {children}
                </div>
            </div>

        </>
    )
}


