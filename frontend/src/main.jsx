import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element: <App/>,
    },
    {
      path:'/register',
      element: <Register/>,
    },
    {
      path:'/login',
      element: <Login/>,
    }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
