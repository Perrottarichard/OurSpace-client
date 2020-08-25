import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppThemeProvider from './contexts/AppThemeContext'

ReactDOM.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
  , document.querySelector('#root'))