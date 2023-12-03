import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { useHeaderStore } from '@/stores/headers'
import { flexStart } from '@/styles/common'

export default function InputForm(props) {
  const { inputValue, onChange } = props
  const { setIsShowGiftList, setIsShowInputTools, setIsTextButtons } =
    useHeaderStore()
  const router = useRouter()

  const handleButton = () => {
    setIsShowGiftList(true)
    setIsShowInputTools(false)
    setIsTextButtons(false)
    router.push('/gift-list')
  }

  return (
    <InputBox>
      <Input
        placeholder="쉿! 들키지 않게 조심"
        value={inputValue}
        onChange={() => onChange()}
      />
      <Button onClick={() => handleButton()}>확인</Button>
    </InputBox>
  )
}

const InputBox = styled.div`
  gap: 9px;
  ${flexStart}
`

const Input = styled.input`
  flex-shrink: 0;
  width: 222px;
  height: 40px;
  padding: 10px 22px;
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.colors.fieldGrey};
  cursor: text;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`

const Button = styled.button`
  width: 71px;
  height: 40px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.subGreen};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.64px;
`
