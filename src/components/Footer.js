import InstagramIcon from '@/icons/InstagramIcon'
import NotionIcon from '@/icons/NotionIcon'
import styled from 'styled-components'
import Typography from './Typography'

export const Footer = () => {
  // TODO: Feature
  return (
    <Container>
      <Box style={{ gap: '10px' }}>
        <InstagramIcon width={24} height={24} color={'white'} />
        <NotionIcon width={24} height={24} color={'white'} />
      </Box>

      <Box style={{ justifyContent: 'space-between' }}>
        <Typography size="14px" weight={600} spacing={-0.56} color="#ffffff">
          플리보따리 소개
        </Typography>

        <Typography size="14px" weight={600} spacing={-0.56} color="#ffffff">
          선물보따리 구매 안내
        </Typography>
      </Box>

      <Box
        style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
      >
        <div
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Typography size="14px" weight={600} spacing={-0.56} color="#ffffff">
            계정 정보
          </Typography>
          <Typography size="12px" weight={500} spacing={-0.48} color="#ffffff">
            비밀번호 찾기
          </Typography>
        </div>

        <Typography size="14px" weight={600} spacing={-0.56} color="#ffffff">
          이용 약관
        </Typography>
      </Box>

      <Box style={{ gap: '8px' }}>
        <Typography size="14px" weight={600} spacing={-0.56} color="#ffffff">
          문의
        </Typography>

        <Typography size="12px" weight={500} spacing={-0.28} color="#ffffff">
          plypockets@gmail.com
        </Typography>
      </Box>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  width: 100%;
  background-color: #503939;

  display: flex;
  flex-direction: column;
  padding: 48px 32px;
  align-items: center;
  gap: 24px;
`

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
