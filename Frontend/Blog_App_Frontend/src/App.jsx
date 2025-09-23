import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import Register from "./components/Register";
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
