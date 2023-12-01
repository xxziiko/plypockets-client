'use client'
import styled, { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyle'
import theme from '@/styles/theme'

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <html>
          <Body suppressHydrationWarning={true}>{children}</Body>
        </html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

const Body = styled.body`
  display: flex;
  justify-content: center;
  height: 100vh;
`
