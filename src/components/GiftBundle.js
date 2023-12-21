'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import GiftBoxItem from './GiftBoxItem'
import { useBundlesStore } from '@/stores/userInfo'

export default function GiftBundle(props) {
  const { data, nickname, isClickable } = props
  const { setCurrentIndex } = useBundlesStore()
  const containerRef = useRef(null)
  const router = useRouter()

  const goToDetail = (index) => {
    setCurrentIndex(index)
    if (isClickable)
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
      {data &&
        data
          ?.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
          ?.map((list, index) => (
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
  display: flex;
  justify-content: right;
  flex-wrap: wrap-reverse;
  width: 100%;
  max-height: 75%;
  overflow: auto;
  z-index: 0;

  /* border: 1px solid red; */
`
