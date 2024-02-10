import styled from 'styled-components'
import { useHeaderStore } from '@/stores/headers'
import { flexAlign, flexCenter } from '@/styles/common'
import { Typography } from '@/components'
import InputIcon from '@/icons/InputIcon'
import ArrowRightIcon from '@/icons/ArrowRightIcon'

export default function RoundBox(props) {
  const {
    as,
    width = '229px',
    isReadOnly = false,
    placeholder,
    buttonCommand,
    IconColor,
    onClick,
    value,
    onChange,
    errorMessage,
  } = props
  const { setModalOpen } = useHeaderStore()

  return (
    <InputBox as={as} width={width} onClick={() => onClick()}>
      {as === 'button' ? (
        <>
          <Typography
            size="14px"
            weight={600}
            color={({ theme }) => theme.colors.black}
          >
            {buttonCommand}
          </Typography>
          <ArrowRightIcon color={IconColor} height={19} width={24} />
        </>
      ) : (
        <>
          {/* TODO: 조건부 렌더링
      <IconBox>
        <InputIcon />
      </IconBox> */}
          <Input placeholder={placeholder} readOnly={isReadOnly} />
        </>
      )}
    </InputBox>
  )
}

const InputBox = styled.div`
  display: flex;
  gap: 11px;
  width: ${(props) => props.width};
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
  cursor: ${(props) => (props.readOnly ? 'pointer' : 'text')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.small};
  }
`
const IconBox = styled.div`
  ${flexAlign}
`
