'use client'
import { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { DefaultButton, SlideCard } from '@/components'
import { flexDirection } from '@/styles/common'
import { useHeaderStore } from '@/stores/headers'
import { useBundlesStore, useUserInfoStore } from '@/stores/userInfo'
import { getPlaylist } from '@/api/services'

export default function ProductDetail() {
  const { setIsViewText } = useHeaderStore()
  const { userInfo } = useUserInfoStore()
  const { currentIndex, setCurrentIndex } = useBundlesStore()
  const [bundles, setBundles] = useState()
  const audioRefs = useRef([])

  const onChangeSlide = (swiper) => {
    const newIndex = swiper.activeIndex
    const previousIdx = swiper.previousIndex

    setCurrentIndex(newIndex)
    pauseAudio(previousIdx)

    // 주석 해제 시 자동재생
    // playAudio(newIndex)
  }

  const playAudio = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].play()
    }
  }

  const pauseAudio = (index) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index]?.pause()
    }
  }

  const goTopurchase = () => {
    window.open(
      'https://near-quince-092.notion.site/36341708de704a508e9dfc910276181d?pvs=4',
    )
  }

  useEffect(() => {
    setIsViewText(true)

    if (userInfo?.userId) {
      getPlaylist(userInfo.userId).then((res) => {
        // console.log('res', res)
        if (res) setBundles(res.results)
      })
    }
  }, [])

  useEffect(() => {
    //오디오 관련 초기 설정 등을 수행하고 싶다면 여기서 작성
    audioRefs.current.forEach((audioRef) => {
      if (audioRef) {
        audioRef.volume = 0.5
      }
    })
  }, [bundles])

  return (
    <Layout>
      <SwiperBox
        // loop={true}
        // loopFillGroupWithBlank={true}
        slidesPerView={1.25}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={currentIndex}
        onSlideChange={(swiper) => onChangeSlide(swiper)}
        pagination={{
          clickable: true,
        }}
      >
        {bundles?.map((list, index) => (
          <SwiperSlide key={list.playlistId}>
            <SlideCard list={list} audioRefs={audioRefs} index={index} />
          </SwiperSlide>
        ))}
      </SwiperBox>
      <div>
        <DefaultButton
          command="선물 보따리 구매하러 가기"
          isShowIcon
          color="#fff"
          backgroundColor={({ theme }) => theme.colors.red}
          onClick={goTopurchase}
        />

        <Text>소중한 사람들이 남긴 편지를 책자로 배송받을 수 있어요!</Text>
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  gap: 16px;
  align-items: center;
  height: 100%;
  ${flexDirection};
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
`

const SwiperBox = styled(Swiper)`
  width: 100%;
  background-color: transparent;
`
const Text = styled.p`
  padding-top: 8px;
  color: var(--mainwhite, var(--White, #fff));
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
`
