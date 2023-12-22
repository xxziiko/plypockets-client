import styled from 'styled-components'
import { flexAlign, flexCenter, flexDirection } from '@/styles/common'
import AlbumImage from './AlbumImage'
import dayjs from 'dayjs'
import TreeIcon from '@/icons/TreeIcon'
import ProgressIcon from '@/icons/ProgressIcon'

export default function SlideCard(props) {
  const { list, audioRefs, index } = props

  console.log('list', list)

  return (
    <Card>
      <div>
        <AlbumInfo>
          <AlbumImage
            imgUrl={
              !list?.imageUrl ? '/img/not_found_album.png' : list.imageUrl
            }
            width={80}
            height={80}
          />

          <div>
            {!list?.imageUrl ? (
              <TitleBox>
                <DefaultText>
                  노래는 없지만 따뜻한 마음이 담겨있어요
                </DefaultText>
              </TitleBox>
            ) : (
              <TitleBox>
                <DefaultText style={{ fontSize: '14px' }}>
                  {list?.title}
                </DefaultText>
                <DefaultText>{list?.artistName}</DefaultText>
              </TitleBox>
            )}
          </div>
        </AlbumInfo>
      </div>

      {!list?.imageUrl && (
        <AudioBox>
          <ProgressIcon
            firstStep="#00916F"
            secondStep="#00916F"
            lastStep="#F84A68"
          />
        </AudioBox>
      )}

      {list?.imageUrl && list?.previewUrl && (
        <div>
          <audio
            id={`card-${index}`}
            controls
            volume="0.5"
            ref={(ref) => (audioRefs.current[index] = ref)}
          >
            <source src={list.previewUrl} type="audio/mp3" />
          </audio>
        </div>
      )}

      {list?.imageUrl && !list?.previewUrl && (
        <AudioBox>
          <DefaultText>이 노래는 미리 들을 수 없어요!</DefaultText>
        </AudioBox>
      )}

      <FriendName>{list.friendname}</FriendName>
      <DefaultText>
        <BordText>선물받은 시간</BordText>

        {list?.createdDate &&
          dayjs(list.createdDate)
            .locale('ko')
            .format('YYYY년 MM월 DD일 HH시 mm분')}
      </DefaultText>
      <Content>{list.letter}</Content>
    </Card>
  )
}

const Card = styled.div`
  flex-direction: column;
  width: 310px;
  height: 450px;
  padding: 32px 18px 24px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.pink};
  gap: 8px;
  ${flexCenter}
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text_basic, var(--text_basic, #323232));
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  font-size: 12px;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.48px;
`

const AlbumInfo = styled.div`
  gap: 4px;
  flex-direction: column;
  flex: 1 0 0;
  overflow: hidden;
  color: var(--main_black, #111);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.56px;

  ${flexCenter}
`

const FriendName = styled.p`
  color: var(--text_basic, var(--text_basic, #323232));
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.64px;

  ${flexCenter}
`

const DefaultText = styled.div`
  color: var(--text_basic, var(--text_basic, #323232));
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.48px;
  gap: 8px;

  ${flexAlign}
`

const BordText = styled.p`
  color: var(--text_basic, var(--text_basic, #323232));
  font-weight: 700;
`

const TitleBox = styled.div`
  flex-direction: column;
  min-height: 30px;
  ${flexCenter}
`

const Box = styled.div`
  ${flexCenter}
  height: 374px;
  font-size: 12px;
`
const AudioBox = styled.div`
  ${flexCenter}
  width: 100%;
  height: 120px;
`
