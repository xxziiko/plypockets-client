'use client'

import styled from 'styled-components'
import { GiftHeader } from '@/components'
import theme from '@/styles/theme'

export default function WritingLayout({ children }) {
  return (
    <Box>
      <GiftHeader title="편지 작성하기" />
      {children}
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
