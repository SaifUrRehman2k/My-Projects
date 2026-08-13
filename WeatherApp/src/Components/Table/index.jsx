import React from 'react'

const Table = ({ children }) => {
  return (
    <div className='flex flex-col flex-wrap justify-around w-full sm:w-50 h-auto'>
      { children }
    </div>
  )
}

export default Table
