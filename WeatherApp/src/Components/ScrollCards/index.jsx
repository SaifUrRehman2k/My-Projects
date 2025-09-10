import React, { useRef } from 'react'
import { SubCard1x2 } from '../SubCards'


export const HorizontalScrollCard = () => {
    const horizontalCardRef = useRef(null)

    const scrollRight = () => {
        console.log(horizontalCardRef.current)
        const scrollX = horizontalCardRef.current
        scrollX.scrollLeft += 200;
    }
    const scrollLeft = () => {
        console.log(horizontalCardRef.current)
        const scrollX = horizontalCardRef.current
        scrollX.scrollLeft -= 200;
    }

    return (
        <div>
            <button type='button' onClick={() => scrollLeft()} className='absolute top-0 left-[-15px] bg-gray-400  w-7 h-[100%]  flex flex-row justify-center align-middle'>{'<'}</button>
            <div className=" h-[100%] w-[100%] whitespace-nowrap overflow-x-auto  snap-x snap-mandatory scrollbar-hide scroll-smooth" ref={horizontalCardRef}>
                <div className="flex w-max space-x-4 h-full" >
                    <SubCard1x2 />
                    <SubCard1x2 />
                    <SubCard1x2 />
                    <SubCard1x2 />
                    <SubCard1x2 />
                    <SubCard1x2 />
                    <SubCard1x2 />
                    <SubCard1x2 />
                </div>
            </div>

            <button type='button' onClick={() => scrollRight()} className='absolute top-0 right-[-15px] bg-gray-400  w-7 h-[100%]  flex flex-row justify-center align-middle'>{'>'}</button>

        </div>
    )
}