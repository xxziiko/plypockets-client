'use client'
import { useEffect } from 'react'
import styled from 'styled-components'

import { Typography, InputForm, TextButton } from '@/components'
import { flexDirection } from '@/styles/common'
import { useHeaderStore } from '@/stores/headers'

export default function Main() {
  const {
    isShowInputTools,
    isShowTextButtons,
    setIsShowInputTools,
    setIsTextButtons,
    setIsShowGiftList,
  } = useHeaderStore()

  const goToMyPack = () => {
    setIsShowInputTools(true)
    setIsTextButtons(false)
    setIsShowGiftList(false)
  }

  const sendGiftToUser = () => {}

  useEffect(() => {
    setIsTextButtons(true)
  }, [])

  return (
    <Box>
      {isShowTextButtons && (
        <ButtonBox>
          <TextButton
            color={({ theme }) => theme.colors.white}
            colorType="grey"
            buttonCommand="내 보따리 보러가기"
            buttonAction={goToMyPack}
          />
          <TextButton
            color={({ theme }) => theme.colors.red}
            buttonCommand="샌디에게 선물하러 가기"
            colorType="red"
          />
        </ButtonBox>
      )}

      {isShowInputTools && (
        <>
          <Typography
            size={({ theme }) => theme.fontSize.medium}
            weight={({ theme }) => theme.fontWeight.medium}
            color={({ theme }) => theme.colors.white}
            spacing={-0.8}
          >
            샌디 님이신가요?
            <br /> 비밀번호를 입력하고 확인해보세요
          </Typography>

          <InputForm />
        </>
      )}
    </Box>
  )
}

const Box = styled.div`
  gap: 54px;
  ${flexDirection}
`
const ButtonBox = styled.div`
  gap: 11px;
  ${flexDirection}
`
