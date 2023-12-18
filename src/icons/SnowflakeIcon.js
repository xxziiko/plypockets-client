import * as React from 'react'
import styled from 'styled-components'

const SnowflakeIcon = (props) => {
  const { color } = props

  return (
    <svg
      width="38"
      height="35"
      viewBox="0 0 38 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 17">
        <SVG
          id="Rectangle 13613"
          x="0.780273"
          y="13.9044"
          width="37"
          height="7.24619"
          color={color}
        />
        <SVG
          id="Rectangle 13614"
          width="36.4247"
          height="7.36185"
          transform="matrix(0.507897 -0.861418 0.870513 0.492144 6.79907 31.3773)"
          color={color}
        />
        <SVG
          id="Rectangle 13615"
          width="36.4247"
          height="7.36185"
          transform="matrix(-0.507897 -0.861418 -0.870513 0.492145 31.7073 31.3773)"
          color={color}
        />
      </g>
    </svg>
  )
}

const SVG = styled.rect`
  fill: ${(props) => props.color};
`

export default SnowflakeIcon
