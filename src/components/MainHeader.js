'use client'
import styled from 'styled-components'
import { flexStart } from '@/styles/common'
import Typography from './Typography'
import { useRouter } from 'next/navigation'
import GoBackIcon from '@/icons/GoBackIcon'

export default function MainHeader() {
  const router = useRouter()

  const handleAction = () => {}

  return (
    <Header>
      <Typography
        size={({ theme }) => theme.fontSize.h2}
        weight={({ theme }) => theme.fontWeight.large}
        spacing={-1.44}
        color={({ theme }) => theme.colors.white}
      >
        샌디의
        <br />
        플리 보따리
      </Typography>

      <IconBox as="button" onClick={() => handleAction()}>
        <GoBackIcon color="#ECECEC" />
      </IconBox>
    </Header>
  )
}

const Header = styled.header`
  justify-content: space-between;
  width: 100%;
  padding: 32px 32px 40px;

  ${flexStart}
`

const IconButton = styled.div`
  padding: 0;
  cursor: pointer;
`

const IconBox = styled.div`
  text-align: right;
  cursor: pointer;
`
