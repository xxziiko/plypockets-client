'use client'
import styled, { css } from 'styled-components'
import { RoundButtonFooter, Typography } from '@/components'
import { flexStart } from '@/styles/common'

export default function LoginLayout({ children }) {
  const styles = {
    buttonBackgroundColor: ({ theme }) => theme.colors.subGreen,
    backgroundColor: ({ theme }) => theme.colors.white,
  }

  return (
    <>
      <Header>
        <Typography
          size={({ theme }) => theme.fontSize.h1}
          weight={({ theme }) => theme.fontWeight.large}
          spacing={-1.28}
        >
          플리보따리
          <br />
          만들기 전에
          <br />
          로그인 부터
        </Typography>
      </Header>

      <Main>{children}</Main>

      <RoundButtonFooter
        nextUrl={'/main'}
        styles={styles}
        buttonCommand="네"
        text="로그인을 완료했나요?"
      />
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
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  width: 100%;
  height: 100%;
  padding: 43px 32px 0;
`
