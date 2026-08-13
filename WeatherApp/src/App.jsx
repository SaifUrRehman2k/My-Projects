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
import { SubCard1x2, SubCard1x5 } from './Components/SubCards/index.jsx'
import { Link, Route, Routes } from 'react-router'
import Footer from './Components/Footer/index.jsx'
import Today from './Pages/Home/Today.jsx'
import Hourly from './Pages/Home/Hourly.jsx'
import Forecast from './Pages/Home/Forecast.jsx'
import Radar from './Pages/Home/Radar.jsx'
import Tomorrow from './Pages/Home/Tomorrow.jsx'
import SideBar from './Components/SideBar/index.jsx'

function App() {
  // const [callValue, setCallValue] = useState(false)
  // const [mapUrl, setmapUrl] = useState()

  return (
    <>
      <Header />
      <Navbar />
      <SideBar />



      <Routes>
        <Route path='' element={<Today />} />
        <Route path='hourly' element={<Hourly />} />
        <Route path='forecast' element={<Forecast />} />
        <Route path='radar' element={<Radar />} />
        <Route path='tomorrow' element={<Tomorrow />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
