'use client'
import { MainHeader } from '@/components'
import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'

export default function GiftListLayout({ children }) {
  return (
    <Box>
      <MainHeader />
      <Main>{children}</Main>
    </Box>
  )
}

const Box = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url('/img/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  overflow: auto;

  ${flexDirection}
`

const Main = styled.main`
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  width: 100%;
  height: 100%;
`
