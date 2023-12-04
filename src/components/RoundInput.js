import { useState } from 'react'
import styled from 'styled-components'

export default function RoundInput(props) {
  const [open, setOpen] = useState(false)
  const { width = '229px', placeholder, isReadOnly = false } = props

  const openModal = () => {
    if (isReadOnly) setOpen(true)
  }

  return (
    <InputBox width={width} onClick={() => openModal()}>
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
  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.large};
  }
`
