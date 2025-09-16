import React from 'react'
import Card from '../../Components/Card'
import Condition from '../../Components/Condition'
import Table from '../../Components/Table'
import { SubCard1x5 } from '../../Components/SubCards'
const Tomorrow = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-5 p-5 mt-12'>

      <Card title="Current Weather">
        <div className='flex flex-row flex-nowrap justify-around h-34'>
          <Condition />
          <Table>
            <div className="flex flex-row flex-nowrap align-middle justify-between">
              <p className='text-[0.9em] text-gray-700'>Wind</p>
              <b>NW, 11km/h</b>
            </div>
            <div className="flex flex-row flex-nowrap align-middle justify-between">
              <p className='text-[0.9em] text-gray-700'>Wind Gusts</p>
              <b>14 km/h</b>
            </div>
            <div className="flex flex-row flex-nowrap align-middle justify-between">
              <p className='text-[0.9em] text-gray-700'>Air Quality</p>
              <b className='text-amber-600'>Poor</b>
            </div>

          </Table>
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
    </div>
  )
}

export default Tomorrow
