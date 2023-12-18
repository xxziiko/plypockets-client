'use client'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { sendPostLogin } from '@/api/services'
import { useButtonStore } from '@/stores/buttons'
import { InputForm, DefaultButton } from '@/components'
import { flexSpaceBetween } from '@/styles/common'
import { useUserInfoStore } from '@/stores/userInfo'
import { ERROR_MESSAGE } from '@/lib/constants'

export default function Login() {
  const { setButtonDisable, buttonDisable } = useButtonStore()
  const { setUserInfo } = useUserInfoStore()
  const [isError, setIsError] = useState({ id: true, pw: true })
  const [errorMessage, setErrorMessage] = useState({
    id: ERROR_MESSAGE.ID?.default,
    pw: ERROR_MESSAGE.PW?.default,
  })
  const [userInputValue, setUserInputValue] = useState({
    nickname: '',
    password: '',
  })
  const router = useRouter()

  const goToAccount = () => {
    console.log('userinfo', userInputValue)
    sendPostLogin(userInputValue)
      .then((res) => {
        setUserInfo({ userInfo: res })
        router.push(`/${res.nickname}`, undefined, { shallow: true })
      })
      .catch((error) => {
        if (error)
          setErrorMessage({
            id: ERROR_MESSAGE.ID.duplicated,
            pw: ERROR_MESSAGE.PW.incorrect,
          })
        return
      })
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setUserInputValue((prevUserInfo) => ({ ...prevUserInfo, [name]: value }))
  }

  useEffect(() => {
    if (!userInputValue.nickname) {
      setErrorMessage({
        ...errorMessage,
        id: ERROR_MESSAGE.ID?.default,
      })
      return
    }

    if (
      userInputValue.nickname.length < 2 ||
      userInputValue.nickname.length > 8
    ) {
      setIsError({ ...isError, id: true })
      setErrorMessage({ ...errorMessage, id: ERROR_MESSAGE.ID.invalid })
      return
    }

    setIsError({ ...isError, id: false })
    setErrorMessage({ ...errorMessage, id: ERROR_MESSAGE.ID.success })
  }, [userInputValue.nickname])

  useEffect(() => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

    if (!userInputValue.password) {
      setErrorMessage({
        ...errorMessage,
        pw: ERROR_MESSAGE.PW?.default,
      })
      return
    }

    if (
      userInputValue.password.length < 8 ||
      !passwordRegex.test(userInputValue.password)
    ) {
      setIsError({ ...isError, pw: true })
      setErrorMessage({ ...errorMessage, pw: ERROR_MESSAGE.PW.invalid })
      return
    }

    setIsError({ ...isError, pw: false })
    setErrorMessage({ ...errorMessage, pw: ERROR_MESSAGE.PW.success })
  }, [userInputValue.password])

  useEffect(() => {
    if (!isError.id && !isError.pw) setButtonDisable(false)
    else setButtonDisable(true)
  }, [isError.id, isError.pw])

  return (
    <Layout>
      <Section>
        <InputForm
          label="닉네임"
          placeholder="나의 닉네임은?"
          name="nickname"
          errorMessage={errorMessage.id}
          inputValue={userInputValue.nickname}
          onChange={onChange}
        />

        <InputForm
          label="비밀번호"
          placeholder="쉿! 들키지 않게 조심"
          name="password"
          errorMessage={errorMessage.pw}
          inputValue={userInputValue.password}
          onChange={onChange}
        />
      </Section>

      <ButtonBox>
        <DefaultButton
          command="플리보따리 방 입장하기"
          color="#fff"
          backgroundColor={({ theme }) => theme.colors.green}
          onClick={goToAccount}
          isButtonDisable={buttonDisable}
        />
      </ButtonBox>
    </Layout>
  )
}

const Layout = styled.div`
  flex-direction: column;
  ${flexSpaceBetween}
  height:100%
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ButtonBox = styled.div`
  padding-bottom: 48px;
  z-index: 0;
`
