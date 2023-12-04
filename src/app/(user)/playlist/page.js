'use client'
import styled from 'styled-components'
import { AlbumImage, RoundInput, TextButton, Typography } from '@/components'
import { flexAlign, flexDirection, flexSpaceBetween } from '@/styles/common'

export default function PlaylistPage() {
  const goToWriteLetter = () => {}

  const MOCK = [
    {
      id: 0,
      artistName: 'Jack Harlow',
      title: 'Lovin On Me',
      albumName: 'Lovin On Me',
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b273fcf4adae77baba5d0169e8e8',
      previewUrl:
        'https://p.scdn.co/mp3-preview/eeeb6151d0049367b3ad3db0389e9e3b116c0774?cid=9aa067b28e444056ab123c76058ca7ab',
    },
    {
      id: 1,
      artistName: 'Tate McRae',
      title: 'greedy',
      albumName: 'greedy',
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b27322fd802bc61db666c7c81aa8',
      previewUrl:
        'https://p.scdn.co/mp3-preview/ca7bdcb691fb64a5af8a3253b89356390664fcf1?cid=9aa067b28e444056ab123c76058ca7ab',
    },
  ]

  return (
    <Box>
      <div>
        <RoundInput
          width="310px"
          placeholder="원하는 노래를 검색해보세요"
          isReadOnly={true}
        />
        <ButtonBox>
          <TextButton
            color="#CCC"
            size={({ theme }) => theme.fontSize.xsmall}
            weight={({ theme }) => theme.fontWeight.medium}
            spacing={-0.8}
            buttonCommand="노래 선택 건너뛰기"
            buttonAction={goToWriteLetter}
            height="12px"
            width="21px"
            gap="3px"
          />
        </ButtonBox>
      </div>

      <Section>
        <Typography
          color={({ theme }) => theme.colors.black}
          size={({ theme }) => theme.fontSize.samll}
          weight={({ theme }) => theme.fontWeight.medium}
          spacing={-0.64}
        >
          Top 50 인기차트
        </Typography>
        <ListBox>
          {MOCK.map((list) => (
            <div key={list.id}>
              <AlbumImage imgUrl={list.imageUrl} width={144} height={144} />
              <AlbumInfo>
                <Typography
                  color={({ theme }) => theme.colors.black}
                  size={({ theme }) => theme.fontSize.samll}
                  weight={({ theme }) => theme.fontWeight.medium}
                  spacing={-0.64}
                >
                  {list.title}
                </Typography>
                <Typography
                  color={({ theme }) => theme.colors.black}
                  size={({ theme }) => theme.fontSize.xsmall}
                  weight={({ theme }) => theme.fontWeight.small}
                  spacing={-0.48}
                >
                  {list.artistName}
                </Typography>
              </AlbumInfo>
            </div>
          ))}
        </ListBox>
      </Section>
    </Box>
  )
}

const Box = styled.div`
  width: 100%;
  height: 100%;
`

const ButtonBox = styled.div`
  padding-top: 9px;
  justify-content: right;
  ${flexAlign}
`

const Section = styled.section`
  padding-top: 18px;
`

const ListBox = styled.div`
  flex-flow: wrap;
  padding: 16px 0;
  gap: 23px;

  ${flexSpaceBetween}
`

const AlbumInfo = styled.div`
  ${flexDirection}
`
