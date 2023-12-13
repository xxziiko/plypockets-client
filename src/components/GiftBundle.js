'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import GiftBoxItem from './GiftBoxItem'

export default function GiftBundle(props) {
  const { data, nickname } = props
  const containerRef = useRef(null)
  const router = useRouter()

  const goToDetail = () => {
    router.push(`/${nickname}/gift`, undefined, { shallow: true })
  }

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      container.scrollTop = -100
    }
  }, [])

  return (
    <GiftBox ref={containerRef}>
      {data
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map((list) => (
          <GiftBoxItem key={list.id} list={list} onClick={goToDetail} />
        ))}
    </GiftBox>
  )
}

const GiftBox = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: right;
  flex-wrap: wrap-reverse;
  gap: 0;
  width: 374px;
  height: 450px;
  z-index: 0;
  overflow-y: auto;
`
