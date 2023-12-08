'use client'
import styled, { css, ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/theme'
import { flexAlign } from '@/styles/common'

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Html>
          <Body suppressHydrationWarning={true}>{children}</Body>
        </Html>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}

const Html = styled.html`
  display: flex;
  justify-content: center;
  overflow: hidden;
`

const Body = styled.body`
  flex-direction: column;
  width: 375px;
  height: 100vh;
  overflow: auto;
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  ${flexAlign};

  border: 1px solid red;
`
