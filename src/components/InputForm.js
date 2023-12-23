import styled from 'styled-components'
import { Typography } from '@/components'
import { flexSpaceBetween, flexCenter } from '@/styles/common'

export default function InputForm(props) {
  const { inputValue, onChange, label, placeholder, errorMessage, name } = props

  return (
    <InputLayout>
      <InputWrapper>
        <Typography
          size={({ theme }) => theme.fontSize.small}
          weight={({ theme }) => theme.fontWeight.medium}
          spacing={-0.64}
        >
          {label}
        </Typography>
        <Typography color={({ theme }) => theme.colors.red}> *</Typography>

        <InputBox>
          <Input
            placeholder={placeholder}
            value={inputValue}
            name={name}
            onChange={(e) => onChange(e)}
            type={name === 'password' ? 'password' : 'text'}
            autoComplete="off"
          />
        </InputBox>
      </InputWrapper>

      <TextBox>
        <Typography
          size={({ theme }) => theme.fontSize.xsmall}
          weight={({ theme }) => theme.fontWeight.small}
          color={errorMessage?.color}
          spacing={-0.64}
        >
          {errorMessage?.message}
        </Typography>
      </TextBox>
    </InputLayout>
  )
}

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 0;
`

const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  ${flexSpaceBetween}
`

const TextBox = styled.div`
  text-align: right;
`

const InputBox = styled.div`
  display: flex;
  gap: 11px;
  width: 243px;
  height: 40px;
  padding: 0 25px;
  border-radius: 80px;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.colors.fieldGrey};
  ${flexCenter}
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  font-size: 16px;
  cursor: ${(props) => (props.readOnly ? 'pointer' : 'text')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.small};
  }
`
