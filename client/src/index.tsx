import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { CssBaseline } from '@mui/material'

import App from './App'
import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
