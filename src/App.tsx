import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import createStore from './redux/store/configureStore'
import Home from './pages/home/Home'

const store = createStore({})

const App = (): ReactElement => {
  return (
    <Provider store={store}>
    <Home />
    </Provider>
  )
}

export default App
