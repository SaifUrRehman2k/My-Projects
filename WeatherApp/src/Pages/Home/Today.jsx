import React, { useRef } from 'react'
import Card from '../../Components/Card'
import { SubCard1x2, SubCard1x5 } from '../../Components/SubCards'
import Condition from '../../Components/Condition'
import Table from '../../Components/Table'
import WeatherMap from '../../Components/Map'
import { TileLayer, Marker } from 'react-leaflet'
import { Link } from 'react-router'
import { HorizontalScrollCard } from '../../Components/ScrollCards'


const Today = () => {

    return (
        <>
            <div className='flex flex-col flex-wrap align-middle justify-start mt-8 ml-5 gap-4'>
                <Card title="Tonight's Weather" time="Fri,8pm">
                    <div className='flex flex-col flex-wrap gap-1'>
                        <h1>Partially Cloudy <b>Lo: 25°C</b></h1>
                        <h1>Tomorrow, Sunny <b>Hi: 35°C</b></h1>
                    </div>
                </Card>

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

                <Card title="Tonight's Weather" time="Fri,8pm">
                    <div className='flex flex-col flex-wrap gap-1'>
                        <p className='text-[1.2em]'>Thunder Storms in the area through Sunday evening and Monday afternoon</p>
                    </div>
                </Card>

                <Card title="Tonight's Weather" time="Fri,8pm">
                    <div className='w-[100%] h-80 md:h-[30em] mx-auto'>
                        <WeatherMap >
                            <TileLayer
                                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {/* <TileLayer
                minZoom={5}
                maxZoom={7}
                attribution='&copy; WeatherApi'
                url={mapUrl}
              /> */}
                            <Marker
                                position={[24.8608, 67.01]}
                            />
                        </WeatherMap>
                    </div>
                </Card>

                <Card title="Hourly Weather" >
                    <div className='w-[100%] h-40 my-2 relative'>

                        <HorizontalScrollCard/>

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

                <Card title="Air Quality" time={<Link>See more</Link>}>
                    <div className='flex flex-row flex-nowrap items-center justify-between'>
                        <h4 className='text-[14px] text-gray-600 font-[600]'>Air Quality</h4>
                        <h1 className='text-[18px] text-gray-800 font-[700] pr-2 border-r-[3px] border-r-red-600'>Poor</h1>
                    </div>
                    <p className='text-[14px] text-gray-700'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic alias obcaecati quas! Quos in natus deleniti minima doloribus repellat accusantium assumenda? Doloribus aperiam omnis debitis! Fugiat ipsum nihil est nostrum!
                    </p>
                </Card>
            </div>
        </>
    )
}

export default Today
