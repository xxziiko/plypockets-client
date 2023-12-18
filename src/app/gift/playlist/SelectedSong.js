import styled from 'styled-components'

import { useRouter } from 'next/navigation'
import { useGiftStore } from '@/stores/gift'

import { Typography } from '@/components'
import { DefaultButton } from '@/components'

const SelectedSong = ({ data }) => {
  const router = useRouter()
  const { setSpotifyId } = useGiftStore()

  const { spotifyId, artistName, title, albumName, imageUrl, previewUrl } = data

  const handleClickedNext = () => {
    setSpotifyId(spotifyId)
    router.push('/gift/writing', undefined, { shallow: true })
  }

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

      <audio controls autoplay>
        <source src={previewUrl} type="audio/mpeg" />
      </audio>

      <Typography color={'#111'} fontSize={'16px'} weight={700} spacing={-0.64}>
        {albumName}
      </Typography>

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
