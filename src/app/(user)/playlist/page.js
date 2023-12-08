'use client'
import { useState } from 'react'
import styled from 'styled-components'
import { AlbumImage, RoundBox, TextButton, Typography } from '@/components'
import {
  flexAlign,
  flexCenter,
  flexDirection,
  flexSpaceBetween,
} from '@/styles/common'
import { useEffect } from 'react'
import { getTodayHot100 } from '@/api/services'

// TODO: 앨범 이미지 서버사이드 렌더링으로 받기
export default function PlaylistPage() {
  // const {}
  const [data, setData] = useState([])
  const [selectedSong, setSelectedSong] = useState({})
  const [isDetail, setIsDetail] = useState(false)

  console.log('selectSong', selectedSong)

  const goToWriteLetter = () => {}

  const goToDetail = (title) => {
    const selectedItem = data.filter((list) => list.title === title)
    setSelectedSong(...selectedItem)
    setIsDetail(true)
  }

  useEffect(() => {
    getTodayHot100().then((data) => {
      console.log(data)
      setData(data)
    })
  }, [])

  return (
    <Box>
      <div>
        <RoundBox
          as="button"
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
            buttonAction={goToWriteLetter()}
            height="12px"
            width="21px"
            gap="3px"
          />
        </ButtonBox>
      </div>

      {!isDetail && (
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
            {data.map((list) => (
              <AlbumBox key={list.id} onClick={() => goToDetail(list?.title)}>
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
              </AlbumBox>
            ))}
          </ListBox>
        </Section>
      )}

      {isDetail && (
        <Section>
          <Card url={selectedSong?.imageUrl} />
          <AlbumDetail>
            <AlbumImage
              width={184}
              height={184}
              imgUrl={selectedSong?.imageUrl}
            />

            <AlbumInfo className="detail">
              <Typography
                color={({ theme }) => theme.colors.black}
                size={({ theme }) => theme.fontSize.samll}
                weight={({ theme }) => theme.fontWeight.medium}
                spacing={-0.64}
              >
                {selectedSong.title}
              </Typography>
              <Typography
                color={({ theme }) => theme.colors.black}
                size={({ theme }) => theme.fontSize.xsmall}
                weight={({ theme }) => theme.fontWeight.small}
                spacing={-0.48}
              >
                {selectedSong.artistName}
              </Typography>
            </AlbumInfo>
          </AlbumDetail>
        </Section>
      )}
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
  position: relative;
  padding-top: 18px;
`

const ListBox = styled.div`
  flex-flow: wrap;
  padding: 16px 0;
  gap: 23px;

  ${flexSpaceBetween}
`
const AlbumBox = styled.div`
  cursor: pointer;
`

const AlbumInfo = styled.div`
  width: 144px;
  ${flexDirection};
`

const Card = styled.div`
  position: absolute;
  width: 310px;
  height: 444px;
  flex-shrink: 0;
  border-radius: 8px;
  backdrop-filter: blur(10px) !important;
  background-image: url(${(props) => props.url});
  filter: blur(13px);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  z-index: -1;
  ${flexCenter};
`

const AlbumDetail = styled.div`
  gap: 17px;
  flex-direction: column;
  border: 1px solid rebeccapurple;
  ${flexCenter}
`
