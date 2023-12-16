'use client'

import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const width = 80
const height = 80

const wrapperList = ['red', 'green', 'pink']
const decorationList = [
  'stripe',
  'star',
  'triangle',
  'ribbon',
  'snow',
  'flower',
]
const colorList = ['coral', 'green', 'white']

function SelectableSection({ children, name, isSelected, setIsSelected }) {
  return (
    <div
      onClick={() => {
        setIsSelected(name)
      }}
    >
      {children}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}
      >
        <div
          style={{
            width: '20px',
            height: '20px',
            border: '2px solid white',
            borderRadius: '50%',
            backgroundColor: isSelected ? '#B3DCD2' : 'transparent',
          }}
        />
      </div>
    </div>
  )
}

function ColorChip({ name }) {
  const getColor = (name) => {
    switch (name) {
      case 'coral':
        return '#FF6D86'
      case 'green':
        return '#00C496'
      case 'white':
        return '#FFF'
    }
  }

  return (
    <div
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        backgroundColor: getColor(name),
      }}
    />
  )
}

export default function WrappingStep({ moveToNextStep }) {
  const [selected, setSelected] = useState({
    wrapper: null,
    decoration: null,
    color: null,
  })

  const isAllSelected = Object.values(selected).every((el) => el !== null)

  return (
    <Box>
      <Content>
        <StepWrapper>
          <StepTitle>포장지 선택하기</StepTitle>
          <ElementWrapper>
            {wrapperList.map((name) => (
              <SelectableSection
                key={name}
                name={name}
                setIsSelected={(value) =>
                  setSelected({ ...selected, wrapper: value })
                }
                isSelected={selected.wrapper === name}
              >
                <ImageWrapper>
                  <Image
                    src={`/img/gift-box/${name}.png`}
                    width={width}
                    height={height}
                    alt="wrapper"
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
                  <ColorChip name={name} />
                </SelectableSection>
              )
            })}
          </ColorChipWrapper>
        </StepWrapper>
      </Content>
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
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`

const Content = styled.div``

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
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  margin-bottom: 48px;
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
