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


function App() {
  // const [callValue, setCallValue] = useState(false)
  // const [mapUrl, setmapUrl] = useState()

  // useEffect(() => {
  //   const url = 'https://api.tomorrow.io/v4/map/tile/{z}/{x}/{y}/precipitationIntensity/now.png?apikey=ycdWwVV6iAKxsN6OZkEaA39DTQ7SQCjA'
  //   setmapUrl(url)
  // }, [callValue])
  // useEffect(()=> {
  //   fetch('http://api.weatherapi.com/v1/current.json?key=b173fbed748442109b2110753250809&q=Karachi')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  // },[])



  return (
    <>
      <Header />
      <Navbar />


      

      <Routes>
        <Route path='' element={<Today/>}/>
        <Route path='hourly' element={<Hourly/>}/>
        <Route path='forecast' element={<Forecast/>}/>
        <Route path='radar' element={<Radar/>}/>
        <Route path='tomorrow' element={<Tomorrow/>}/>

      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
