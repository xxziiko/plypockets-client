'use client'

import { useState } from 'react'
import { GiftHeader, ScrollUpButton } from '@/components'

import ArrowBottomIcon from '@/icons/ArrowBottomIcon'
import SearchIcon from '@/icons/SearchIcon'
import SkipIcon from '@/icons/SkipIcon'

import theme from '@/styles/theme'
import Style from './styles'

import PlayListSearchPage from './PlaylistSearchPage'
import Playlist from './Playlist'

export default function PlaylistPage() {
  const [isSearching, setIsSearching] = useState(false)
  const list = new Array(5).fill()

  return (
    <Style.Box>
      <ScrollUpButton />
      <GiftHeader
        title="노래 선물하기"
        subTitle="당신이 선물하고 싶은 노래는?"
        colors={{ button: theme.colors.bgGreen }}
      />
      <Style.ContentWrapper>
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

        <Style.PlayListContainer>
          <Style.PlayListContainerTitle>
            지금 많이 공유되고 있는 노래 50개를 가져왔어요!
          </Style.PlayListContainerTitle>
          {list.map(() => (
            <Playlist />
          ))}
          <Style.PlayListExpandButton>
            <span>노래 더보기</span>
            <ArrowBottomIcon />
          </Style.PlayListExpandButton>
        </Style.PlayListContainer>

        <Style.PlayListContainer>
          <Style.PlayListContainerTitle>
            지금 가장 핫한 노래 100개를 가져왔어요!
          </Style.PlayListContainerTitle>
          {list.map(() => (
            <Playlist />
          ))}
          <Style.PlayListExpandButton>
            <span>노래 더보기</span>
            <ArrowBottomIcon />
          </Style.PlayListExpandButton>
        </Style.PlayListContainer>
      </Style.ContentWrapper>
      {isSearching && (
        <PlayListSearchPage closeView={() => setIsSearching(false)} />
      )}
    </Style.Box>
  )
}
