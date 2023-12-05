'use client'
import Image from 'next/image'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import styled from 'styled-components'
import { useHeaderStore } from '@/stores/headers'
import { flexStart } from '@/styles/common'
import Typography from './Typography'
import { useRouter } from 'next/navigation'
import GoBackIcon from '@/icons/GoBackIcon'

export default function MainHeader() {
  const {
    isShowInputTools,
    isShowTextButtons,
    isShowGiftList,
    setIsShowInputTools,
    setIsCopyClipboard,
    setIsTextButtons,
  } = useHeaderStore()
  const router = useRouter()

  const renderIcons = () => {
    if (isShowTextButtons) {
      return (
        <CopyToClipboard
          text="copy 테스트입니당"
          onCopy={() => setIsCopyClipboard(true)}
        >
          <IconButton as="button">
            <Image
              src={'/assets/ShareButtonIcon.svg'}
              alt="header-icons"
              width={48}
              height={48}
              onClick={() => handleAction()}
            />
          </IconButton>
        </CopyToClipboard>
      )
    }

    if (isShowInputTools || isShowGiftList)
      return (
        <IconBox as="button" onClick={() => handleAction()}>
          <GoBackIcon color="#ECECEC" />
          {isShowGiftList && (
            <div>
              <Typography
                color={({ theme }) => theme.colors.strokeGrey}
                size={({ theme }) => theme.fontSize.small}
                weight={({ theme }) => theme.fontWeight.large}
                spacing={-0.64}
              >
                전체보기
              </Typography>
            </div>
          )}
        </IconBox>
      )
  }

  const handleAction = () => {
    if (isShowInputTools && !isShowGiftList) {
      setIsShowInputTools(false)

      setIsTextButtons(true)
      return
    }
    if (isShowGiftList) {
      router.replace('/gift-list')
      return
    }
    if (isShowTextButtons) setIsCopyClipboard(true)
  }

  return (
    <Header>
      <Typography
        size={({ theme }) => theme.fontSize.h2}
        weight={({ theme }) => theme.fontWeight.large}
        spacing={-1.44}
        color={({ theme }) => theme.colors.white}
      >
        샌디의
        <br />
        플리 보따리
      </Typography>

      {renderIcons()}
    </Header>
  )
}

const Header = styled.header`
  justify-content: space-between;
  width: 100%;
  padding: 32px;

  ${flexStart}
`

const IconButton = styled.div`
  padding: 0;
  cursor: pointer;
`

const IconBox = styled.div`
  text-align: right;
  cursor: pointer;
`
