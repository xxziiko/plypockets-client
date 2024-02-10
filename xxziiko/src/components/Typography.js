import styled from 'styled-components'

const TYPE = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  p: 'p',
  span: 'span',
}

export default function Typography(props) {
  const { style, children, size, weight, spacing, color, as } = props

  switch (as) {
    case TYPE.h1:
      return (
        <H1
          style={style}
          size={size}
          weight={weight}
          spacing={spacing}
          color={color}
        >
          {children}
        </H1>
      )
      break
    case TYPE.h2:
      return (
        <H2
          style={style}
          size={size}
          weight={weight}
          spacing={spacing}
          color={color}
        >
          {children}
        </H2>
      )
      break
    case TYPE.h3:
      return (
        <H3
          style={style}
          size={size}
          weight={weight}
          spacing={spacing}
          color={color}
        >
          {children}
        </H3>
      )
      break
    case TYPE.h4:
      return (
        <H4
          style={style}
          size={size}
          weight={weight}
          spacing={spacing}
          color={color}
        >
          {children}
        </H4>
      )
      break
    case TYPE.p:
      return (
        <P
          style={style}
          size={size}
          weight={weight}
          spacing={spacing}
          color={color}
        >
          {children}
        </P>
      )
      break

    default:
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

      break
  }
}

const Text = styled.span`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`

const H1 = styled.h1`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`

const H2 = styled.h2`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`

const H3 = styled.h3`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`

const H4 = styled.h4`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`

const P = styled.p`
  font-size: ${(props) => props.size};
  font-style: normal;
  font-weight: ${(props) => props.weight};
  line-height: normal;
  letter-spacing: ${(props) => props.spacing}px;
  color: ${(props) => props.color};
`
