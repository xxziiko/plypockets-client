'use client'

import { useState } from 'react'

import { GiftHeader, SnowBox } from '@/components'
import theme from '@/styles/theme'

import WrappingStep from './WrappingStep'
import SubmitStep from './SubmitStep'
import CompleteStep from './CompleteStep'
import Style from './style'

const titles = [`선물 포장하기`, `샌디의 \n플리 보따리`]
const subTitles = [
  `마지막 선물 포장 단계예요`,
  `따뜻한 겨울로 마무리 될 수 있게 샌디에게 \n크리스마스 선물로 플리 보따리를 남겨주세요`,
]

export default function DecoratePage() {
  const [step, setStep] = useState(0)

  const moveToNextStep = () => {
    setStep(step + 1)
  }

  return (
    <Style.Box>
      <GiftHeader
        title={titles[step]}
        subTitle={subTitles[step]}
        hideIcon={step === 1}
        colors={{
          backgroundColor: theme.colors.brown,
          title: theme.colors.white,
          subTitle: theme.colors.white,
          button: theme.colors.strokeGrey,
        }}
      />
      <Style.ContentWrapper>
        {step === 0 && <WrappingStep moveToNextStep={moveToNextStep} />}
        {step === 1 && <SubmitStep moveToNextStep={moveToNextStep} />}
        {step === 2 && <CompleteStep />}
      </Style.ContentWrapper>
    </Style.Box>
  )
}
