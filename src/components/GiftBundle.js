'use client'
import styled from 'styled-components'
import { flexDirection } from '@/styles/common'

export default function GiftBundle({ children }) {
  return <GiftBox>선물꾸러미임</GiftBox>
}

const GiftBox = styled.div`
  position: absolute;
  display: fixed;
  bottom: 0;
  max-width: 374px;
  width: 100%;
  border: 1px solid blue;
  z-index: 0;
`
