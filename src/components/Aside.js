'use client'
import styled from 'styled-components'

import { useState } from 'react'
import { Typography } from '@/components'

import { ContentsCard } from '@/components/ContentsCard'

import { DESKTOP_WIDTH } from '@/lib/constants'

import { DefaultButton } from '@/components'

import { contentsCardDatas } from '@/constants'

import { redirectUrl } from '@/constants/urls'

export const Aside = () => {
  const [cardIndex, setCardIndex] = useState(0)

  const handleClickArrow = (index) => {
    const lastIndex = contentsCardDatas.length - 1
    if (index < 0 || index + 2 > lastIndex) return
    setCardIndex(index)
  }

  return (
    <AsideLayout>
      <Box
        style={{
          paddingTop: '45px',
          gap: '32px',
        }}
      >
        <div>
          <Typography
            size={({ theme }) => theme.fontSize.h1}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-1.6}
            color={({ theme }) => theme.colors.subGreen}
          >
            {'올 한해 마무리, 크리스마스 '}
            <Typography color={({ theme }) => theme.colors.red}>
              플리 보따리
            </Typography>
            로
          </Typography>
        </div>

        <div>
          <Typography
            color={({ theme }) => theme.colors.white}
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-0.64}
          >
            아주 빠르게 로그인하고 음악을 선물해요
          </Typography>
        </div>
      </Box>
      <Box
        style={{
          paddingTop: '45px',
          gap: '8px',
        }}
      >
        <div>
          <Typography
            color={({ theme }) => theme.colors.white}
            size={({ theme }) => theme.fontSize.small}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-0.64}
          >
            소중한 사람들이 남긴 편지를 책자로 배송받을 수 있어요!
          </Typography>
        </div>

        <DefaultButton
          color="#fff"
          command="선물 보따리 구매하러 가기"
          isShowIcon
          backgroundColor="#F84A68"
          onClick={() => window.open(redirectUrl.purchaseUrl)}
        />
      </Box>

      <Box
        style={{
          paddingTop: '180px',
          gap: '32px',
        }}
      >
        <Typography
          style={{
            paddingLeft: '50px',
          }}
          color={({ theme }) => theme.colors.white}
          size={({ theme }) => theme.fontSize.small}
          weight={({ theme }) => theme.fontWeight.large}
          spacing={-0.64}
        >
          읽을 보따리 보러가기
        </Typography>
        <Box
          style={{
            flexDirection: 'row',
            gap: '20px',

            alignItems: 'center',
          }}
        >
          <IconWrapper onClick={() => handleClickArrow(cardIndex - 1)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.0033 12L18.6678 1.33552L17.3323 0L5.33227 12L17.3323 24L18.6678 22.6645L8.0033 12Z"
                fill="white"
              />
            </svg>
          </IconWrapper>

          {contentsCardDatas
            .slice(cardIndex, cardIndex + 3)
            .map((data, idx) => (
              <ContentsCard key={data.id} {...data} />
            ))}

          <IconWrapper onClick={() => handleClickArrow(cardIndex + 1)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9967 12L5.33224 1.33552L6.66776 0L18.6678 12L6.66776 24L5.33224 22.6645L15.9967 12Z"
                fill="white"
              />
            </svg>
          </IconWrapper>
        </Box>
      </Box>
    </AsideLayout>
  )
}
export default Aside

const AsideLayout = styled.aside`
  @media screen and (min-width: ${DESKTOP_WIDTH}px) {
    display: block;
  }
  display: none;
  position: fixed;
  top: 0;
  right: 50%;
  /* width: 731px;
  min-width: 731px; */
  height: 100vh;
  margin-right: -120px;
`

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const IconWrapper = styled.span`
  cursor: pointer;
`
