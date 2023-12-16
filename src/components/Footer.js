import InstagramIcon from '@/icons/InstagramIcon'
import NotionIcon from '@/icons/NotionIcon'
import styled from 'styled-components'
import Typography from './Typography'
import { useButtonStore } from '@/stores/buttons'
import AccountToastPopUp from './AccountToastPopUp'

const redirectUrl = {
  teamUrl:
    'https://near-quince-092.notion.site/43dcdc4c25124334b432ab75015dd212?pvs=4',
  purchaseUrl:
    'https://near-quince-092.notion.site/36341708de704a508e9dfc910276181d?pvs=4',
  instagramUrl: 'https://www.instagram.com/plypockets/',
  notionUrl:
    'https://near-quince-092.notion.site/19d919ce5a34436b8430b005366a908f?pvs=4',
}

export const Footer = () => {
  const { isAccountPopupOpen, setIsAccountPopupOpen } = useButtonStore()

  const handleRedirect = (url) => {
    window.open(url)
  }

  const WrapperButton = ({ children, url, onClick }) => {
    return (
      <button
        style={{
          border: 'none',
          padding: '0',
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}
        onClick={onClick ? onClick : () => handleRedirect(url)}
      >
        {children}
      </button>
    )
  }

  return (
    <>
      <Container>
        <Box style={{ gap: '10px' }}>
          <WrapperButton url={redirectUrl.instagramUrl}>
            <InstagramIcon width={24} height={24} color={'white'} />
          </WrapperButton>

          <WrapperButton url={redirectUrl.notionUrl}>
            <NotionIcon width={24} height={24} color={'white'} />
          </WrapperButton>
        </Box>

        <Box style={{ justifyContent: 'space-between' }}>
          <WrapperButton url={redirectUrl.teamUrl}>
            <Typography
              size="14px"
              weight={600}
              spacing={-0.56}
              color="#ffffff"
            >
              플리보따리 팀 소개
            </Typography>
          </WrapperButton>

          <WrapperButton url={redirectUrl.purchaseUrl}>
            <Typography
              size="14px"
              weight={600}
              spacing={-0.56}
              color="#ffffff"
            >
              선물보따리 구매 안내
            </Typography>
          </WrapperButton>
        </Box>

        <Box
          style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
        >
          <WrapperButton onClick={() => setIsAccountPopupOpen(true)}>
            <div
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                size="14px"
                weight={600}
                spacing={-0.56}
                color="#ffffff"
              >
                계정 정보
              </Typography>
              <Typography
                size="12px"
                weight={500}
                spacing={-0.48}
                color="#ffffff"
              >
                비밀번호 찾기
              </Typography>
            </div>
          </WrapperButton>

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

      <AccountToastPopUp />
    </>
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
