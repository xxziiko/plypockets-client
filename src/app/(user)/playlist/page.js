'use client'
import { useState } from 'react'
import styled from 'styled-components'
import { AlbumImage, RoundInput, TextButton, Typography } from '@/components'
import { flexAlign, flexDirection, flexSpaceBetween } from '@/styles/common'
import { useEffect } from 'react'
import { getTodayHot100 } from '@/api/services'

export default function PlaylistPage() {
  const [data, setData] = useState([])
  const [selectedSong, setSelectedSong] = useState({})
  const goToWriteLetter = (title) => {
    const selectedItem = data.filter((list) => list.title === title)
    setSelectedSong(...selectedItem)

    console.log('song', selectedSong)
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
          {data.map((list) => (
            <AlbumBox
              key={list.id}
              onClick={() => goToWriteLetter(list?.title)}
            >
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
  height: 100%;
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
  ${flexDirection}
`
