import React from 'react'

function Input({register, registerValue,errors, ...rest}) {
  return (
    <>
    <input {...register(registerValue)} className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:text-gray-800 ${
        errors ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
      }`} {...rest} defaultValue={'Testing'}/>
    </>
  )
}

export default Input