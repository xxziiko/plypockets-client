import React from 'react'
import styled from 'styled-components'
import { flexDirection } from '@/styles/common'
import { Typography } from '@/components'

import Image from 'next/image'

export const ContentsParagraph = (props) => {
  const { title, contents, image, imageDescription, imageSource } = props

  return (
    <Box>
      <DescriptionBox>
        <Typography
          size={'18px'}
          weight={600}
          spacing={-0.72}
          color={'#323232'}
        >
          {title}
        </Typography>
      </DescriptionBox>

      <DescriptionBox style={{ paddingTop: '16px' }}>
        <Typography
          style={{
            lineHeight: '150%',
          }}
          size={'14px'}
          weight={400}
          spacing={-0.56}
          color={'#323232'}
        >
          {contents}
        </Typography>
      </DescriptionBox>

      <img
        style={{ paddingTop: '24px' }}
        src={`/img${image}`}
        alt={imageDescription}
      />

      <DescriptionBox
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '16px',
          paddingBottom: '48px',
        }}
      >
        <Typography
          size={'12px'}
          weight={500}
          spacing={-0.48}
          color={'#595959'}
        >
          {imageDescription}
        </Typography>
        {imageSource.length > 0 && (
          <Typography
            size={'12px'}
            weight={500}
            spacing={-0.48}
            color={'#595959'}
          >
            사진 출처: {imageSource}
          </Typography>
        )}
      </DescriptionBox>
    </Box>
  )
}

export default ContentsParagraph

const Box = styled.div`
  ${flexDirection}
`

const DescriptionBox = styled.div`
  ${flexDirection}
  padding: 0 32px;
`
