'use client'
import { useRouter } from 'next/navigation'
import styled, { css } from 'styled-components'
import { DefaultButton, SnowBox, Typography } from '@/components'
import { flexDirection } from '@/styles/common'

export default function Home() {
  const router = useRouter()

  return (
    <Background>
      <SnowBox />

      <Main>
        <section>
          <Typography
            size={({ theme }) => theme.fontSize.h1}
            weight={({ theme }) => theme.fontWeight.large}
            spacing={-1.6}
            color={({ theme }) => theme.colors.subGreen}
          >
            올 한해 마무리, <br />
            크리스마스 <br />
            <Typography color={({ theme }) => theme.colors.red}>
              플리 보따리
            </Typography>
            로
          </Typography>

          <DescriptionBox>
            <Typography
              size={({ theme }) => theme.fontSize.small}
              spacing={-0.64}
            >
              아주 빠르게 로그인하고 음악을 선물해요
            </Typography>

            <Typography
              size={({ theme }) => theme.fontSize.small}
              weight={({ theme }) => theme.fontWeight.large}
              spacing={-0.64}
            >
              친구들에게 편지를 선물 받으세요
            </Typography>
          </DescriptionBox>
        </section>

        <BottomBox>
          <Typography size="16px" weight={600} spacing={-0.64}>
            아직 플리보따리가 없으시다면 새롭게 만들어보세요!
          </Typography>
          <DefaultButton
            isShowIcon
            command="내 플리 보따리 만들기"
            color="#fff"
            backgroundColor={({ theme }) => theme.colors.red}
            onClick={() =>
              router.push('/account', undefined, { shallow: true })
            }
          />
        </BottomBox>
      </Main>
    </Background>
  )
}

const Background = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url('/img/mainBackground.png');
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  z-index: 0;
  ${flexDirection}
`

const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 48px 32px 0;
  color: ${({ theme }) => theme.colors.white};
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};

  ${flexDirection};
`

const DescriptionBox = styled.div`
  padding-top: 32px;
  gap: 8px;
  ${flexDirection}
`

const BottomBox = styled.div`
  position: fixed;
  align-items: center;
  bottom: 0;
  gap: 16px;
  padding-bottom: 48px;
  ${flexDirection}
`
