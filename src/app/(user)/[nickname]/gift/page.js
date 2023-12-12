'use client'
import styled from 'styled-components'
import { DefaultButton, SlideCard } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { MOCK } from '../page'
import { flexDirection } from '@/styles/common'
import { useHeaderStore } from '@/stores/headers'
import { useEffect } from 'react'

export default function ProductDetail() {
  const { setIsViewText } = useHeaderStore()
  // const currentIndex = MOCK.findIndex(
  //   (value) => value.nickname === decodeURI(params.nickname),
  // )

  useEffect(() => {
    setIsViewText(true)
  }, [])

  return (
    <Layout>
      <SwiperBox
        // loop={true}
        // loopFillGroupWithBlank={true}
        slidesPerView={1.2}
        spaceBetween={20}
        centeredSlides={true}
        // initialSlide={currentIndex}
        pagination={{
          clickable: true,
        }}
      >
        {MOCK?.map((list) => (
          <SwiperSlide key={list.id}>
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
  ${flexDirection};
`

const SwiperBox = styled(Swiper)`
  width: 100%;
  height: 526px;
  padding-bottom: 24px;
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
