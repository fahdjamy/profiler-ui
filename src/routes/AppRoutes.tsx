import React from 'react'
import { useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Home from '../pages/home/Home'
import About from '../pages/About'

const AppRoute: React.FC = () => {
  const route: RouteObject[] = [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    }
  ]
  return useRoutes(route)
}
export default AppRoute
