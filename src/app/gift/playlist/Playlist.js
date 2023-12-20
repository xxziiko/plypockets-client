import styled from 'styled-components'
import theme from '@/styles/theme'

export default function Playlist({
  data,
  style = { color: theme.colors.black },
  onClick,
}) {
  return (
    <PlayListWrapper onClick={onClick}>
      <PlayListImageWrapper>
        <img src={data.imageUrl} />
      </PlayListImageWrapper>
      <PlayListTextWrapper>
        <PlayListTitle color={style.color}>{data.title}</PlayListTitle>
        <PlayListSubTitle color={style.color}>
          {data.artistName}
        </PlayListSubTitle>
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
  border-radius: 8px;
  overflow: hidden;
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
  font-family: Pretendard;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PlayListSubTitle = styled.p`
  font-size: 12px;
  color: ${({ color }) => color};
  font-family: Pretendard;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
