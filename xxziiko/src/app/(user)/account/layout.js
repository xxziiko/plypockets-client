'use client'
import styled, { css } from 'styled-components'
import { Typography, SnowBox } from '@/components'
import { flexStart } from '@/styles/common'

export default function LoginLayout({ children }) {
  return (
    <>
      <SnowBox />
      <Header>
        <Typography
          size={({ theme }) => theme.fontSize.h1}
          weight={({ theme }) => theme.fontWeight.large}
          spacing={-1.28}
        >
          플리보따리
          <br />
          만들기 전에
        </Typography>
      </Header>

      <Main id="account">{children}</Main>
    </>
  )
}

const Header = styled.header`
  width: 100%;
  padding: 27px 32px;
  gap: 105px;

  ${flexStart}
`

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 43px 32px 0;
  background-color: transparent;
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
`
