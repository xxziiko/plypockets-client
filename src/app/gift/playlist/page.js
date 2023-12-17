'use client'

import { useEffect, useState } from 'react'
import { useFetchTodayHot100, useFetchKoreanHot100 } from '@/api/services/hooks'

import { GiftHeader } from '@/components'

import ArrowBottomIcon from '@/icons/ArrowBottomIcon'
import SearchIcon from '@/icons/SearchIcon'
import SkipIcon from '@/icons/SkipIcon'

import theme from '@/styles/theme'
import ScrollUpButton from './ScrollUpButton'
import PlayListSearchPage from './PlaylistSearchPage'
import Playlist from './Playlist'
import Style from './styles'

export const useSlice = ({ api, initialNum }) => {
  const { data, isLoading, error } = api()
  const [slicedData, setSlicedData] = useState([])

  const slicedArray = (length) => {
    return data?.slice(0, length || data?.length) || []
  }

  const getList = (length) => {
    setSlicedData(slicedArray(length))
  }

  useEffect(() => {
    setSlicedData(slicedArray(initialNum))
  }, [data])

  return { data: slicedData, getList, isLoading, error }
}

export default function PlaylistPage() {
  const { data: hot100list, getList: getHot100List } = useSlice({
    api: useFetchTodayHot100,
    initialNum: 5,
  })
  const { data: koreanHot100List, getList: getKoreanHot100List } = useSlice({
    api: useFetchKoreanHot100,
    initialNum: 5,
  })
  const [isSearching, setIsSearching] = useState(false)

  const isAllExpandedHot100List = hot100list.length >= 50
  const isAllExpandedKoreanHot100List = koreanHot100List >= 50

  const updateSongListLength = (length, type) => {
    const steps = [5, 30, 50]
    const nextStep = steps[steps.indexOf(length) + 1]

    if (type === 'popular') {
      getHot100List(nextStep)
    }
    if (type === 'hot') {
      getKoreanHot100List(nextStep)
    }
  }

  return (
    <Style.Box>
      <GiftHeader
        title="노래 선물하기"
        subTitle="당신이 선물하고 싶은 노래는?"
        colors={{ button: theme.colors.bgGreen }}
      />
      <Style.InputContainer>
        <Style.InputWrapper onClick={() => setIsSearching(true)}>
          <SearchIcon />
          <span>원하는 노래를 검색해보세요</span>
        </Style.InputWrapper>
        <Style.InputBottomText>
          <p>노래 선택 건너뛰기</p>
          <SkipIcon />
        </Style.InputBottomText>
      </Style.InputContainer>
      <Style.ContentWrapper>
        <ScrollUpButton />

        <Style.PlayListContainer>
          <Style.PlayListContainerTitle>
            지금 많이 공유되고 있는 노래 50개를 가져왔어요!
          </Style.PlayListContainerTitle>

          {hot100list?.map((el) => (
            <Playlist data={el} />
          ))}

          {!isAllExpandedHot100List && (
            <Style.PlayListExpandButton
              onClick={() => updateSongListLength(hot100list.length, 'popular')}
            >
              <span>노래 더보기</span>
              <ArrowBottomIcon />
            </Style.PlayListExpandButton>
          )}
        </Style.PlayListContainer>

        <Style.PlayListContainer>
          <Style.PlayListContainerTitle>
            지금 가장 핫한 노래 50개를 가져왔어요!
          </Style.PlayListContainerTitle>
          {koreanHot100List?.map((el) => (
            <Playlist data={el} />
          ))}
          {!isAllExpandedKoreanHot100List && (
            <Style.PlayListExpandButton
              onClick={() =>
                updateSongListLength(koreanHot100List.length, 'hot')
              }
            >
              <span>노래 더보기</span>
              <ArrowBottomIcon />
            </Style.PlayListExpandButton>
          )}
        </Style.PlayListContainer>
      </Style.ContentWrapper>
      {isSearching && (
        <PlayListSearchPage closeView={() => setIsSearching(false)} />
      )}
    </Style.Box>
  )
}
