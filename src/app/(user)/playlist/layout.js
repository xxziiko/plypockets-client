'use client'
import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'
import { PlaylistHeader } from '@/components'
import { useRouter } from 'next/navigation'

export default function PlaylistLayout({ children }) {
  const router = useRouter()
  const goToBack = () => {
    router.replace('/main')
  }

  return (
    <Box>
      <PlaylistHeader
        title="노래 선물하기"
        subtitle="당신이 선물하고 싶은 노래는?"
        buttonAction={goToBack}
      />
      <Main>{children}</Main>
    </Box>
  )
}

const Box = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow: auto;

  ${flexDirection}
`

const Main = styled.main`
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  width: 100%;
  height: 100%;
  padding: 0px 32px;
`
