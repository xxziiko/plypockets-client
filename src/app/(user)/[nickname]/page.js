'use client'
import { useEffect, useState } from 'react'
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
  SnowBox,
} from '@/components'
import { useButtonStore } from '@/stores/buttons'
import ShareIcon from '@/icons/ShareIcon'
import { useUserInfoStore } from '@/stores/userInfo'
import { getBoxes, getPlaylist } from '@/api/services'
import { useGiftStore } from '@/stores/gift'

export default function Main({ params }) {
  const { userInfo } = useUserInfoStore()
  const { setIsCopyClipboard, isCopyClipboard } = useButtonStore()
  const { setNickname } = useGiftStore()
  const router = useRouter()
  const [isAuth, setIsAuth] = useState(false)
  const [decodedParams, setDecodedParams] = useState('')
  const [isClickable, setIsClickable] = useState(false)
  const [bundles, setBundles] = useState([])

  const goToMyPack = () => {
    router.push('/account', undefined, { shallow: true })
  }

  const goToPlaylist = () => {
    router.push(`/gift/playlist`, undefined, { shallow: true })
  }

  useEffect(() => {
    setDecodedParams(decodeURI(params.nickname))

    if (userInfo?.nickname === decodeURI(params.nickname)) {
      setIsAuth(true)
      getPlaylist(userInfo.userId).then((res) => {
        if (res) {
          setBundles(res.results)
          setIsClickable(true)
        }
      })
      return
    }

    sessionStorage.removeItem('user-storage')

    if (!userInfo?.nickname) {
      setNickname(decodeURI(params.nickname))
      getBoxes(decodeURI(params.nickname)).then((res) => {
        if (res) setBundles(res.results)
      })
    }
  }, [userInfo])

  return (
    <>
      {isAuth && (
        <>
          <Box>
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
                  {bundles?.length || 0}개
                </Typography>
              </TextBox>

              <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_BASE_URL}/${userInfo.nickname}`}
                onCopy={() => setIsCopyClipboard(true)}
              >
                <ShareButton>
                  <p>친구에게 링크 공유</p>
                  <ShareIcon color="#323232" />
                </ShareButton>
              </CopyToClipboard>
              {bundles?.length > 0 && (
                <Typography
                  color={({ theme }) => theme.colors.green}
                  weight={700}
                >
                  보따리를 눌러 선물을 확인해보세요!
                </Typography>
              )}
            </Section>
            <GiftBundle
              data={bundles}
              nickname={decodedParams}
              isClickable={isClickable}
            />
          </Box>
        </>
      )}

      {!isAuth && (
        <>
          <Box>
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
          </Box>
          <Absolute>
            <GiftBundle
              data={bundles}
              nickname={decodedParams}
              isClickable={isClickable}
            />
          </Absolute>
        </>
      )}

      <SnowBox />
      {isCopyClipboard && <ToastPopUp />}
    </>
  )
}

const Box = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  animation: ${({ theme }) => theme.animation.fadeIn} 1s;

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
  z-index: 1;

  ${flexCenter}
`

const NoTokenSection = styled.section`
  position: absolute;
  bottom: 0;
  align-items: center;
  padding-bottom: 48px;
  gap: 40px;
  z-index: 1;

  ${flexDirection}
`

const Section = styled.section`
  gap: 16px;
  align-items: center;
  padding: 0 32px;

  ${flexDirection}
`

const Absolute = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 70%;
  overflow: auto;
`
