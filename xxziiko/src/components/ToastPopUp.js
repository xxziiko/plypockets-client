import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { flexCenter } from '@/styles/common'
import { useButtonStore } from '@/stores/buttons'
import CheckRoundIcon from '@/icons/CheckIcon'
import { Typography } from '@/components'

export default function ToastPopUp() {
  const { isCopyClipboard, setIsCopyClipboard } = useButtonStore()

  useEffect(() => {
    if (isCopyClipboard) {
      setTimeout(() => {
        setIsCopyClipboard(false)
      }, 4000)
    }
  }, [isCopyClipboard])

  return (
    <Box>
      {isCopyClipboard && (
        <Card>
          <div>
            <CheckRoundIcon />
          </div>

          <Typography
            size={({ theme }) => theme.fontSize.medium}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.8}
            color={({ theme }) => theme.colors.green}
          >
            링크 복사 완료
          </Typography>
        </Card>
      )}
    </Box>
  )
}

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(35px);
    opacity: 0.5;
  }
  30% {
    transform: translateY(0); 
    opacity: 1;
  }
  100% {
    transform: translateY(150px);
    opacity: 1;
  }
`

const Box = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 375px;
  padding-bottom: 48px;
  /* border: 1px solid red; */

  z-index: 1;
`

const Card = styled.div`
  width: 311px;
  padding: 18px 16px;
  gap: 10px;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(40px);
  animation: ${slideInFromBottom} 5s;
  ${flexCenter};
`
