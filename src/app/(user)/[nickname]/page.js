'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { flexAlign, flexCenter, flexDirection } from '@/styles/common'
import {
  Typography,
  RoundBox,
  DefaultButton,
  ToastPopUp,
  GiftBundle,
} from '@/components'
import { useHeaderStore } from '@/stores/headers'
import { useButtonStore } from '@/stores/buttons'
import ShareIcon from '@/icons/ShareIcon'

export const MOCK = [
  { id: 0, nickname: '짐니', date: '2023-12-01' },
  { id: 3, nickname: '발리', date: '2023-12-02' },
  { id: 2, nickname: '은정', date: '2023-12-12' },
  { id: 1, nickname: '하와이', date: '2023-12-23' },
  { id: 4, nickname: '괌', date: '2023-12-24' },
  { id: 5, nickname: '괌', date: '2023-12-24' },
  { id: 6, nickname: '괌', date: '2023-12-24' },
  { id: 7, nickname: '괌', date: '2023-12-24' },
  { id: 8, nickname: '괌', date: '2023-12-24' },
  { id: 9, nickname: '괌', date: '2023-12-24' },
  { id: 10, nickname: '괌', date: '2023-12-24' },
]

export default function Main({ params }) {
  const { hasToken, setHasToken } = useHeaderStore()
  const { setIsCopyClipboard } = useButtonStore()
  const router = useRouter()
  const decodedParams = decodeURI(params.nickname)

  const goToMyPack = () => {
    router.push('/account', undefined, { shallow: true })
  }

  const goToPlaylist = () => {
    router.push('/playlist', undefined, { shallow: true })
  }

  useEffect(() => {
    // test
    setHasToken(true)
  }, [])

  return (
    <Box>
      {/*  user가 아닐 때  */}
      {!hasToken && (
        <NoTokenSection>
          <RoundBox
            as="button"
            width="191px"
            buttonCommand="선물하러 가기"
            IconColor="#F84A68"
            onClick={goToPlaylist}
          />
          <DefaultButton
            color="#323232"
            command="내 플리 보따리 가기"
            isShowIcon
            backgroundColor="#fff"
            onClick={goToMyPack}
          />
        </NoTokenSection>
      )}

      {/* user일 때 */}
      {hasToken && (
        <Section>
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
          <Typography color={({ theme }) => theme.colors.green} weight={700}>
            보따리를 눌러 선물을 확인해보세요!
          </Typography>
        </Section>
      )}

      <GiftBundle data={MOCK} nickname={decodedParams} />
      <ToastPopUp />
    </Box>
  )
}

const Box = styled.div`
  flex-direction: column;
  height: 100%;
  padding: 0 32px;

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
  gap: 16px;
  z-index: 999;

  ${flexDirection}
`

const Section = styled.section`
  gap: 16px;

  ${flexDirection}
`
