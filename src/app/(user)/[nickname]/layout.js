'use client'
import { MainHeader } from '@/components'
import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'
import { useHeaderStore } from '@/stores/headers'
import { useRouter } from 'next/navigation'

export default function MainLayout({ children }) {
  const { nickname } = useHeaderStore()
  const router = useRouter()

  const goToBack = () => {
    router.push('/', undefined, { shallow: true })
    // TODO: 토큰 비우기
  }
  const title = (
    <>
      <FlexAlign>
        <Alias>{nickname}</Alias>의
      </FlexAlign>
      플리 보따리
    </>
  )

  return (
    <Box>
      <MainHeader title={title} goToBack={goToBack} />
      <Main>{children}</Main>
    </Box>
  )
}

const Box = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url('/img/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100vh;

  ${flexDirection}
`

const Main = styled.main`
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  width: 100%;
  height: 100%;
`

const Alias = styled.p`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 220px;
`

const FlexAlign = styled.div`
  display: flex;
  align-items: center;
`
