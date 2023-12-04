'use client'
import styled from 'styled-components'
import { flexCenter, flexSpaceBetween } from '@/styles/common'
import Image from 'next/image'

export default function SlideCard(props) {
  const { list } = props
  return (
    <Card>
      <Content>{list.nickname}</Content>
      <ImgBox>
        <Image
          src="/assets/TreeIcon.svg"
          width={15}
          height={39}
          alt="tree-icon"
        />
      </ImgBox>
    </Card>
  )
}

const Card = styled.div`
  flex-direction: column;
  width: 310px;
  height: 100%;
  padding: 28px 18px 16px 22px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.pink};

  ${flexSpaceBetween}
`

const Content = styled.div`
  gap: 10px;
  height: 100%;
  ${flexCenter}
`

const ImgBox = styled.div`
  display: fixed;
  bottom: 0;
  width: 15px;
  height: 39px;
`
