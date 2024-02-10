import React from 'react'
import styled from 'styled-components'
import { flexDirection } from '@/styles/common'
import { Typography } from '@/components'

import Image from 'next/image'

export const ContentsParagraph = (props) => {
  const { title, contents, image, imageDescription, imageSource } = props

  return (
    <Container>
      <Typography
        as="h2"
        style={{
          padding: '0 32px',
        }}
        size={'18px'}
        weight={600}
        spacing={-0.72}
        color={'#323232'}
      >
        {title}
      </Typography>

      <Typography
        as="p"
        style={{
          lineHeight: '150%',
          padding: '16px 32px',
        }}
        size={'14px'}
        weight={400}
        spacing={-0.56}
        color={'#323232'}
      >
        {contents}
      </Typography>

      {image.length > 0 && (
        <img
          style={{ paddingTop: '24px' }}
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
          alt={imageDescription}
        />
      )}

      {imageDescription.length > 0 && (
        <Typography
          style={{
            alignSelf: 'center',
            paddingTop: '16px',
          }}
          size={'12px'}
          weight={500}
          spacing={-0.48}
          color={'#595959'}
        >
          {imageDescription}
        </Typography>
      )}

      {imageSource.length > 0 && (
        <Typography
          style={{
            alignSelf: 'center',
          }}
          size={'12px'}
          weight={500}
          spacing={-0.48}
          color={'#595959'}
        >
          사진 출처: {imageSource}
        </Typography>
      )}
    </Container>
  )
}

export default ContentsParagraph

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`
