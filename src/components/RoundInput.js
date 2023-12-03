import styled from 'styled-components'

export default function RoundInput(props) {
  const { width = '229px', placeholder } = props
  return (
    <InputBox width={width}>
      <Input placeholder={placeholder} />
    </InputBox>
  )
}

const InputBox = styled.div`
  width: ${(props) => props.width};
  height: 40px;
  padding: 0 25px;
  border-radius: 80px;
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.colors.fieldGrey};
`

const Input = styled.input`
  height: 40px;
  flex-shrink: 0;
  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.large};
  }
`
