'use client'

import { usePathname, useRouter } from 'next/navigation'
import styled from 'styled-components'
import {
  DefaultButton,
  RoundBox,
  RoundButtonWithText,
  Typography,
} from '@/components'
import { flexDirection } from '@/styles/common'

import GoBackIcon from '@/icons/GoBackIcon'
import TreeIcon from '@/icons/TreeIcon'
import HeartIcon from '@/icons/HeartIcon'
import ShareIcon from '@/icons/ShareIcon'

import { CopyToClipboard } from 'react-copy-to-clipboard'

import ContentsParagraph from '@/components/ContentsParagraph'
import FAQ from '@/components/FAQ'
import Vote from '@/components/Vote'

import { ContentsCard } from '@/components/ContentsCard'
import {
  contentsDatas,
  faqDatas,
  keywordDatas,
  voteDatas,
  contentsCardDatas,
} from '@/constants'

import { useContentsInfo } from '@/hooks/useContentsInfo'

import { useButtonStore } from '@/stores/buttons'
import { useUserInfoStore } from '@/stores/userInfo'

// TODO: metadata

// export async function generateMetadata({ params, searchParams }, parent) {
//   const { id } = params
//   const url = usePathname(`/contents/${id}`)

//   const contentData = contentsDatas[id - 1]
//   const faqData = faqDatas[id - 1]
//   const { keywords } = keywordDatas[id - 1]

//   return {
//     title: contentData.title,
//     description: contentData.subTitle,
//     keywords: keywords,
//     author: contentData.author,
//     openGraph: {
//       title: contentData.title,
//       description: contentData.subTitle,
//       url: url,
//       image: contentData.paragraphs[0].image,
//       type: 'website',
//     },
//   }
// }

export default function ContentDetailPage({ params }) {
  const router = useRouter()

  const { setIsCopyClipboard } = useButtonStore()

  const { id } = params

  const path = usePathname()
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`

  const {
    viewCount,
    likeCount,
    voteCount,
    hasVoted,
    choice,
    handleLike,
    handleSendVote,
  } = useContentsInfo(id)

  const contentData = contentsDatas[id - 1]
  const faqData = faqDatas[id - 1]
  const { keywords } = keywordDatas[id - 1]

  const voteData = Number(id) < voteDatas.length ? voteDatas[id - 1] : undefined

  const handleGoBack = () => {
    // TODO: go back
    router.back()
  }

  return (
    <>
      {/* title section */}
      <ContainerBox style={{ flexDirection: 'row' }}>
        {/* title */}
        <FlexBox style={{ paddingRight: '28px' }}>
          <Typography
            as="h1"
            size={'24px'}
            weight={600}
            spacing={-0.96}
            color={'#000000'}
          >
            {contentData.title}
          </Typography>
        </FlexBox>

        {/* back icon */}
        <FlexBox style={{ alignItems: 'flex-start' }}>
          <span style={{ cursor: 'pointer' }} onClick={handleGoBack}>
            <GoBackIcon color={'#B3DCD2'} />
          </span>
        </FlexBox>
      </ContainerBox>

      {/* subTitle, author section */}
      <ContainerBox
        style={{
          paddingTop: '8px',
        }}
      >
        <Typography
          as="h2"
          size="14px"
          weight={400}
          spacing={-0.56}
          color={'#000000'}
          style={{
            lineHeight: '150%',
          }}
        >
          {contentData.subTitle}
        </Typography>
        <FlexBox
          style={{
            paddingTop: '50px',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <SmallText>{contentData.author}</SmallText>

          <SmallText>{dateFormat(contentData.date)}</SmallText>
        </FlexBox>
      </ContainerBox>

      {/* view & count section */}
      <ContainerBox
        style={{
          paddingTop: '18px',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <FlexBox
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <TreeIcon color="#00916F" />
          <SmallText>조회수 {viewCount}</SmallText>
        </FlexBox>

        <FlexBox
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <HeartIcon color="#F84A68" />

          <SmallText>좋아요 {likeCount}</SmallText>
        </FlexBox>
      </ContainerBox>

      {/* share button */}
      <CopyToClipboard text={url} onCopy={() => setIsCopyClipboard(true)}>
        <ShareButton
          style={{
            margin: '32px auto',
            gap: '8px',
            alignSelf: 'center',
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
      <FlexBox>
        {contentData.paragraphs.map((paragraph, index) => {
          return <ContentsParagraph key={index} {...paragraph} />
        })}
      </FlexBox>

      <HorizontalLine />

      {/* faq section */}
      <FAQ faqData={faqData} />

      <HorizontalLine />

      {/* vote section */}
      {voteData && (
        <Vote
          voteData={voteData}
          count={voteCount}
          hasVoted={hasVoted}
          handleSendVote={handleSendVote}
          choice={choice}
        />
      )}

      {/* bottom section */}
      <ContainerBox
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: '8px',
          padding: '32px',
        }}
      >
        <FlexBox
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3px',
          }}
        >
          <Typography
            size={'12px'}
            weight={500}
            color={'#888888'}
            spacing={-0.48}
          >
            링크 공유하기
          </Typography>
          {/* TODO: Share Feature */}
          <CopyToClipboard text={url} onCopy={() => setIsCopyClipboard(true)}>
            <RoundButton>
              <ShareIcon width={14} height={18} color={'#323232'} />
            </RoundButton>
          </CopyToClipboard>
        </FlexBox>

        {/* TODO: Like Feature */}
        <RoundButton onClick={() => handleLike(id)}>
          <HeartIcon width={18} height={18} color={'#F84A68'} />
        </RoundButton>
      </ContainerBox>

      <ContainerBox
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '32px',
        }}
      >
        <FlexBox
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <TreeIcon color="#00916F" />
          <SmallText>조회수 {viewCount}</SmallText>
        </FlexBox>

        <FlexBox
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '2px',
          }}
        >
          <HeartIcon color="#F84A68" />

          <SmallText>좋아요 {likeCount}</SmallText>
        </FlexBox>
      </ContainerBox>

      <HorizontalLine />

      <ContainerBox
        style={{
          padding: '32px',
          gap: '8px',
        }}
      >
        <Typography
          as="h2"
          size={'14px'}
          weight={600}
          spacing={-0.56}
          color={'#595959'}
        >
          이 읽을 보따리의 대표 키워드 모아보기
        </Typography>
        <FlexBox
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {keywords.map((keyword, index) => (
            <KeywordBox key={index}>
              <Typography
                size={'12px'}
                weight={500}
                spacing={-0.48}
                color={'#888888'}
              >
                {keyword}
              </Typography>
            </KeywordBox>
          ))}
        </FlexBox>
      </ContainerBox>

      <HorizontalLine />

      <ContainerBox
        style={{
          background: '#503939',
          padding: '32px 0',
          gap: '32px',
        }}
      >
        <Typography
          as="h2"
          style={{
            paddingLeft: '32px',
          }}
          size={'18px'}
          weight={600}
          spacing={-0.72}
          color={'#FFF'}
        >
          다른 보따리 읽으러 가기
        </Typography>
        <RowScrollBox>
          {contentsCardDatas
            .filter((data) => Number(id) !== data.id)
            .map((data) => (
              <ContentsCard {...data} />
            ))}
        </RowScrollBox>
      </ContainerBox>
    </>
  )
}

const SmallText = (props) => {
  const { children, style } = props
  return (
    <Typography
      style={style}
      size={'12px'}
      weight={600}
      spacing={-0.48}
      color={'#888'}
    >
      {children}
    </Typography>
  )
}

const dateFormat = (date) => {
  const [year, month, day] = date.split('.')

  return `${year}년 ${month}월 ${day}일`
}

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
`

const RowScrollBox = styled.div`
  display: flex;
  flexdirection: row;
  padding: 0 32px;
  gap: 24px;
  background: #503939;
  overflow-x: auto;
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

const HorizontalLine = styled.div`
  width: 100%;
  height: 3px;
  background: #f1f1f1;
`

const RoundButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 64px;
  border: 1px solid var(--stroke_grey, #e5e5e5);
  background: #fff;
`
const KeywordBox = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 64px;
  border: 1px solid var(--stroke_grey, #e5e5e5);
  background: #eee;
`
