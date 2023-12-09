'use client'
import styled from 'styled-components'
import GiftBoxItem from './GiftBoxItem'

export default function GiftBundle() {
  return (
    <GiftBox>
      <GiftBoxItem />
      <GiftBoxItem />
      <GiftBoxItem />
      <GiftBoxItem />
      <GiftBoxItem />
      <GiftBoxItem />
      <GiftBoxItem />
    </GiftBox>
  )
}

const GiftBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap-reverse;
  gap: 0;
  max-width: 374px;
  max-height: 490px;
  z-index: 0;
  /* border: 1px solid blue; */
`
