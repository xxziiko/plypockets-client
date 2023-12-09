'use client'
import { MainHeader, ToastPopUp, GiftBundle } from '@/components'
import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'

export default function MainLayout({ children }) {
  const title = (
    <>
      샌디의
      <br />
      플리 보따리
    </>
  )

  return (
    <Box>
      <MainHeader title={title} />
      <Main>{children}</Main>
      <GiftBundle />
      <ToastPopUp />
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

  ${flexDirection}
`

const Main = styled.main`
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  width: 100%;
  height: 100%;
  padding: 0 32px;
`
