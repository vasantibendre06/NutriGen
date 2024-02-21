import React, { useState } from 'react'
import Login from './Component/Login'
import Body from './Component/Body'
import { Outlet, createBrowserRouter } from 'react-router-dom'

const App = () => {
  const [name, setName] = useState("Abhishek")
  return (
    <div>
      <Outlet />
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Login />setName("sdjddsdsd")
  },
  {
    path:"/nutrigen",
    element:<Body />
  }
])

export default App
