import Image from 'next/image'
import styled from 'styled-components'

export default function AlbumImage(props) {
  const { imgUrl, width = 158, height = 158 } = props

  return (
    <ImgBox width={width} height={height}>
      <Img src={imgUrl} width={width} height={height} alt="album-img" />
    </ImgBox>
  )
}

const ImgBox = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  z-index: 999;
`
const Img = styled(Image)`
  border-radius: 9.576px;
`
