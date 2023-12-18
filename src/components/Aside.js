'use client'
import styled from 'styled-components'
import { Typography } from '@/components'

import { ContentsCard } from '@/components/ContentsCard'

import { DESKTOP_WIDTH } from '@/lib/constants'

import { DefaultButton } from '@/components'

import { contentsCardDatas } from '@/constants'

export const Aside = () => {
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
        />
      </Box>

      <Box
        style={{
          paddingTop: '180px',
          gap: '32px',
        }}
      >
        <Typography
          color={({ theme }) => theme.colors.white}
          size={({ theme }) => theme.fontSize.small}
          weight={({ theme }) => theme.fontWeight.large}
          spacing={-0.64}
        >
          읽을 보따리 보러가기
        </Typography>
        <Box style={{ flexDirection: 'row', gap: '20px' }}>
          {contentsCardDatas.slice(0, 3).map((data) => (
            <ContentsCard {...data} />
          ))}
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
  right: 40%;
  width: 731px;
  min-width: 731px;
  height: 100vh;
  padding-left: 60px;
`

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`
