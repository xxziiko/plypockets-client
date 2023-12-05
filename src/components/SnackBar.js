import { useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import Image from 'next/image'
import { flexCenter } from '@/styles/common'
import { useHeaderStore } from '@/stores/headers'
import Typography from './Typography'

export default function SnackBar() {
  const { isCopyClipboard, setIsCopyClipboard } = useHeaderStore()

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
          <ImgBox>
            <Image src={'/assets/CheckIcon.svg'} width={24} height={24} />
          </ImgBox>

          <Typography
            size={({ theme }) => theme.fontSize.medium}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.8}
            color={({ theme }) => theme.colors.highlight}
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
    transform: translateY(5px);
    opacity: 0;
  }
  50% {
    transform: translateY(0); 
    opacity: 0.9;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 100%;
  padding-bottom: 37px;

  z-index: 999;
`

const Card = styled.div`
  width: 311px;
  padding: 18px 16px;
  gap: 10px;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(40px);
  animation: ${css`
    ${slideInFromBottom} 4s
  `};
  ${flexCenter};
`

const ImgBox = styled.div`
  width: 24px;
  height: 24px;
`
