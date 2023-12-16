import styled from 'styled-components'

export default function GiftBoxItem(props) {
  const { list, onClick, index } = props
  return (
    <GiftBox as="button" onClick={() => onClick(index)}>
      {list?.friendname}
    </GiftBox>
  )
}

const GiftBox = styled.div`
  width: 124px;
  height: 124px;
  border: 1.5px solid #fff;
`
