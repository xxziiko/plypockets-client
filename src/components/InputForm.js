import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { RoundBox, Typography } from '@/components'
import { useHeaderStore } from '@/stores/headers'
import { flexAlign, flexDirection, flexSpaceBetween } from '@/styles/common'

export default function InputForm(props) {
  const { inputValue, onChange, label, placeholder, errorMessage } = props
  const { setIsShowGiftList, setIsShowInputTools, setIsTextButtons } =
    useHeaderStore()
  const router = useRouter()

  console.log('errorMessage', errorMessage)

  const handleButton = () => {
    setIsShowGiftList(true)
    setIsShowInputTools(false)
    setIsTextButtons(false)
    router.push('/gift-list', undefined, { shallow: true })
  }

  return (
    <InputLayout>
      <div>
        <Typography
          size={({ theme }) => theme.fontSize.small}
          weight={({ theme }) => theme.fontWeight.medium}
          spacing={-0.64}
        >
          {label}
        </Typography>
        <Typography color={({ theme }) => theme.colors.red}> *</Typography>
      </div>
      <InputBox>
        <RoundBox
          placeholder={placeholder}
          value={inputValue}
          name={label}
          onChange={onChange}
          errorMessage={errorMessage}
        />
        <Typography
          size={({ theme }) => theme.fontSize.xsmall}
          weight={({ theme }) => theme.fontWeight.small}
          color="#000"
          spacing={-0.64}
        >
          {errorMessage?.text}
        </Typography>
      </InputBox>
    </InputLayout>
  )
}

const InputLayout = styled.div`
  width: 100%;

  ${flexSpaceBetween}
`
const InputBox = styled.div`
  text-align: right;
  ${flexDirection}
`
