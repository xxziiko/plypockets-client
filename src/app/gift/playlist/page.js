'use client'

import styled from 'styled-components'
import { GiftHeader } from '@/components'
import theme from '@/styles/theme'

export default function PlaylistPage() {
  return (
    <>
      <GiftHeader
        title="노래 선물하기"
        subTitle="당신이 선물하고 싶은 노래는?"
        colors={{ button: theme.colors.bgGreen }}
      />
      <InputWrapper>
        <input />
      </InputWrapper>
    </>
  )
}

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 312px;
  height: 40px;
  padding: 0px 16px;
`
