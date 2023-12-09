'use client'

import styled from 'styled-components'
import { Typography } from '@/components'
import { flexDirection } from '@/styles/common'

export default function GiftBoxItem(props) {
  // TODO: 흔들기 에니메이션
  const { list, onClick } = props
  return <GiftBox as="button" onClick={() => onClick(list?.nickname)} />
}

const GiftBox = styled.div`
  width: 124.6px;
  height: 124px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
`
