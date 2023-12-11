'use client'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { DefaultButton, RoundBox, Typography } from '@/components'
import { flexDirection } from '@/styles/common'

const dummyData = {
  title: '크리스마스만을 위해 태어난 지금 마시기 딱 좋은 와인4종',
  subTitle:
    '달콤한 분위기가 담겨있는 와인 추천 4종을 지금 모아왔어요!크리스마스 분위기에 취하고 와인의 달콤함에 취해...',
  author: '맛잘알 술잘알 은비에디터',
  date: '2023년 12월 7일 목요일',
  viewCount: 627,
  likeCount: 627,
  paragraph: [
    {
      title:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서 보낼지 고민',
      subTitle:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서, 어떤 음식을 먹으며 보낼지 고민이 된다. 아무거나 먹을 수는 없지! 특히 중요한 것은 바로 술인데, 분위기를 내야 하는 만큼 주종은 와인으로 고르는 것이 좋다. 그럼 어떤 와인이 좋을까. 따스하고 신나는 분위기를 담은 달콤하면서도 가볍게 마실 수 있는 디저트 와인이 제격! 크리스마스만을 기다려 온 특별한 술, 어떤 와인이 있을까?',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
    },
    {
      title:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서 보낼지 고민',
      subTitle:
        '남녀노소 모두가 사랑하는 크리스마스. 특별한 날이니만큼 어디에서, 어떤 음식을 먹으며 보낼지 고민이 된다. 아무거나 먹을 수는 없지! 특히 중요한 것은 바로 술인데, 분위기를 내야 하는 만큼 주종은 와인으로 고르는 것이 좋다. 그럼 어떤 와인이 좋을까. 따스하고 신나는 분위기를 담은 달콤하면서도 가볍게 마실 수 있는 디저트 와인이 제격! 크리스마스만을 기다려 온 특별한 술, 어떤 와인이 있을까?',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg',
    },
  ],
}

export default function ContentDetailPage() {
  const router = useRouter()
  return (
    <Background>
      <Container>
        <Typography size="24px" weight={600} spacing={-0.96} color={'#000000'}>
          콘텐츠 페이지
        </Typography>
        <BottomBox>
          <Typography size="16px" weight={600} spacing={-0.64}>
            아직 플리보따리가 없으시다면 새롭게 만들어보세요!
          </Typography>
          <DefaultButton
            command="내 플리 보따리 만들기"
            color={({ theme }) => theme.colors.white}
            backgroundColor={({ theme }) => theme.colors.red}
            onClick={() => router.push('/login', undefined, { shallow: true })}
          />
        </BottomBox>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  ${flexDirection}
`

const Container = styled.section`
  width: 100%;
  padding: 32px 32px 0;
  color: ${({ theme }) => theme.colors.black};

  ${flexDirection};
`

const DescriptionBox = styled.div`
  padding-top: 32px;
  gap: 8px;
  ${flexDirection}
`

const BottomBox = styled.div`
  position: fixed;
  align-items: center;
  bottom: 0;
  gap: 16px;
  padding-bottom: 96px;
  ${flexDirection}
`
