'use client'

import styled from 'styled-components'
import theme from '@/styles/theme'

export default function SubmitStep({ moveToNextStep }) {
  return (
    <Box>
      <ImageWrapper>
        <div>이미지</div>
      </ImageWrapper>
      <p
        style={{
          marginTop: '32px',
          textAlign: 'center',
          color: '#FFF',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: 'normal',
        }}
      >
        친구가 알아볼 수 있는 <br /> 나의 닉네임을 적어주세요!
      </p>
      <div></div>
      <input></input>

      <InputWrapper>
        <input maxLength={8} placeholder="나의 닉네임은?" />
      </InputWrapper>
      <p
        style={{
          margin: '8px 0',
          fontSize: '12px',
          fontWeight: 500,
          color: theme.colors.mainGrey,
        }}
      >
        한글 혹은 영어로 된 3~8자 닉네임을 설정해주세요.
      </p>
      <ButtonWrapper>
        <Button onClick={moveToNextStep}>제출하기</Button>
      </ButtonWrapper>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImageWrapper = styled.div`
  border: 1px solid white;
  width: 160px;
  height: 160px;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
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
