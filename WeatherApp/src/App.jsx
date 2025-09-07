import { useState } from 'react'
import './App.css'
import Header from './Components/Header/index.jsx'
import Navbar from './Components/Navbar/index.jsx'
import Card from './Components/Card/index.jsx'

function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <div className='flex flex-col flex-wrap align-middle justify-start mt-8 ml-5'>
        <Card>
          <div className='flex flex-col flex-wrap gap-1'>
            <h1>Partially Cloudy <b>Lo: 25°C</b></h1>
            <h1>Tomorrow, Sunny <b>Hi: 35°C</b></h1>
          </div>
        </Card>
      </div>
    </>
  )
}

export default App
