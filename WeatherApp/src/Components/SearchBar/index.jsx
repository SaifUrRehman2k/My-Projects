import React from 'react'

const Seacrh = (props) => {
  return (
    < >
      <input className={`p-2 w-80 text-[0.8em] border-gray-800 border-2 rounded-4xl visited:outline-1 outline-blue-500 ${props.class}`}type="search" name="search" id="searchCity" placeholder='Search'/>
    </>
  )
}

export default Seacrh
