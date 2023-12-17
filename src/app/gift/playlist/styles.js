import styled from 'styled-components'

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/img/playlist-background.jpg');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: scroll;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  margin-bottom: 16px;
`

const InputBottomText = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  width: 100%;

  p {
    margin-right: 4px;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.48px;
    color: ${({ theme }) => theme.colors.mainGrey};
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 312px;
  height: 40px;
  padding: 0px 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.strokeGrey}`};
  border-radius: 64px;
  background-color: ${({ theme }) => theme.colors.white};

  input {
    width: 100%;
    height: 100%;
  }

  span {
    color: ${({ theme }) => theme.colors.mainGrey};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`

const PlayListContainerTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
  color: ${({ color, theme }) => (color ? color : theme.colors.black)};
`

const PlayListExpandButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 4px 24px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => `1px solid ${theme.colors.green}`};
  border-radius: 64pc;

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.64px;
  }
`

// 플레이리스트 검색 페이지 관련 스타일 모음

const SearchPageBox = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px 16px 0px 0px;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/img/playlist-search-background.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: ${({ theme }) => theme.colors.brown};
`

const SearchPageTopBorder = styled.div`
  margin-top: 18px;
  margin-bottom: 32px;

  width: 112px;
  height: 4px;

  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};
`

const SearchPageTopContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`

const SearchPageCloseButton = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.64px;
`

const SearchPageContentWrapper = styled.div`
  border: 1px solid white;

  padding: 0 32px;
  width: 100%;
  height: 100%;
`

export default {
  Box,
  ContentWrapper,
  InputContainer,
  InputWrapper,
  InputBottomText,

  PlayListContainer,
  PlayListExpandButton,
  PlayListContainerTitle,

  SearchPageBox,
  SearchPageTopBorder,
  SearchPageCloseButton,
  SearchPageTopContainer,
  SearchPageContentWrapper,
}
