'use client'

import { useRouter } from 'next/navigation'
import styled from 'styled-components'

import { useGiftStore } from '@/stores/gift'
import { baseGiftImageUrl } from '@/constants/gift'

import { GiftHeader, SnowBox } from '@/components'
import GiftIcon from '@/icons/GiftIcon'

export default function CompleteStep() {
  const router = useRouter()
  const { giftWrapper: gift } = useGiftStore()
  const imageUrl = `${baseGiftImageUrl}${gift.cover}_${gift.decoration}_${gift.color}.jpg`

  return (
    <>
      <Box>
        <SnowBox color={({ theme }) => theme.colors.bgGreen} />
        <GiftHeader
          colors={{ backgroundColor: 'transparent' }}
          title={`샌디의 \n플리 보따리`}
          subTitle={`당신이 보내준 보따리 덕분에 \n올 겨울이 따듯해졌어요.`}
          hideIcon
          hideButton
        />
        <ContentContainer>
          <ContentWrapper>
            <ImageWrapper>
              <img src={imageUrl} />
            </ImageWrapper>
            <Text>
              소중한 선물이 전달되었어요 <br /> 따듯한 연말 되시길 바라요
            </Text>
          </ContentWrapper>
          <div>
            <Text style={{ marginBottom: '16px' }}>
              아직 플리 보따리 방이 없으시다면
              <br />
              나의 플리 보따리를 새롭게 만들어보세요!
            </Text>
            <ButtonWrapper>
              <Button
                onClick={() =>
                  router.push('/account', undefined, { shallow: true })
                }
              >
                <GiftIcon color={'#FFF'} />
                <span> 내 플리 보따리 가기</span>
              </Button>
            </ButtonWrapper>
          </div>
        </ContentContainer>
      </Box>
    </>
  )
}

const Box = styled.div`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: url('/img/decorate-background.jpg');
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
`

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 440px;
  align-items: center;
`

const ImageWrapper = styled.div`
  margin-bottom: 32px;
  width: 160px;
  height: 160px;
`

const Text = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 48px;
  width: 312px;
  height: 56px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black : theme.colors.white};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.white : theme.colors.red};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
`
