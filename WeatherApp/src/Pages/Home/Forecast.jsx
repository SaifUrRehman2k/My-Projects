import React from 'react'
import Card from '../../Components/Card'
import { SubCard1x2, SubCard1x5 } from '../../Components/SubCards'
import Condition from '../../Components/Condition'
import Table from '../../Components/Table'
import { HorizontalScrollCard } from '../../Components/ScrollCards'

const Forecast = () => {
    return (
        <>
            <Card title="Hourly Weather" >
                <div className='w-[100%] h-40 my-2 relative'>
                    <HorizontalScrollCard />
                </div>
            </Card>

            <Card title="10 day weather forecast">
                <div className='flex flex-col flex-wrap w-[100%] h-max gap-5'>
                    <SubCard1x5 />
                    <SubCard1x5 />
                    <SubCard1x5 />
                    <SubCard1x5 />
                    <SubCard1x5 />
                    <SubCard1x5 />
                    <SubCard1x5 />

                </div>
            </Card>
        </>
    )
}

export default Forecast
