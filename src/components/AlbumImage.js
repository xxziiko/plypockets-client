'use client'

import Image from 'next/image'
import styled from 'styled-components'

export default function AlbumImage(props) {
  const { imgUrl } = props

  return (
    <ImgBox>
      <Image src={imgUrl} width={158} height={158} alt="album-img" />
    </ImgBox>
  )
}

const ImgBox = styled.div`
  width: 158px;
  height: 158px;
`
