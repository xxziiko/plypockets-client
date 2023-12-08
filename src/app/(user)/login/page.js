'use client'
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useButtonStore } from '@/stores/buttons'
import { InputForm } from '@/components'
import { useState } from 'react'
import { ERROR_MESSAGE } from '@/lib/constants'

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    password: '',
  })
  const { setButtonDisable } = useButtonStore()

  console.log('ERROR_MESSAGE.ID.default', ERROR_MESSAGE.ID.default)

  useEffect(() => {
    // setButtonDisable(true)
  }, [])

  return (
    <>
      <Section>
        <InputForm
          label="닉네임"
          placeholder="나의 닉네임은?"
          errorMessage={ERROR_MESSAGE.ID.default}
        />

        <InputForm label="비밀번호" placeholder="쉿! 들키지 않게 조심" />
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
