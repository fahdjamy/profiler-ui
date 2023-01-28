import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, About, Portifolio, Services, Contact, Blog, SingleBlogPage } from '../pages'

export interface IRoutes {
  component: ReactElement | undefined
  route: undefined | string
}

const AppRoute: React.FC = () => {
  const appRoute: IRoutes[] = [
    {
      component: <Home />,
      route: '/'
    },
    {
      component: <About/>,
      route: '/about'
    },
    {
      component: <Portifolio/>,
      route: '/portfolio'
    },
    {
      component: <Blog />,
      route: '/blog'
    },
    {
      component: <Contact />,
      route: '/contact'
    },
    {
      component: <Services />,
      route: '/services'
    },
    {
      component: <SingleBlogPage />,
      route: '/blog/:id'
    }

  ]
  return (
    <BrowserRouter>
      <Routes>
        {
          appRoute.map(({ route, component }) => (
            <Route key={route} path={route} element={component} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoute
