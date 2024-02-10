'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

import {
  useFetchTodayHot100,
  useFetchKoreanHot100,
  useFetchLimitedData,
} from '@/api/services/hooks'
import { useGiftStore } from '@/stores/gift'

import { GiftHeader } from '@/components'

import ArrowBottomIcon from '@/icons/ArrowBottomIcon'
import SearchIcon from '@/icons/SearchIcon'
import SkipIcon from '@/icons/SkipIcon'

import theme from '@/styles/theme'
import ScrollUpButton from './ScrollUpButton'
import PlayListSearchPage from './PlaylistSearchPage'
import Playlist from './Playlist'
import SelectedSong from './SelectedSong'

import Style from './styles'

export default function PlaylistPage() {
  const { data: hot100list, getList: getHot100List } = useFetchLimitedData({
    fetchHooks: useFetchTodayHot100,
    initialNum: 5,
  })
  const { data: koreanHot100List, getList: getKoreanHot100List } =
    useFetchLimitedData({
      fetchHooks: useFetchKoreanHot100,
      initialNum: 5,
    })
  const { nickname } = useGiftStore()
  const router = useRouter()
  const scrollRef = useRef()

  const [selectedSong, setSelectedSong] = useState(null)
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

  const handleButton = () => {
    if (selectedSong) setSelectedSong(false)
    else router.push(`/${nickname}`, undefined, { shallow: true })
  }

  return (
    <Style.Box>
      <GiftHeader
        title="노래 선물하기"
        subTitle="당신이 선물하고 싶은 노래는?"
        colors={{ button: theme.colors.bgGreen }}
        buttonAction={() => handleButton()}
        step={1}
      />
      <Style.InputContainer>
        <Style.InputWrapper
          onClick={() => {
            setSelectedSong(null)
            setIsSearching(true)
          }}
        >
          <SearchIcon />
          <span>
            {selectedSong ? '다시 검색할래요' : '원하는 노래를 검색해보세요'}
          </span>
        </Style.InputWrapper>
        <Style.InputBottomText>
          <button
            onClick={() =>
              router.push('/gift/writing', undefined, { shallow: true })
            }
          >
            <p>노래 선택 건너뛰기</p>
            <SkipIcon />
          </button>
        </Style.InputBottomText>
      </Style.InputContainer>
      {selectedSong ? (
        <SelectedSong data={selectedSong} />
      ) : (
        <Style.ContentWrapper ref={scrollRef}>
          <Style.PlayListContainer>
            <Style.PlayListContainerTitle>
              지금 많이 공유되고 있는 노래 50개를 가져왔어요!
            </Style.PlayListContainerTitle>

            {hot100list?.map((el) => (
              <Playlist
                data={el}
                key={el.spotifyId}
                onClick={() => setSelectedSong(el)}
              />
            ))}

            {!isAllExpandedHot100List && (
              <Style.PlayListExpandButton
                onClick={() =>
                  updateSongListLength(hot100list.length, 'popular')
                }
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
              <Playlist
                data={el}
                key={el.spotifyId}
                onClick={() => setSelectedSong(el)}
              />
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
      )}
      {isSearching && (
        <PlayListSearchPage
          closeView={() => setIsSearching(false)}
          handleClick={(data) => {
            setIsSearching(false)
            setSelectedSong(data)
          }}
        />
      )}
      {!isSearching && !selectedSong && (
        <ScrollUpButton scrollRef={scrollRef.current} />
      )}
    </Style.Box>
  )
}
