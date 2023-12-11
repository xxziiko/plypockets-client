'use client'
import { useRouter } from 'next/navigation'
import styled, { StyleSheetManager } from 'styled-components'
import { DefaultButton, RoundBox, Typography } from '@/components'
import { flexDirection } from '@/styles/common'

import GoBackIcon from '@/icons/GoBackIcon'
import TreeIcon from '@/icons/TreeIcon'
import HeartIcon from '@/icons/HeartIcon'
import ShareIcon from '@/icons/ShareIcon'

const dummyData = {
  title: '크리스마스만을 위해 태어난 지금 마시기 딱 좋은 와인4종',
  subTitle:
    '달콤한 분위기가 담겨있는 와인 추천 4종을 지금 모아왔어요! 크리스마스 분위기에 취하고 와인의 달콤함에 취해...',
  author: '맛잘알 술잘알 은비에디터',
  date: '2023년 12월 7일 목요일',
  viewCount: 627,
  likeCount: 627,
  paragraph: [
    {
      title:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서 보낼지 고민',
      paragraph:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서, 어떤 음식을 먹으며 보낼지 고민이 된다. 아무거나 먹을 수는 없지! 특히 중요한 것은 바로 술인데, 분위기를 내야 하는 만큼 주종은 와인으로 고르는 것이 좋다. 그럼 어떤 와인이 좋을까. 따스하고 신나는 분위기를 담은 달콤하면서도 가볍게 마실 수 있는 디저트 와인이 제격! 크리스마스만을 기다려 온 특별한 술, 어떤 와인이 있을까?',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
      imageDescription: '모젤 크리스마스 와인',
    },
    {
      title:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서 보낼지 고민',
      paragraph:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서, 어떤 음식을 먹으며 보낼지 고민이 된다. 아무거나 먹을 수는 없지! 특히 중요한 것은 바로 술인데, 분위기를 내야 하는 만큼 주종은 와인으로 고르는 것이 좋다. 그럼 어떤 와인이 좋을까. 따스하고 신나는 분위기를 담은 달콤하면서도 가볍게 마실 수 있는 디저트 와인이 제격! 크리스마스만을 기다려 온 특별한 술, 어떤 와인이 있을까?',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
      imageDescription: '모젤 크리스마스 와인',
    },
  ],
}

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

export default function ContentDetailPage() {
  const router = useRouter()
  return (
    <Container>
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
            {dummyData.title}
          </Typography>
        </Box>

        {/* back icon */}
        <Box style={{ alignItems: 'flex-start' }}>
          <GoBackIcon color={'#B3DCD2'} />
        </Box>
      </DescriptionBox>

      {/* subTitle section */}
      <DescriptionBox style={{ paddingTop: '8px' }}>
        <Typography size="14px" weight={400} spacing={-0.56} color={'#000000'}>
          {dummyData.subTitle}
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
        <AuthorText>{dummyData.author}</AuthorText>

        <AuthorText>{dummyData.date}</AuthorText>
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
          <AuthorText>조회수 {dummyData.viewCount}</AuthorText>
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

          <AuthorText>좋아요 {dummyData.likeCount}</AuthorText>
        </Box>
      </DescriptionBox>

      {/* share button */}
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

      {/* paragraph section */}
      <Box style={{ paddingTop: '32px' }}>
        {dummyData.paragraph.map((item, index) => {
          return (
            <Box key={index}>
              <DescriptionBox>
                <Typography
                  size={'18px'}
                  weight={600}
                  spacing={-0.72}
                  color={'#323232'}
                >
                  {item.title}
                </Typography>
              </DescriptionBox>

              <DescriptionBox style={{ paddingTop: '16px' }}>
                <Typography
                  size={'14px'}
                  weight={400}
                  spacing={-0.56}
                  color={'#323232'}
                >
                  {item.paragraph}
                </Typography>
              </DescriptionBox>

              <img
                src={item.image}
                alt={`${item.image}`}
                style={{ paddingTop: '24px' }}
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
                  {item.imageDescription}
                </Typography>
              </DescriptionBox>
            </Box>
          )
        })}
      </Box>
    </Container>
  )
}

const Container = styled.div`
  background-color: #ffffff;

  width: 100%;
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.black};

  ${flexDirection}
`

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
