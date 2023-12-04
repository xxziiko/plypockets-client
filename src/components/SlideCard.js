import styled from 'styled-components'
import { flexCenter, flexSpaceBetween } from '@/styles/common'
import ProgressIcon from '@/icons/ProgressIcon'

export default function SlideCard(props) {
  const { list } = props
  return (
    <Card>
      <Content>{list.nickname}</Content>

      <ProgressIcon
        firstStep="#00916F"
        secondStep="#00916F"
        lastStep="#F84A68"
      />
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
