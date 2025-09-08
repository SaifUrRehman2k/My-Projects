import React from 'react'

const Table = ({ children }) => {
  return (
    <div className='flex flex-col flex-wrap justify-around w-50'>
      { children }
    </div>
  )
}

export default Table
