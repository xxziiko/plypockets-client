'use client'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useButtonStore } from '@/stores/buttons'
import { InputForm } from '@/components'
import { useState } from 'react'
import { ERROR_MESSAGE } from '@/lib/constants'

export default function Login() {
  const [isError, setIsError] = useState({ id: true, pw: true })
  const [errorMessage, setErrorMessage] = useState({
    id: ERROR_MESSAGE.ID?.default,
    pw: ERROR_MESSAGE.PW?.default,
  })
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    password: '',
  })
  const { setButtonDisable } = useButtonStore()

  const onChange = (e) => {
    const { name, value } = e.target

    setUserInfo({ ...userInfo, [name]: value })
    console.log(name, value)
  }

  useEffect(() => {
    if (!userInfo.nickname) {
      setErrorMessage({
        ...errorMessage,
        id: ERROR_MESSAGE.ID?.default,
      })
      return
    }

    if (userInfo.nickname.length < 2 || userInfo.nickname.length > 8) {
      setIsError({ ...isError, id: true })
      setErrorMessage({ ...errorMessage, id: ERROR_MESSAGE.ID.invalid })
      return
    }

    setIsError({ ...isError, id: false })
    setErrorMessage({ ...errorMessage, id: ERROR_MESSAGE.ID.success })
  }, [userInfo.nickname])

  useEffect(() => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/

    if (!userInfo.password) {
      setErrorMessage({
        ...errorMessage,
        pw: ERROR_MESSAGE.PW?.default,
      })
      return
    }

    if (
      userInfo.password.length < 8 ||
      !passwordRegex.test(userInfo.password)
    ) {
      setIsError({ ...isError, pw: true })
      setErrorMessage({ ...errorMessage, pw: ERROR_MESSAGE.PW.invalid })
      return
    }

    setIsError({ ...isError, pw: false })
    setErrorMessage({ ...errorMessage, pw: ERROR_MESSAGE.PW.success })
  }, [userInfo.password])

  useEffect(() => {
    if (!isError.id && !isError.pw) setButtonDisable(false)
    else setButtonDisable(true)
  }, [isError.id, isError.pw])

  return (
    <>
      <Section>
        <InputForm
          label="닉네임"
          placeholder="나의 닉네임은?"
          name="nickname"
          errorMessage={errorMessage.id}
          inputValue={userInfo.nickname}
          onChange={onChange}
        />

        <InputForm
          label="비밀번호"
          placeholder="쉿! 들키지 않게 조심"
          name="password"
          errorMessage={errorMessage.pw}
          inputValue={userInfo.password}
          onChange={onChange}
        />
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
