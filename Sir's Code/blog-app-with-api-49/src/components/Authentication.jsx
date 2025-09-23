import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Authentication() {

  let isToken = localStorage.getItem('myToken')
  console.log(isToken);
  return (
    <div>{isToken ? <Outlet/> :<Navigate to="/login"></Navigate>}</div>
  )
}
