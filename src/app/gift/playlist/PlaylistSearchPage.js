import { useState } from 'react'

import { useFetchSearchSong } from '@/api/services/hooks'
import { useFetchTodayHot100 } from '@/api/services/hooks'

import useDebounce from '@/hooks/useDebounce'

import SearchIcon from '@/icons/SearchIcon'
import theme from '@/styles/theme'

import Style from './styles'
import Playlist from './Playlist'
import { NotFound } from '@/components'

const useSearchSong = () => {
  const [inputValue, setInputValue] = useState('')
  const debouncedValue = useDebounce({ value: inputValue, delay: 500 })
  const { data, error, loading } = useFetchSearchSong(debouncedValue)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return { debouncedValue, inputValue, handleInputChange, data, error, loading }
}

export default function PlayListSearchPage({ closeView, handleClick }) {
  const { data: initialData } = useFetchTodayHot100()
  const { debouncedValue, inputValue, data, handleInputChange } =
    useSearchSong()

  const isNotFoundState = debouncedValue && data?.length === 0
  const isDefaultState = initialData && !inputValue
  const isSearchingState = !isNotFoundState && !isDefaultState

  return (
    <Style.SearchPageBox>
      <Style.SearchPageTopBorder />

      <Style.SearchPageTopContainer>
        <Style.InputWrapper>
          <SearchIcon />
          <input maxLength={30} onChange={handleInputChange} />
        </Style.InputWrapper>
        <Style.SearchPageCloseButton onClick={closeView}>
          닫기
        </Style.SearchPageCloseButton>
      </Style.SearchPageTopContainer>
      <Style.SearchPageContentWrapper>
        {isNotFoundState && (
          <Style.NotFoundWrapper>
            <NotFound />
          </Style.NotFoundWrapper>
        )}
        <Style.PlayListContainer>
          {isDefaultState && (
            <>
              <Style.PlayListContainerTitle color={theme.colors.white}>
                지금 가장 사랑 받는 노래 HOT 5
              </Style.PlayListContainerTitle>
              {initialData?.slice(0, 6).map((el) => (
                <Playlist
                  data={el}
                  style={{ color: theme.colors.white }}
                  onClick={() => handleClick(el)}
                />
              ))}
            </>
          )}
          {isSearchingState &&
            data?.map((el) => (
              <Playlist
                data={el}
                style={{ color: theme.colors.white }}
                onClick={() => handleClick(el)}
              />
            ))}
        </Style.PlayListContainer>
      </Style.SearchPageContentWrapper>
    </Style.SearchPageBox>
  )
}
