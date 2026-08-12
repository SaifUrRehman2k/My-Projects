import React from 'react'

const Seacrh = (props) => {
  return (
    < >
      <input className={`p-2 w-80 text-[0.8em] text-gray-700 bg-gray-300 border-none rounded-4xl visited:outline-1 outline-blue-200 ${props.class}`}type="search" name="search" id="searchCity" placeholder='Search'/>
    </>
  )
}

export default Seacrh
