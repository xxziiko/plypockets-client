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
  border: 1px solid var(--stroke_grey, #ececec);
  background: var(--field_grey, #f9f9f9);
`

const Input = styled.input`
  height: 40px;
  flex-shrink: 0;
  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: ${({ theme }) => theme.fontWeight.large};
  }
`
