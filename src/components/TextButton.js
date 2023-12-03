'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { flexAlign } from '@/styles/common'
import { Typography } from '@/components'

export default function TextButton(props) {
  const { buttonCommand, buttonAction, color, colorType } = props

  const returnUrl = (colorType) => {
    switch (colorType) {
      case 'red':
        return '/assets/ArrowRightIconRed.svg'

      default:
        return '/assets/ArrowRightIconGrey.svg'
    }
  }

  return (
    <SendGiftButton onClick={() => buttonAction()}>
      <Typography
        color={color}
        size={({ theme }) => theme.fontSize.medium}
        weight={({ theme }) => theme.fontWeight.medium}
        spacing={-0.8}
      >
        {buttonCommand}
      </Typography>

      <ImgBox>
        <Image
          src={returnUrl(colorType)}
          alt="arrow-icon"
          width={35}
          height={20}
        />
      </ImgBox>
    </SendGiftButton>
  )
}

const ImgBox = styled.div`
  width: 35px;
  height: 20px;
  cursor: pointer;
`

const SendGiftBox = styled.div``

const SendGiftButton = styled.button`
  height: 24px;
  padding: 0;
  gap: 8px;

  ${flexAlign}
`
