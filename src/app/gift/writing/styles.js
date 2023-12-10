import styled from 'styled-components'
import theme from '@/styles/theme'

// 확장 전
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const LetterSection = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    position: relative;
    object-fit: contain;
  }
`

const ContentWrapper = styled.div`
  position: relative;
`

const ContentSection = styled.div`
  position: absolute;
  top: 0px;
  top: 84px;
  right: 24px;
  bottom: 72px;
  left: 56px;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
  letter-spacing: -0.64px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 13;
`

// 확장 후
const ExpandedBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #ffe8e2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const GuideMessage = styled.p`
  margin: 0px 32px 8px 32px;
  color: ${theme.colors.red};
  font-size: 12px;
  font-weight: 500;
`

const TextInput = styled.textarea`
  flex: 1;
  margin: 0 32px;
  margin-bottom: 48px;
  background-color: transparent;
  border: none;
  outline: none;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
  letter-spacing: -0.64px;
  resize: none;
`

// 페이지 공통
const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 312px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.colors.white};
  background-color: ${({ disabled }) => (disabled ? '#B3DCD2' : '#00916F')};
  border-radius: 8px;
`

export default {
  Box,
  LetterSection,
  ContentSection,
  ContentWrapper,
  ButtonWrapper,
  Button,
  ExpandedBox,
  TextInput,
  GuideMessage,
}
