'use client'
import { useEffect } from 'react'
import styled, { css } from 'styled-components'
import { useButtonStore } from '@/stores/buttons'
import { RoundInput, Typography } from '@/components'
import { flexSpaceBetween } from '@/styles/common'
import { useState } from 'react'

export default function Login() {
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    password: '',
  })
  const { setButtonDisable } = useButtonStore()

  useEffect(() => {
    // setButtonDisable(true)
  }, [])

  return (
    <>
      <Section>
        <InputLayout>
          <Typography
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.64}
          >
            닉네임
          </Typography>
          <RoundInput placeholder="나의 닉네임은?" />
        </InputLayout>

        <InputLayout>
          <Typography
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.64}
          >
            비밀번호
          </Typography>
          <RoundInput placeholder="쉿! 들키지 않게 조심" />
        </InputLayout>
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const InputLayout = styled.div`
  width: 100%;

  ${flexSpaceBetween}
`
