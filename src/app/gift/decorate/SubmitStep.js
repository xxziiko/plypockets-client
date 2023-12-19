'use client'

import styled from 'styled-components'

import { useGiftStore } from '@/stores/gift'
import { baseGiftImageUrl } from '@/constants/gift'
import { usePostGift } from '@/api/services/hooks'

export default function SubmitStep({ moveToNextStep }) {
  const { giftWrapper: gift, friendName, setFriendName } = useGiftStore()
  const { callPostGiftApi } = usePostGift()

  const imageUrl = `${baseGiftImageUrl}${gift.cover}_${gift.decoration}_${gift.color}.jpg`

  const onInputChange = (e) => setFriendName(e.target.value)

  const onSubmitHandler = () => {
    callPostGiftApi().then(() => moveToNextStep())
    // TODO: 에러 시 로직 ? 리다이렉트 ?
  }

  return (
    <Box>
      <InnerBox>
        <ImageWrapper>
          <img src={imageUrl} />
        </ImageWrapper>
        <MainTypo>
          친구가 알아볼 수 있는 <br /> 나의 닉네임을 적어주세요!
        </MainTypo>

        <InputWrapper>
          <input
            onChange={onInputChange}
            maxLength={8}
            placeholder="나의 닉네임은?"
          />
        </InputWrapper>
        <InputTypo>한글 혹은 영어로 된 3~8자 닉네임을 설정해주세요.</InputTypo>
      </InnerBox>
      <ButtonWrapper>
        <Button disabled={friendName.length < 2} onClick={onSubmitHandler}>
          제출하기
        </Button>
      </ButtonWrapper>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`

const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
`

const MainTypo = styled.p`
  margin-top: 32px;
  margin-bottom: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`

const InputWrapper = styled.div`
  width: 244px;
  height: 40px;
  border-radius: 64px;
  background-color: ${({ theme }) => theme.colors.fieldGrey};

  input {
    padding: 0 16px;
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
`

const InputTypo = styled.p`
  margin: 8px 0;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.mainGrey};
`

const ButtonWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
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
