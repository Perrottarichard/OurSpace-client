import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppThemeContext } from './contexts/AppThemeContext'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { themeVars } from './styles/theme'
import Join from './components/Join'
import Chat from './components/Chat'

const App = () => {
  const { theme } = useContext(AppThemeContext)
  return (
    <ThemeProvider theme={{ ...theme, ...themeVars }}>
      <GlobalStyle />
      <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' component={Chat} />
      </Router >
    </ThemeProvider>
  )
}

export default App
