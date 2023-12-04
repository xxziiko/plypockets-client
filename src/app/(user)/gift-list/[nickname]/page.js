'use client'

import styled from 'styled-components'
import { SlideCard } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Typography } from '@/components'
import 'swiper/css'
import { MOCK } from '../page'

export default function ProductDetail({ params }) {
  const currentIndex = MOCK.findIndex(
    (value) => value.nickname === decodeURI(params.nickname),
  )

  return (
    <Box
      // loop={true}
      // loopFillGroupWithBlank={true}
      slidesPerView={1.2}
      spaceBetween={20}
      centeredSlides={true}
      initialSlide={currentIndex}
      pagination={{
        clickable: true,
      }}
    >
      {MOCK?.map((list) => (
        <SwiperSlide key={list.id}>
          <SlideCard list={list} />
        </SwiperSlide>
      ))}
    </Box>
  )
}

const Box = styled(Swiper)`
  width: 100%;
  height: 94%;
  /* border: 1px solid blue; */
  background-color: transparent;
`
