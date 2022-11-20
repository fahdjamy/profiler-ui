import React, { ReactElement } from 'react'
import createStore from './redux/store/configureStore'
import { Provider } from 'react-redux'

import './App.css'
import Home from './pages/home/Home'
// import AppRoute from './routes/AppRoutes'

const store = createStore({})

const App = (): ReactElement => {
  return (
    <Provider store={store}>
    <Home />
    {/* <AppRoute /> */}
    </Provider>
  )
}

export default App
