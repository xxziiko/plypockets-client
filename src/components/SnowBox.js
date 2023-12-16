import styled, { keyframes, css } from 'styled-components'
import SnowflakeIcon from '@/icons/SnowflakeIcon'

export default function SnowBox(props) {
  const { width = 40, height = 38 } = props
  const snowArr = Array.from({ length: 10 })

  const renderSnowflake = (index) => {
    const delay = Math.random() * 10
    const initialOpacity = Math.random()
    const leftPosition = `${Math.random() * 100}%`

    const snowflakeStyle = {
      left: leftPosition,
      animationDelay: `${delay}s`,
      opacity: initialOpacity,
    }

    return (
      <ImageBox key={index} styles={snowflakeStyle}>
        <SnowflakeIcon />
      </ImageBox>
    )
  }
  return <Box>{snowArr.map((_, index) => renderSnowflake(index))}</Box>
}

const fallKeyframes = keyframes`
from{}
to{
  transform: translateY(100vh);
  opacity: 0;
}
`

const ImageBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: -999;
  overflow: hidden;
  animation: ${css`
    ${fallKeyframes} 7s linear infinite
  `};
  left: ${(props) => props.styles.left};
  animation-delay: ${(props) => props.styles.animationDelay};
  opacity: ${(props) => props.styles.opacity};
`

const Box = styled.div`
  position: absolute;
  top: -50px;
  width: 375px;
  /* height: 100%; */
  /* border: 1px solid red; */
`
