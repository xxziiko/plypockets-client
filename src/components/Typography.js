import styled from 'styled-components'

export default function Typography(props) {
  const { style, children, size, weight, spacing, color } = props
  return (
    <Text
      style={style}
      size={size}
      weight={weight}
      spacing={spacing}
      color={color}
    >
      {children}
    </Text>
  )
}

const Text = styled.span`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`
