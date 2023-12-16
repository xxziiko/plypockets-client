'use client'

import styled, { css } from 'styled-components'
import { flexDirection } from '@/styles/common'

import Footer from '@/components/Footer'

import ToastPopUp from '@/components/ToastPopUp'

import ScrollUpButton from '@/components/ScrollUpButton'
// meta tag for SEO

export default function ContentDetailLayout({ children }) {
  return (
    <>
      <Main>
        {children}
        <Footer />
        <ScrollUpButton />
        <ToastPopUp />
      </Main>
    </>
  )
}

const Container = styled.div`
  position: relative;
  ${flexDirection}

  background-color: #f9f9f9;

  width: 100%;
  color: ${({ theme }) => theme.colors.black};
`

const Main = styled.main`
  position: relative;
  ${flexDirection}

  background-color: #f9f9f9;

  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  animation: ${({ theme }) => css`
    ${theme.animation.slideInFromBottom} 1s
  `};
  padding-top: 32px;

  width: 100%;
`
