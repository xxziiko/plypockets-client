import styled from 'styled-components'
import { flexCenter, flexSpaceBetween } from '@/styles/common'

export default function SlideCard(props) {
  const { list } = props
  return (
    <Card>
      <Content>{list.nickname}</Content>
    </Card>
  )
}

const Card = styled.div`
  flex-direction: column;
  width: 310px;
  height: 526px;
  padding: 32px 18px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.pink};

  ${flexSpaceBetween}
`

const Content = styled.div`
  gap: 10px;
  height: 100%;
  ${flexCenter}
`
