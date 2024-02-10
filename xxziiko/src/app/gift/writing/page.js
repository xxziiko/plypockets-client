'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { useGiftStore } from '@/stores/gift'
import { GiftHeader } from '@/components'
import Style from './styles'

function Letter({ content, extendView }) {
  const router = useRouter()
  return (
    <Style.Box>
      <Style.LetterSection>
        <Style.ContentWrapper>
          <img src="/img/writing-background.jpg" />
          <Style.ContentSection onClick={extendView}>
            {content ? content : '전하고 싶은 말을 작성해보세요.'}
          </Style.ContentSection>
        </Style.ContentWrapper>
      </Style.LetterSection>
      <Style.ButtonWrapper>
        <Style.Button
          onClick={() =>
            router.push('/gift/decorate', undefined, { shallow: true })
          }
          disabled={content.length === 0}
        >
          다음으로
        </Style.Button>
      </Style.ButtonWrapper>
    </Style.Box>
  )
}

function ExpandedLetter({ closeCurrentView, content, setContent }) {
  const router = useRouter()

  return (
    <Style.ExpandedBox>
      <GiftHeader
        title="편지 작성하기"
        colors={{ backgroundColor: '#FFE8E2' }}
        buttonAction={() =>
          router.push('/gift/playlist', undefined, { shallow: true })
        }
        step={2}
      />
      <Style.GuideMessage>공백포함 300자까지 쓸 수 있어요!</Style.GuideMessage>
      <Style.TextInput
        value={content}
        maxLength={300}
        onChange={(e) => setContent(e.target.value)}
      />
      <Style.ButtonWrapper>
        <Style.Button
          disabled={content.length === 0}
          onClick={closeCurrentView}
        >
          다 작성했어요
        </Style.Button>
      </Style.ButtonWrapper>
    </Style.ExpandedBox>
  )
}

export default function WritingPage() {
  const { letter, setLetter } = useGiftStore()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {isExpanded ? (
        <ExpandedLetter
          content={letter}
          setContent={setLetter}
          closeCurrentView={() => setIsExpanded(false)}
        />
      ) : (
        <Letter content={letter} extendView={() => setIsExpanded(true)} />
      )}
    </>
  )
}
