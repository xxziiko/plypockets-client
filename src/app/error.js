'use client'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { DefaultButton, SnowBox, Typography } from '@/components'
import { flexDirection } from '@/styles/common'

export default function Error() {
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
            color={({ theme }) => theme.colors.black}
          >
            보따리가 <br />잘 안보이네요!
          </Typography>

          <DescriptionBox>
            <Typography
              size={({ theme }) => theme.fontSize.small}
              weight={({ theme }) => theme.fontWeight.large}
              spacing={-0.64}
              color={({ theme }) => theme.colors.black}
            >
              페이지를 찾을 수 없어요!
            </Typography>

            <Typography
              size={({ theme }) => theme.fontSize.small}
              weight={({ theme }) => theme.fontWeight.large}
              spacing={-0.64}
              color={({ theme }) => theme.colors.black}
            >
              인터넷 연결 상태를 점검하고 다시 시도해주세요.
            </Typography>
          </DescriptionBox>
        </section>

        <BottomBox>
          <Typography
            size="16px"
            weight={600}
            spacing={-0.64}
            color={({ theme }) => theme.colors.black}
          >
            홈페이지로 돌아가 다시 접속해보실래요?
          </Typography>
          <DefaultButton
            command="홈페이지로 가기"
            color="#323232"
            backgroundColor={({ theme }) => theme.colors.bgGreen}
            onClick={() => router.push('/', undefined, { shallow: true })}
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
  background-image: url('/img/decorate-background.jpg');
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
