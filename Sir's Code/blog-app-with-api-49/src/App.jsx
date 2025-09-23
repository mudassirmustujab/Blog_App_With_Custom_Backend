import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import AdminLayout from './components/admin/Layout'
import Authentication from './components/Authentication'
import Nav from './components/Nav'

export default function App() {
  return (
    <BrowserRouter>

      <Nav></Nav>
      <Routes>
          <Route path={"login"} element={<Login/>}></Route>
          <Route path={"register"} element={<Register/>}></Route>
          {/* Admin Routes */}
          <Route element={<Authentication/>}>
            <Route path='admin' element={<AdminLayout/>} >
                {/* <Route index  element={<L}></Route> */}

            </Route>
          </Route>

          {/* Admin Routes */}



      </Routes>
    
    </BrowserRouter>
  )
}
