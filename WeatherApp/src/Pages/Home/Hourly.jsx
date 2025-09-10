import React from 'react'
import Card from '../../Components/Card'
import { SubCard1x2, SubCard1x5 } from '../../Components/SubCards'
import Condition from '../../Components/Condition'
import Table from '../../Components/Table'
import { HorizontalScrollCard } from '../../Components/ScrollCards'

const Hourly = () => {
  return (
    <>
            <div className='flex flex-col flex-wrap align-middle justify-start mt-8 ml-5 gap-4'>
        <Card title="Tonight's Weather" time="Fri,8pm">
          <div className='flex flex-col flex-wrap gap-1'>
            <h1>Partially Cloudy <b>Lo: 25°C</b></h1>
            <h1>Tomorrow, Sunny <b>Hi: 35°C</b></h1>
          </div>
        </Card>


        <Card title="Hourly Weather" >
          <div className='w-[100%] h-40 my-2 relative'>

              <HorizontalScrollCard/>

          </div>
        </Card>

        <Card title="10 day weather forecast">
          <div className='flex flex-col flex-wrap w-[100%] h-max gap-5'>
            <SubCard1x5/>
            <SubCard1x5/>
            <SubCard1x5/>
            <SubCard1x5/>
            <SubCard1x5/>
            <SubCard1x5/>
            <SubCard1x5/>

          </div>
        </Card>


      </div>
    </>
  )
}

export default Hourly
