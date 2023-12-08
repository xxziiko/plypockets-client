import styled from 'styled-components'
import {
  flexAlign,
  flexCenter,
  flexDirection,
  flexSpaceBetween,
} from '@/styles/common'
import { RoundBox, AlbumImage, Typography } from '@/components'
import { useHeaderStore } from '@/stores/headers'

export default function SearchModal() {
  const { setModalOpen } = useHeaderStore()
  const SEARCH_MOCK = [
    {
      id: 0,
      artistName: "Girls' Generation",
      title: 'Into the New World',
      albumName: "Girls' Generation",
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b2731111b7562b4b46870d27f98b',
      previewUrl:
        'https://p.scdn.co/mp3-preview/7ea5fde3141b6885aaea64aacd87339c042551da?cid=9aa067b28e444056ab123c76058ca7ab',
    },
    {
      id: 1,
      artistName: "Girls' Generation",
      title: 'Into the New World',
      albumName: "Girls' Generation",
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b2731111b7562b4b46870d27f98b',
      previewUrl:
        'https://p.scdn.co/mp3-preview/7ea5fde3141b6885aaea64aacd87339c042551da?cid=9aa067b28e444056ab123c76058ca7ab',
    },
  ]

  return (
    <Box>
      <Header>
        <WhiteBar />
      </Header>
      <InputBox>
        <RoundBox width="270px" placeholder="원하는 노래를 검색해보세요" />
        <Button as="button" onClick={() => setModalOpen(false)}>
          닫기
        </Button>
      </InputBox>
      <Content>
        {SEARCH_MOCK.map((list) => (
          <ListBox key={list?.id}>
            <AlbumImage width={48} height={48} imgUrl={list?.imageUrl} />
            <TitleInfo>
              <Typography
                color={({ theme }) => theme.colors.white}
                size={({ theme }) => theme.fontSize.samll}
                weight={({ theme }) => theme.fontWeight.medium}
                spacing={-0.64}
              >
                {list?.title}
              </Typography>
              <Typography
                color={({ theme }) => theme.colors.white}
                size={({ theme }) => theme.fontSize.xsamll}
                weight={({ theme }) => theme.fontWeight.small}
                spacing={-0.64}
              >
                {list?.artistName}
              </Typography>
            </TitleInfo>
          </ListBox>
        ))}
        {/* TODO: 검색결과가 없습니다 화면 */}
      </Content>
    </Box>
  )
}

const Box = styled.div`
  position: absolute;
  display: fixed;
  bottom: 0;
  width: 375px;
  height: 97%;
  padding: 0 32px;
  z-index: 1;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  background: #291717;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`

const Header = styled.div`
  padding: 20px 0 32px;
  ${flexCenter}
`

const WhiteBar = styled.div`
  width: 112px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 32px;
  background: var(--White, #fff);
`
const InputBox = styled.div`
  ${flexSpaceBetween}
`

const Button = styled.div`
  color: ${({ theme }) => theme.colors.fieldGrey};
  font-size: ${({ theme }) => theme.fontSize.samll};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.64px;
`

const Content = styled.div`
  gap: 24px;
  padding: 24px 0;
  ${flexDirection}
`

const ListBox = styled.div`
  gap: 16px;
  ${flexAlign}
`

const TitleInfo = styled.div`
  ${flexDirection}
`
