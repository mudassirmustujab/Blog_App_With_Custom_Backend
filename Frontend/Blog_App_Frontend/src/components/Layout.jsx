import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Header/Navbar'
function Layout() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet/>

    </>
)
}

export default Layout