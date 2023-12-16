import { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { flexCenter } from '@/styles/common'
import { useButtonStore } from '@/stores/buttons'
import CheckRoundIcon from '@/icons/CheckIcon'
import { Typography } from '@/components'

export default function AccountToastPopUp() {
  const { isAccountPopupOpen, setIsAccountPopupOpen } = useButtonStore()

  useEffect(() => {
    if (isAccountPopupOpen) {
      setTimeout(() => {
        setIsAccountPopupOpen(false)
      }, 4000)
    }
  }, [isAccountPopupOpen])

  return (
    <Box>
      {isAccountPopupOpen && (
        <Card>
          <Typography
            size={'14px'}
            weight={600}
            spacing={-0.56}
            color={({ theme }) => theme.colors.white}
          >
            비밀번호 찾기는 아래 이메일로 문의주세요.
          </Typography>
          <Typography
            style={{
              textDecoration: 'underline',
            }}
            size={'16px'}
            weight={600}
            spacing={-0.64}
            color={({ theme }) => theme.colors.white}
          >
            {/* bold & underline */}
            plypockets@gmail.com
          </Typography>
        </Card>
      )}
    </Box>
  )
}

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(35px);
    opacity: 0;
  }
  30% {
    transform: translateY(0); 
    opacity: 1;
  }
  100% {
    transform: translateY(150px);
    opacity: 0;
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
  height: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--main_green, #00916f);
  backdrop-filter: blur(40px);
  animation: ${slideInFromBottom} 5s;
  ${flexCenter};
`
