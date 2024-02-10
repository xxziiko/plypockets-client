import styled from 'styled-components'
import { flexAlign } from '@/styles/common'
import { Typography } from '@/components'
import ArrowRightIcon from '@/icons/ArrowRightIcon'

export default function TextButton(props) {
  const {
    buttonCommand,
    buttonAction,
    color,
    size,
    weight,
    spacing,
    height,
    width,
    gap = '8px',
  } = props

  return (
    <SendGiftButton onClick={() => buttonAction()} gap={gap}>
      <Typography color={color} size={size} weight={weight} spacing={spacing}>
        {buttonCommand}
      </Typography>

      <ArrowRightIcon color={color} height={height} width={width} />
    </SendGiftButton>
  )
}

const SendGiftButton = styled.button`
  padding: 0;
  gap: ${(props) => props.gap};

  ${flexAlign}
`
