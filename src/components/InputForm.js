import styled from 'styled-components'

export default function InputForm(props) {
  const { placeholder } = props
  return (
    <InputBox>
      <Input placeholder={placeholder} />
      <Button />
    </InputBox>
  )
}

const InputBox = styled.div``

const Input = styled.input``

const Button = styled.button``
