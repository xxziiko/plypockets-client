'use client'

import { useState, useRef } from 'react'

import { PlaylistHeader } from '@/components'
import Style from './styles'

function Letter({ content, extendView }) {
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
        <Style.Button disabled={content.length === 0}>다음으로</Style.Button>
      </Style.ButtonWrapper>
    </Style.Box>
  )
}

function ExpandedLetter({ closeCurrentView, content, setContent }) {
  return (
    <Style.ExpandedBox>
      <PlaylistHeader title="편지 작성하기" backgroundColor="#FFE8E2" />
      <Style.GuideMessage>공백포함 300자까지 쓸 수 있어요!</Style.GuideMessage>
      <Style.TextInput
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

export default function Writing() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [content, setContent] = useState('')

  return (
    <>
      {isExpanded ? (
        <ExpandedLetter
          content={content}
          setContent={setContent}
          closeCurrentView={() => setIsExpanded(false)}
        />
      ) : (
        <Letter content={content} extendView={() => setIsExpanded(true)} />
      )}
    </>
  )
}
