'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { flexAlign, flexCenter, flexDirection } from '@/styles/common'
import { Typography, RoundBox } from '@/components'
import { useHeaderStore } from '@/stores/headers'
import ShareIcon from '@/icons/ShareIcon'

export default function Main() {
  const { setIsCopyClipboard, hasToken } = useHeaderStore()
  const [isNextStep, setIsNextStep] = useState(false)
  const router = useRouter()

  const goToMyPack = () => {
    setIsNextStep(true)
  }

  const goToPlaylist = () => {
    router.push('/playlist', undefined, { shallow: true })
  }

  return (
    <Box>
      {/*  user가 아닐 때  */}
      {!hasToken &&
        (!isNextStep ? (
          <NoTokenSection>
            <RoundBox
              as="button"
              width="191px"
              buttonCommand="선물하러 가기"
              IconColor="#F84A68"
              onClick={goToPlaylist}
            />
            <RoundBox
              as="button"
              width="191px"
              buttonCommand="내 보따리 방 보기"
              IconColor="#00C496"
              onClick={goToMyPack}
            />
          </NoTokenSection>
        ) : (
          <section>ddd</section>
        ))}

      {/* user일 때 */}
      {hasToken && (
        <section>
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
              <ShareIcon color="#323232" />
            </ShareButton>
          </CopyToClipboard>
        </section>
      )}
    </Box>
  )
}

const Box = styled.div`
  flex-direction: column;
  height: 100%;

  gap: 8px;
  ${flexAlign}
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

const NoTokenSection = styled.section`
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 144px;
  gap: 16px;
  z-index: 999;

  ${flexDirection}
`
