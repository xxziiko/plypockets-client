'use client'
import styled, { css, ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/theme'
import { flexAlign } from '@/styles/common'

import { Aside } from '@/components/Aside'

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Html>
          <Body suppressHydrationWarning={true}>
            <Aside />
            <Main>{children}</Main>
          </Body>
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
  width: 100vw;
  display: flex;
  padding: 0 200px;
  justify-content: space-between;
  @media screen and (max-width: 854px) {
    justify-content: center;
  }
`

const Main = styled.main`
  position: relative;
  flex-direction: column;
  min-width: 375px;
  width: 375px;
  height: 100vh;
  overflow: auto;
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  ${flexAlign};
  background-color: #ffffff;
`
