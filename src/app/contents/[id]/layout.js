'use client'

import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'

import Footer from '@/components/Footer'

// meta tag for SEO

export default function ContentDetailLayout({ children }) {
  return (
    <Container>
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  ${flexDirection}

  background-color: #f9f9f9;

  width: 100%;
  padding-top: 32px;
  color: ${({ theme }) => theme.colors.black};
`

const Main = styled.main`
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  width: 100%;
  height: 100%;
`
