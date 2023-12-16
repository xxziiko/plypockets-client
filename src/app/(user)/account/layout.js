'use client'
import styled, { css } from 'styled-components'
import { DefaultButton, Typography, SnowBox } from '@/components'
import { flexStart } from '@/styles/common'
import { useRouter } from 'next/navigation'
import { useButtonStore } from '@/stores/buttons'
import { useUserInfoStore, useUserInputStore } from '@/stores/userInfo'
import { sendPostLogin } from '@/api/services'
import { ERROR_MESSAGE } from '@/lib/constants'

export default function LoginLayout({ children }) {
  const { buttonDisable } = useButtonStore()
  const { userInputValue, setErrorMessage } = useUserInputStore()
  const { setUserInfo } = useUserInfoStore()
  const router = useRouter()

  const goToAccount = () => {
    sendPostLogin(userInputValue).then(
      (res) => {
        setUserInfo({ userInfo: res })
        router.push(`/${res.nickname}`, undefined, { shallow: true })
      },
      (error) => {
        console.log('error', error.data.message)
        if (error)
          setErrorMessage({
            id: ERROR_MESSAGE.ID.duplicated,
            pw: ERROR_MESSAGE.PW.incorrect,
          })
      },
    )
  }

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
  position: relative;
  width: 100%;
  height: 100%;
  padding: 43px 32px 0;
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  z-index: 0;
`

const ButtonBox = styled.div`
  padding-bottom: 48px;
  z-index: 0;
`
