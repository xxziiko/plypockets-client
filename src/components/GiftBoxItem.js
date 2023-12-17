import styled from 'styled-components'

export default function GiftBoxItem(props) {
  const { list, onClick, index } = props
  return (
    <GiftBox
      as="button"
      onClick={() => onClick(index)}
      boximgurl={list.boxImageUrl}
    />
  )
}

const GiftBox = styled.div`
  width: 33.3%;
  height: 124px;
  border: 1.5px solid #fff;
  background-image: url(${(props) => props.boximgurl});
  background-repeat: no-repeat;
  background-size: 100%;
`
