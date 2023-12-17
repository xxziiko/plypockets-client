import styled from 'styled-components'
import theme from '@/styles/theme'

export default function Playlist({ style = { color: theme.colors.black } }) {
  return (
    <PlayListWrapper>
      <PlayListImageWrapper>이미지</PlayListImageWrapper>
      <PlayListTextWrapper>
        <PlayListTitle color={style.color}>This Christmas</PlayListTitle>
        <PlayListSubTitle color={style.color}>태연</PlayListSubTitle>
      </PlayListTextWrapper>
    </PlayListWrapper>
  )
}

const PlayListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 64px;
`

const PlayListImageWrapper = styled.div`
  width: 64px;
  height: 64px;
  border: 1px solid black;
  border-radius: 8px;
`

const PlayListTextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;

  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.56px;

  overflow: hidden;
`

const PlayListTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ color }) => color};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PlayListSubTitle = styled.p`
  font-size: 12px;
  color: ${({ color }) => color};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
