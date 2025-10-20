import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Register from "./components/Register";
import Login from './components/Login'
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      Component:Layout,
      children:[
        {
         index:true,
         Component:Home
        },
        {
          path:'/register',
          Component:Register
        },
         {
          path:'/login',
          Component:Login
        }
      ]
    }
  ])
 
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
