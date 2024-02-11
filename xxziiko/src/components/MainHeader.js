'use client'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { useHeaderStore } from '@/stores/headers'
import { flexDirection, flexStart } from '@/styles/common'
import Typography from './Typography'
import GoBackIcon from '@/icons/GoBackIcon'
import { useEffect } from 'react'

export default function MainHeader(props) {
  const { title, goToBack } = props
  const { hasToken, isViewText } = useHeaderStore()

  return (
    <Header>
      <TextBox>
        <Typography
          size={({ theme }) => theme.fontSize.h2}
          weight={({ theme }) => theme.fontWeight.large}
          spacing={-1.28}
          color={({ theme }) => theme.colors.white}
        >
          {title}
        </Typography>

        {(isViewText || !hasToken) && (
          <Typography
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-0.64}
            color={({ theme }) => theme.colors.white}
          >
            친구들이 선물한 플리를 확인해보세요!
          </Typography>
        )}
      </TextBox>

      <IconBox as="button" onClick={() => goToBack()}>
        <GoBackIcon color="#ECECEC" />
      </IconBox>
    </Header>
  )
}

const Header = styled.header`
  justify-content: space-between;
  width: 100%;
  min-height: 176px;
  padding: 32px 32px 40px;
  z-index: 1;
  ${flexStart}
`

const TextBox = styled.div`
  gap: 16px;

  ${flexDirection}
`

const IconBox = styled.div`
  text-align: right;
  cursor: pointer;
`
