import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './Components/Header/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Card from './Components/Card/index.jsx'
import Condition from './Components/Condition/index.jsx'
import Table from './Components/Table/index.jsx'
import 'leaflet/dist/leaflet.css';
import WeatherMap from './Components/Map/index.jsx'
import { Marker, TileLayer } from 'react-leaflet'

function App() {
  const [callValue, setCallValue] = useState(false)
  const [mapUrl, setmapUrl] = useState()

  useEffect(() => {
    const url = 'https://api.tomorrow.io/v4/map/tile/5/2/3/precipitationIntensity/now.png?apikey=ycdWwVV6iAKxsN6OZkEaA39DTQ7SQCjA'
    setmapUrl(url)
  }, [callValue])

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
    <>
      <Header />
      <Navbar />
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
          <div className='w-[30em] h-80 mx-auto'>
            <WeatherMap >
              <TileLayer
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <TileLayer
                minZoom={5}
                maxZoom={7}
                attribution='&copy; WeatherApi'
                url={mapUrl}
              />
              <Marker
                position={[24.8608, 67.01]}
              />
            </WeatherMap>
          </div>
        </Card>

        <Card title="Hourly Weather" >
          <div className='w-[100%] h-40 my-2 relative'>
            <button type='button' onClick={() => scrollLeft()} className='absolute top-16 left-[-15px] bg-blue-400 w-7 h-7 rounded-[50%] flex flex-row justify-center align-middle'>{'<'}</button>

            <div className=" h-[100%] w-[100%] whitespace-nowrap overflow-x-auto  snap-x snap-mandatory scrollbar-hide scroll-smooth" ref={horizontalCardRef}>
              <div className="flex w-max space-x-4 h-full" >
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 1</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 1</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 2</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 2</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 3</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 3</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 4</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 4</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 1</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 1</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 2</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 2</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 3</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 3</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 4</div>
                <div className="snap-start w-21 h-full bg-blue-600 text-white rounded-[1em] p-2">Item 4</div>
              </div>
            </div>
            <button type='button' onClick={() => scrollRight()} className='absolute top-16 right-[-15px] bg-blue-400 w-7 h-7 rounded-[50%] flex flex-row justify-center align-middle'>{'>'}</button>

          </div>
        </Card>
      </div>
    </>
  )
}

export default App
