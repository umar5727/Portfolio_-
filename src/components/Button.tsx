import React from 'react'
  interface buttoninterface{
  children:React.ReactNode, 
  className?:string,
  a?:string
 }
export default function Button({children, className,a}:buttoninterface) {
  return (
    <button className={`px-4 py-1 bg-purple-800 rounded-md text-white font-semibold duration-300  hover:text-purple-800 hover:bg-white ${className}`}>
      {children}
    </button >
  )
}
