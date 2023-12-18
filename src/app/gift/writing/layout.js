'use client'

import styled from 'styled-components'
import { GiftHeader } from '@/components'

export default function WritingLayout({ children }) {
  return (
    <Box>
      <GiftHeader title="편지 작성하기" step={2} />
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
