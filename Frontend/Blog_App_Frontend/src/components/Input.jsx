import React from 'react'

function Input(props,type ="text") {
  return (
    <input type={type} {...props} />
  )
}

export default Input