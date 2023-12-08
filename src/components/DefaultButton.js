import { flexCenter, flexStart } from '@/styles/common'
import styled from 'styled-components'
import GiftIcon from '@/icons/GiftIcon'

export default function DefaultButton(props) {
  const { command, color, backgroundColor, onClick } = props
  return (
    <Button
      color={color}
      backgroundColor={backgroundColor}
      onClick={() => onClick()}
    >
      <Layout>
        <GiftIcon />
        {command}
      </Layout>
    </Button>
  )
}

const Layout = styled.div`
  width: 100%;
  gap: 8px;

  ${flexCenter}
`

const Button = styled.button`
  width: 311px;
  height: 56px;
  border-radius: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
`
