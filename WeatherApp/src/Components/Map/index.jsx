import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const WeatherMap = ({ children }) => {
    return (
        <MapContainer
            center={[24.8607, 67.0011]}
            zoom={5}
            className='w-[100%] h-[100%]'
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
        >
            {children}
        </MapContainer>
    )
}

export const WeatherMap2 = ({ children }) => {
    return (
        <MapContainer
            center={[24.8607, 67.0011]}
            zoom={13}
            className='w-[100%] h-[100vh] '
        >
            {children}
        </MapContainer>
    )
}

export default WeatherMap
