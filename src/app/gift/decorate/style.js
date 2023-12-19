import styled from 'styled-components'

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  animation: ${({ theme }) => theme.animation.fadeIn} 1s;
`

const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.brown};
`

export default {
  Box,
  ContentWrapper,
}
