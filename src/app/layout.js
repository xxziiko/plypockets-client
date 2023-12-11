'use client'
import styled, { css, ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/theme'
import { flexAlign } from '@/styles/common'

import { Aside } from '@/components/Aside'

import {
  DESKTOP_WIDTH,
  MOBILE_MAX_WIDTH,
  MOBILE_MIN_WIDTH,
} from '@/lib/constants'

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Html>
          <Body suppressHydrationWarning={true}>
            <Layout>
              <Aside />
              <Main>{children}</Main>
            </Layout>
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
  justify-content: center;
`

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${DESKTOP_WIDTH - 1}px) {
    justify-content: center;
  }
`

const Main = styled.main`
  position: relative;
  flex-direction: column;
  min-width: ${MOBILE_MIN_WIDTH}px;
  max-width: ${MOBILE_MAX_WIDTH}px;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  ${flexAlign};
  background-color: #ffffff;
`
