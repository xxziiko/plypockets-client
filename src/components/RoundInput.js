import styled from 'styled-components'
import { useHeaderStore } from '@/stores/headers'

export default function RoundInput(props) {
  const { width = '229px', placeholder, isReadOnly = false } = props
  const { setModalOpen } = useHeaderStore()

  return (
    <InputBox width={width} onClick={() => setModalOpen(true)}>
      <Input placeholder={placeholder} readOnly={isReadOnly} />
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
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  cursor: ${(props) => (props.readOnly ? 'pointer' : 'text')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.large};
  }
`
