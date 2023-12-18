import { flexCenter } from '@/styles/common'
import styled from 'styled-components'
import GiftIcon from '@/icons/GiftIcon'

export default function DefaultButton(props) {
  const {
    command,
    color,
    backgroundColor,
    onClick,
    isShowIcon,
    isButtonDisable,
  } = props

  return (
    <Button
      color={color}
      props={{
        backgroundColor: isButtonDisable
          ? ({ theme }) => theme.colors.grey
          : backgroundColor,
      }}
      onClick={() => onClick()}
      disabled={isButtonDisable}
    >
      <Layout>
        {isShowIcon && <GiftIcon color={color} />}
        {command}
      </Layout>
    </Button>
  )
}

const Layout = styled.div`
  width: 100%;
  gap: 8px;
  z-index: 1000;

  ${flexCenter}
`

const Button = styled.button`
  width: 311px;
  height: 56px;
  border-radius: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.props.backgroundColor};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`
