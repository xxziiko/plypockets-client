'use client'

import styled from 'styled-components'
import Image from 'next/image'

import { useGiftStore } from '@/stores/gift'

import {
  wrapperList,
  decorationList,
  colorList,
  colors,
} from '@/constants/gift'

function SelectableSection({ children, name, isSelected, setIsSelected }) {
  return (
    <div onClick={() => setIsSelected(name)}>
      {children}
      <SelectorWrapper>
        <Selector selected={isSelected} />
      </SelectorWrapper>
    </div>
  )
}

export default function WrappingStep({ moveToNextStep }) {
  const { giftWrapper: selected, setGiftWrapper: setSelected } = useGiftStore()

  const width = 80
  const height = 80

  const isAllSelected = Object.values(selected).every((el) => el !== null)

  return (
    <Box>
      <div>
        <StepWrapper>
          <StepTitle>포장지 선택하기</StepTitle>
          <ElementWrapper>
            {wrapperList.map((name) => (
              <SelectableSection
                key={name}
                name={name}
                setIsSelected={(value) =>
                  setSelected({ ...selected, cover: value })
                }
                isSelected={selected.cover === name}
              >
                <ImageWrapper>
                  <Image
                    src={`/img/gift-box/${name}.png`}
                    width={width}
                    height={height}
                    alt="cover"
                  />
                </ImageWrapper>
              </SelectableSection>
            ))}
          </ElementWrapper>
        </StepWrapper>
        <StepWrapper>
          <StepTitle>장식 선택하기 </StepTitle>
          <ElementWrapper>
            {decorationList.map((name) => {
              return (
                <SelectableSection
                  key={name}
                  name={name}
                  setIsSelected={(value) =>
                    setSelected({ ...selected, decoration: value })
                  }
                  isSelected={selected.decoration === name}
                >
                  <ImageWrapper>
                    <Image
                      src={`/img/gift-box/${name}.svg`}
                      width={width}
                      height={height}
                      alt="wrapper"
                    />
                  </ImageWrapper>
                </SelectableSection>
              )
            })}
          </ElementWrapper>
        </StepWrapper>
        <StepWrapper>
          <StepTitle>장식 컬러 선택하기</StepTitle>
          <ColorChipWrapper>
            {colorList.map((name) => {
              return (
                <SelectableSection
                  key={name}
                  name={name}
                  setIsSelected={(value) =>
                    setSelected({ ...selected, color: value })
                  }
                  isSelected={selected.color === name}
                >
                  <Chip color={colors[name]} />
                </SelectableSection>
              )
            })}
          </ColorChipWrapper>
        </StepWrapper>
      </div>
      <ButtonWrapper>
        <Button
          disabled={!isAllSelected}
          onClick={() => {
            moveToNextStep()
          }}
        >
          다음으로
        </Button>
      </ButtonWrapper>
    </Box>
  )
}

const Box = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 32px;
`

const StepWrapper = styled.div`
  margin-bottom: 48px;
`
const StepTitle = styled.p`
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 600;
`

const ElementWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 36px;
`

const ColorChipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
`

const ButtonWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  width: 312px;
  height: 56px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.black : theme.colors.white};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.white : theme.colors.green};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
`

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`
const Selector = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? '#B3DCD2' : 'transparent')};
`

const Chip = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`
