'use client'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { flexAlign, flexCenter } from '@/styles/common'
import { Typography } from '@/components'
import { useHeaderStore } from '@/stores/headers'
import ShareIcon from '@/icons/ShareIcon'

export default function Main() {
  const { setIsCopyClipboard } = useHeaderStore()
  return (
    <Box>
      <TextBox>
        <Typography
          size={({ theme }) => theme.fontSize.small}
          weight={600}
          spcing={-0.64}
          color={({ theme }) => theme.colors.white}
        >
          플리 보따리 방에 담긴 선물
        </Typography>
        <Typography
          size={({ theme }) => theme.fontSize.large}
          weight={600}
          spcing={-0.64}
          color={({ theme }) => theme.colors.white}
        >
          {}개
        </Typography>
      </TextBox>

      <CopyToClipboard
        text="copy 테스트입니당"
        onCopy={() => setIsCopyClipboard(true)}
      >
        <ShareButton>
          <p>친구에게 링크 공유</p>
          <ShareIcon />
        </ShareButton>
      </CopyToClipboard>
    </Box>
  )
}

const Box = styled.div`
  flex-direction: column;
  gap: 8px;
  ${flexCenter}
`
const TextBox = styled.div`
  display: flex;
  gap: 8px;
  ${flexAlign}
`
const ShareButton = styled.button`
  gap: 8px;
  width: 186px;
  height: 40px;
  border-radius: 64px;
  background: #fff;
  font-weight: 600;
  letter-spacing: -0.64px;

  ${flexCenter}
`
