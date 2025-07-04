import React from 'react'

const Input = ({type, className, ...data}) => {
  return (
    <>
    <input 
    type={type} 
    {...data}
    className= {`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />
    </>
  )
}

export default Input