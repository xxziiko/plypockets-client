'use client'

import styled from 'styled-components'
import { flexDirection } from '@/styles/common'

import Footer from '@/components/Footer'

export default function ContentDetailLayout({ children }) {
  return (
    <Container>
      {children}
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  background-color: #f9f9f9;

  width: 100%;
  padding-top: 32px;
  color: ${({ theme }) => theme.colors.black};

  ${flexDirection}
`
