import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { WeatherMap2 } from '../../Components/Map'

const Radar = () => {
  return (
    <div className='mx-3 my-5 w-[80vw] h-[75vh]'>

      <WeatherMap2>
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
      </WeatherMap2>
    </div>
  )
}

export default Radar
