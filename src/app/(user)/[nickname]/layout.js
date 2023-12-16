'use client'
import { usePathname, useRouter } from 'next/navigation'
import { MainHeader, SnowBox } from '@/components'
import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'

export default function MainLayout({ children, params }) {
  const path = usePathname()
  const decodedParams = decodeURI(params.nickname)

  const router = useRouter()

  const goToBack = () => {
    if (path.split('/')[2] === 'gift') {
      router.push(`/${decodedParams}`, undefined, { shallow: true })

      return
    }

    router.push('/', undefined, { shallow: true })
    sessionStorage.removeItem('user-storage')
  }

  const title = (
    <>
      <FlexAlign>
        <Alias>{decodedParams}</Alias>의
      </FlexAlign>
      플리 보따리
    </>
  )

  return (
    <Box>
      <MainHeader title={title} goToBack={goToBack} />
      <Main id="main">{children}</Main>
      <SnowBox />
    </Box>
  )
}

const Box = styled.div`
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
