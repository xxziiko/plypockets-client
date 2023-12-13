'use client'
import styled from 'styled-components'
import { Typography } from '@/components'

import { DESKTOP_WIDTH } from '@/lib/constants'

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
            올 한해 마무리, 크리스마스 <br />
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
          paddingTop: '232px',
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
          <Content />
          <Content />
          <Content />
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
  width: 480px;
  min-width: 480px;
  height: 100vh;
  padding-left: 48px;
`

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  width: 192px;
  height: 256px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;
  background-color: #ffffff;
`
