import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { flexCenter } from '@/styles/common'
import { Typography } from '@/components'
import { useButtonStore } from '@/stores/buttons'

export default function CircleButton(props) {
  const { text, backgroundColor, nextUrl } = props
  const { buttonDisable } = useButtonStore()
  const router = useRouter()

  return (
    <CircleIcon
      backgroundColor={
        buttonDisable ? ({ theme }) => theme.colors.grey : backgroundColor
      }
      onClick={() => router.push(nextUrl)}
      disabled={buttonDisable}
    >
      <Typography
        size={({ theme }) => theme.fontSize.medium}
        weight={({ theme }) => theme.fontWeight.medium}
        spacing={-0.8}
      >
        {text}
      </Typography>
    </CircleIcon>
  )
}

const CircleIcon = styled.button`
  width: 71px;
  height: 71px;
  border-radius: 50%;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  ${flexCenter};
`
