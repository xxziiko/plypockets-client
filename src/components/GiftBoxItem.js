'use client'

import styled from 'styled-components'
import { Typography } from '@/components'
import { flexDirection } from '@/styles/common'

export default function GiftBoxItem(props) {
  // TODO: 흔들기 에니메이션
  const { list, onClick } = props
  return (
    <Layout>
      <Typography
        size={({ theme }) => theme.fontSize.small}
        weight={({ theme }) => theme.fontWeight.medium}
        color={({ theme }) => theme.colors.white}
        spacing={-0.64}
      >
        {list?.nickname}
      </Typography>

      <GiftBox as="button" onClick={() => onClick(list?.nickname)} />
    </Layout>
  )
}

const Layout = styled.div`
  margin-bottom: 43px;
  ${flexDirection}
`

const GiftBox = styled.div`
  width: 148px;
  height: 214px;
  border: 1px solid red;
`
