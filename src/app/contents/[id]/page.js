'use client'

import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { DefaultButton, RoundBox, Typography } from '@/components'
import { flexDirection } from '@/styles/common'

import GoBackIcon from '@/icons/GoBackIcon'
import TreeIcon from '@/icons/TreeIcon'
import HeartIcon from '@/icons/HeartIcon'
import ShareIcon from '@/icons/ShareIcon'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import ContentsParagraph from '@/components/ContentsParagraph'
import QA from '@/components/QA'

import { contentsDatas, qaDatas } from '@/constants/contents'

const AuthorText = (props) => {
  const { children } = props
  return (
    <Box style={{ display: 'inline-flex' }}>
      <Typography size={'12px'} weight={600} spacing={-0.48} color={'#888'}>
        {children}
      </Typography>
    </Box>
  )
}

export default function ContentDetailPage({ params }) {
  const router = useRouter()

  const { id } = params

  const viewCount = 627
  const likeCount = 627

  const contentData = contentsDatas[id - 1]
  const qaData = qaDatas[id - 1]

  return (
    <>
      {/* title section */}
      <DescriptionBox style={{ flexDirection: 'row' }}>
        {/* title */}
        <Box style={{ paddingRight: '28px' }}>
          <Typography
            size={'24px'}
            weight={600}
            spacing={-0.96}
            color={'#000000'}
          >
            {contentData.title}
          </Typography>
        </Box>

        {/* back icon */}
        <Box style={{ alignItems: 'flex-start', cursor: 'pointer' }}>
          <GoBackIcon color={'#B3DCD2'} />
        </Box>
      </DescriptionBox>

      {/* subTitle section */}
      <DescriptionBox style={{ paddingTop: '8px' }}>
        <Typography size="14px" weight={400} spacing={-0.56} color={'#000000'}>
          {contentData.subTitle}
        </Typography>
      </DescriptionBox>

      {/* author section */}
      <DescriptionBox
        style={{
          paddingTop: '50px',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <AuthorText>{contentData.author}</AuthorText>

        <AuthorText>{contentData.date}</AuthorText>
      </DescriptionBox>

      {/* view & count section */}
      <DescriptionBox
        style={{
          paddingTop: '18px',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Box
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <TreeIcon color="#00916F" />
          <AuthorText>조회수 {viewCount}</AuthorText>
        </Box>

        <Box
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <HeartIcon color="#F84A68" />

          <AuthorText>좋아요 {likeCount}</AuthorText>
        </Box>
      </DescriptionBox>

      {/* share button */}
      <CopyToClipboard>
        <ShareButton
          style={{
            marginTop: '32px',
            gap: '8px',
          }}
        >
          <Typography
            size={'14px'}
            weight={600}
            spacing={-0.56}
            color={'#00916F'}
          >
            친구에게 링크공유
          </Typography>
          <ShareIcon color={'#00916F'} width={14} height={18} />
        </ShareButton>
      </CopyToClipboard>

      {/* paragraph section */}
      <Box style={{ paddingTop: '32px' }}>
        {contentData.paragraphs.map((paragraph, index) => {
          return <ContentsParagraph key={index} {...paragraph} />
        })}
      </Box>

      {/* faq section */}
      <QA qaData={qaData} />
    </>
  )
}

const Box = styled.div`
  ${flexDirection}
`

const DescriptionBox = styled.div`
  ${flexDirection}
  padding: 0 32px;
`

const BottomBox = styled.div`
  position: fixed;
  align-items: center;
  bottom: 0;
  gap: 16px;
  padding-bottom: 96px;
  ${flexDirection}
`
const ShareButton = styled.button`
  all: unset;
  cursor: pointer;

  display: flex;
  align-self: center;
  width: 169px;
  height: 40px;
  justify-content: center;
  align-items: center;

  border-radius: 64px;
  border: 1px solid var(--main_green, #00916f);
  background: var(--field_grey, #f9f9f9);
`

const HorizontalLine = styled.div``
