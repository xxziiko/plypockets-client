'use client'
import styled from 'styled-components'
import { Footer, Typography } from '@/components'
import { flexDirection } from '@/styles/common'

export default function Home() {
  const styles = {
    color: ({ theme }) => theme.colors.white,
    buttonBackgroundColor: ({ theme }) => theme.colors.red,
  }

  // const makeSnowFlakes = () => {
  //   let animationDelay = '0s' // 기본 값은 0초이다.
  //   const arr = Array.from('Christmas') // length가 15인 array가 생긴다.

  //   return arr.map((el, i) => {
  //     animationDelay = `${(Math.random() * 3).toFixed(2)}s` // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자

  //     return <Snowflake key={i} animationDelay={animationDelay} />
  //   })
  // }
  return (
    <Background>
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
        </section>

        <section>
          <DescriptionBox>
            <Typography
              size={({ theme }) => theme.fontSize.medium}
              spacing={0.8}
            >
              아주 빠르게 로그인하고 <br />
              <Typography weight={({ theme }) => theme.fontWeight.large}>
                친구들에게 음악을 선물 받으세요
              </Typography>
            </Typography>

            <Typography
              size={({ theme }) => theme.fontSize.medium}
              spacing={0.8}
            >
              아주 빠르게 로그인하고 <br />
              <Typography weight={({ theme }) => theme.fontWeight.large}>
                친구들에게 편지를 선물 받으세요
              </Typography>
            </Typography>
          </DescriptionBox>
        </section>
      </Main>

      <Footer
        nextUrl="/login"
        text="내 플리 보따리 만들러"
        buttonCommand="가기"
        styles={styles}
      />
    </Background>
  )
}

const Background = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url('/img/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  ${flexDirection}
`

const Main = styled.main`
  width: 100%;
  padding: 58px 32px;
  color: ${({ theme }) => theme.colors.white};
  gap: 57px;

  ${flexDirection};
`

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
