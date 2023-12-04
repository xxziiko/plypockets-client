'use client'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Typography, GiftBoxItem } from '@/components'

export const MOCK = [
  { id: 0, nickname: 'dddd' },
  { id: 1, nickname: '하와이' },
  { id: 2, nickname: '짐니' },
  { id: 3, nickname: '은비' },
  { id: 4, nickname: '시은짱' },
  { id: 5, nickname: '유니' },
]

export default function GiftListPage() {
  const router = useRouter()

  const goToDetail = (nickname) => {
    const queryEncode = encodeURIComponent(nickname)
    router.push(`/gift-list/${queryEncode}`)
  }

  return (
    <Layout>
      <Typography
        size={({ theme }) => theme.fontSize.medium}
        weight={({ theme }) => theme.fontWeight.medium}
        color={({ theme }) => theme.colors.white}
        spacing={-0.8}
      >
        친구들이 선물한 플리를 확인해보세요!
      </Typography>

      <Box>
        {MOCK?.map((list) => (
          <GiftBoxItem list={list} key={list.id} onClick={goToDetail} />
        ))}
      </Box>
    </Layout>
  )
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  width: 100%;
  padding-top: 32px;
`

const Layout = styled.div`
  padding: 10px 32px 0;
`
