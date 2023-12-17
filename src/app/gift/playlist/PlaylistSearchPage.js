import Style from './styles'

import Playlist from './Playlist'
import SearchIcon from '@/icons/SearchIcon'
import theme from '@/styles/theme'

export default function PlayListSearchPage({ closeView, data }) {
  return (
    <Style.SearchPageBox>
      <Style.SearchPageTopBorder />
      <Style.SearchPageTopContainer>
        <Style.InputWrapper>
          <SearchIcon />
          <input />
        </Style.InputWrapper>
        <Style.SearchPageCloseButton onClick={closeView}>
          닫기
        </Style.SearchPageCloseButton>
      </Style.SearchPageTopContainer>
      <Style.SearchPageContentWrapper>
        <Style.PlayListContainer>
          <Style.PlayListContainerTitle color={theme.colors.white}>
            지금 가장 사랑 받는 노래 HOT 5
          </Style.PlayListContainerTitle>
          {data?.map((el) => (
            <Playlist
              data={el}
              style={{ color: theme.colors.white }}
            ></Playlist>
          ))}
        </Style.PlayListContainer>
      </Style.SearchPageContentWrapper>
    </Style.SearchPageBox>
  )
}
