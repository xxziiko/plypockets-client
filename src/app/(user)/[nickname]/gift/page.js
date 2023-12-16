'use client'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { DefaultButton, SlideCard } from '@/components'
import { flexDirection } from '@/styles/common'
import { useHeaderStore } from '@/stores/headers'
import { useUserBundleStore } from '@/stores/userInfo'

export default function ProductDetail() {
  const { setIsViewText } = useHeaderStore()
  const { bundles, currentIndex } = useUserBundleStore()

  useEffect(() => {
    console.log('current', currentIndex)
    console.log('bundle', bundles)
    setIsViewText(true)
  }, [])

  return (
    <Layout>
      <SwiperBox
        // loop={true}
        // loopFillGroupWithBlank={true}
        slidesPerView={1.25}
        spaceBetween={20}
        centeredSlides={true}
        initialSlide={currentIndex}
        pagination={{
          clickable: true,
        }}
      >
        {bundles?.map((list) => (
          <SwiperSlide key={list.playlistId}>
            <SlideCard list={list} />
          </SwiperSlide>
        ))}
      </SwiperBox>
      <div>
        <DefaultButton
          command="선물 보따리 구매하러 가기"
          isShowIcon
          color="#fff"
          backgroundColor={({ theme }) => theme.colors.red}
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
`

const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 77%;
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
