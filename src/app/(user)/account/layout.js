'use client'
import styled, { css } from 'styled-components'
import { DefaultButton, Typography } from '@/components'
import { flexStart } from '@/styles/common'
import { useRouter } from 'next/navigation'
import { useButtonStore } from '@/stores/buttons'
import { useHeaderStore } from '@/stores/headers'

export default function LoginLayout({ children }) {
  const { buttonDisable } = useButtonStore()
  const { nickname } = useHeaderStore()
  const router = useRouter()

  const goToAccount = () => {
    router.push(`/${nickname}`, undefined, { shallow: true })
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
        </Typography>
      </Header>

      <Main>{children}</Main>
      <ButtonBox>
        <DefaultButton
          command="플리보따리 방 입장하기"
          color="#fff"
          backgroundColor={({ theme }) => theme.colors.green}
          onClick={goToAccount}
          isButtonDisable={buttonDisable}
        />
      </ButtonBox>
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

const ButtonBox = styled.div`
  padding-bottom: 48px;
`
