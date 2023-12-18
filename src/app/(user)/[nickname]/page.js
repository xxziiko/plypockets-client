'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import styled, { css } from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { flexAlign, flexCenter, flexDirection } from '@/styles/common'
import {
  Typography,
  RoundBox,
  DefaultButton,
  ToastPopUp,
  GiftBundle,
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
  const decodedParams = decodeURI(params.nickname)
  const [isAuth, setIsAuth] = useState(false)
  const [isClickable, setIsClickable] = useState(false)
  const [bundles, setBundles] = useState([])

  const goToMyPack = () => {
    router.push('/account', undefined, { shallow: true })
  }

  const goToPlaylist = () => {
    router.push('/gift/playlist', undefined, { shallow: true })
  }

  useEffect(() => {
    if (userInfo?.nickname) {
      setIsAuth(true)
      getPlaylist(userInfo.userId).then((res) => {
        // console.log('res', res)
        if (res) {
          setBundles(res.results)
          setIsClickable(true)
        }
      })
      return
    }

    if (!userInfo?.nickname) {
      setNickname(decodedParams)
      getBoxes(decodedParams).then((res) => {
        // console.log(res)
        if (res) setBundles(res.results)
      })
    }
  }, [userInfo])

  return (
    <Box>
      {isAuth && (
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
            <Typography color={({ theme }) => theme.colors.green} weight={700}>
              보따리를 눌러 선물을 확인해보세요!
            </Typography>
          )}
        </Section>
      )}

      {!isAuth && (
        <NoTokenSection>
          <RoundBox
            as="button"
            width="191px"
            buttonCommand="선물하러 가기"
            IconColor="#F84A68"
            onClick={goToPlaylist}
          />
          <DefaultButton
            color="#fff"
            command="내 플리 보따리 가기"
            isShowIcon
            backgroundColor="#F84A68"
            onClick={goToMyPack}
          />
        </NoTokenSection>
      )}

      <GiftBundle
        data={bundles}
        nickname={decodedParams}
        isClickable={isClickable}
      />
      {isCopyClipboard && <ToastPopUp />}
    </Box>
  )
}

const Box = styled.div`
  flex-direction: column;
  height: 100%;
  padding: 0 32px;
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};

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
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-bottom: 48px;
  gap: 40px;
  z-index: 999;

  ${flexDirection}
`

const Section = styled.section`
  gap: 16px;

  ${flexDirection}
`
