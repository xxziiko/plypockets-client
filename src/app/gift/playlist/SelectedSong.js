import { useRef, useEffect } from 'react'
import styled from 'styled-components'

import { useRouter } from 'next/navigation'
import { useGiftStore } from '@/stores/gift'

import { Typography } from '@/components'
import { DefaultButton } from '@/components'
import { flexAlign, flexCenter } from '@/styles/common'

const SelectedSong = ({ data }) => {
  const router = useRouter()
  const { setSpotifyId } = useGiftStore()
  const audioRefs = useRef()

  const { spotifyId, artistName, title, albumName, imageUrl, previewUrl } = data

  const handleClickedNext = () => {
    setSpotifyId(spotifyId)
    router.push('/gift/writing', undefined, { shallow: true })
  }

  useEffect(() => {
    if (audioRefs.current && previewUrl) {
      audioRefs.current.volume = 0.5
      audioRefs.current?.play()
    }
  }, [spotifyId])

  return (
    <Container>
      <BackgroundImage imageUrl={imageUrl} />
      <AlbumImage src={imageUrl} />
      <Typography color={'#111'} fontSize={'14px'} weight={500} spacing={-0.56}>
        {title}
      </Typography>
      <Typography
        color={'#323232'}
        fontSize={'12px'}
        weight={500}
        spacing={-0.48}
      >
        {artistName}
      </Typography>

      {previewUrl ? (
        <audio controls ref={audioRefs}>
          <source src={previewUrl} type="audio/mpeg" volume="0.5" />
        </audio>
      ) : (
        <AudioBox>
          <DefaultText>이 노래는 미리 들을 수 없어요!</DefaultText>
        </AudioBox>
      )}

      <AlbumInfo>
        <Typography
          color={'#111'}
          fontSize={'16px'}
          weight={700}
          spacing={-0.64}
        >
          {albumName}
        </Typography>
      </AlbumInfo>
      <ButtonWrapper>
        <DefaultButton
          command="다음으로"
          color="#fff"
          backgroundColor={({ theme }) => theme.colors.green}
          onClick={() => handleClickedNext()}
        />
      </ButtonWrapper>
    </Container>
  )
}

export default SelectedSong

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-top: 30px;
  animation: ${({ theme }) => theme.animation.fadeIn} 0.5s;
`

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 300px;
  height: 326px;

  background-image: url(${(props) => props.imageUrl});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  opacity: 0.5;
  filter: blur(20px);
  -webkit-filter: blur(20px);
  border-radius: 8px;

  z-index: -100;
`

const AlbumImage = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 8px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 48px;
  display: flex;
`

const AlbumInfo = styled.div`
  text-align: center;
  width: 80%;
`
const AudioBox = styled.div`
  ${flexCenter}
  width: 100%;
  /* height: 80px; */
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
