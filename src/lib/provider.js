'use client'

import StyledComponentsRegistry from './registry'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/styles/GlobalStyle'
import theme from '@/styles/theme'

const Providers = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

export default Providers
