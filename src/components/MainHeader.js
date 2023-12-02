'use client'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import { flexStart } from '@/styles/common'
import Image from 'next/image'

export default function MainHeader(props) {
  const { pageType, width = 48, height = 48 } = props

  const switchImgUrl = (pageType) => {
    switch (pageType) {
      case 'goToBundle':
        return '/assets/GoBackButtonIcon.svg'
      default:
        return '/assets/ShareButtonIcon.svg'
    }
  }

  return (
    <Header>
      <Typography
        size={({ theme }) => theme.fontSize.h2}
        weight={({ theme }) => theme.fontWeight.large}
        spacing={-1.44}
        color={({ theme }) => theme.colors.white}
      >
        샌디의
        <br />
        플리 보따리
      </Typography>

      <IconBox>
        <Image
          src={switchImgUrl(pageType)}
          alt="share-button"
          width={width}
          height={height}
        />
      </IconBox>
    </Header>
  )
}

const Header = styled.header`
  justify-content: space-between;
  width: 100%;
  padding: 32px;

  ${flexStart}
`

const IconBox = styled.div`
  cursor: pointer;
  /* border: 1px solid red; */
`
