import React from 'react'
import { RouterProvider } from 'react-router'
import { routes } from './Routes/Routes.jsx'

const App = () => {
  return (
    <>
      <RouterProvider router = {routes} />
    </>
  )
}

export default App