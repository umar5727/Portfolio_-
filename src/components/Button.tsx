import React from 'react'

export default function Button({children}:any) {
  return (
    <button className='px-4 py-1 bg-purple-800 rounded-md text-white font-semibold duration-300  hover:text-purple-800 hover:bg-white '>
      {children}
    </button>
  )
}
