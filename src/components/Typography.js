import styled from 'styled-components'

export default function Typography(props) {
  const { children, size, weight, spacing, color } = props
  return (
    <Text size={size} weight={weight} spacing={spacing} color={color}>
      {children}
    </Text>
  )
}

const Text = styled.text`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};

  .green-color {
    color: ${({ theme }) => theme.colors.subGreen};
  }
`
