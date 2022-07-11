import React from 'react'

import StyledApp from './App.styled'
import theme from './theme.styled'
import GlobalStyles from './globals.styled'
import { ThemeProvider } from 'styled-components'

import CounterContainer from '../components/CounterContainer/CounterContainer'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <CounterContainer />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App