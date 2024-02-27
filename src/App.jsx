import React, { useState } from 'react'
import Login from './Component/Login'
import Body from './Component/Body'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Profile from './Component/Profile'

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
    element:<Login />
  },
  {
    path:"/nutrigen",
    element:<Body />,
  },
  {
    path:"/compeleteProfile",
    element:<Profile />
  }
])

export default App
