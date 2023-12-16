'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import GiftBoxItem from './GiftBoxItem'
import { useBundlesStore } from '@/stores/userInfo'

export default function GiftBundle(props) {
  const { data, nickname } = props
  const { setCurrentIndex } = useBundlesStore()
  const containerRef = useRef(null)
  const router = useRouter()

  const goToDetail = (index) => {
    setCurrentIndex(index)
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
        ?.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
        .map((list, index) => (
          <GiftBoxItem
            key={list.playlistId}
            list={list}
            onClick={goToDetail}
            index={index}
          />
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
  z-index: 1;
  overflow-y: auto;
`
