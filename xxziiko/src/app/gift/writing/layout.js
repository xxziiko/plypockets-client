'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GiftHeader, Modal } from '@/components'
import { useGiftStore } from '@/stores/gift'
import { useRouter } from 'next/navigation'

export default function WritingLayout({ children }) {
  const { letter } = useGiftStore()
  const [isAlert, setIsAlert] = useState(false)
  const router = useRouter()

  const onCloseModal = () => {
    setIsAlert(false)
  }

  const handleButton = () => {
    if (letter.length) setIsAlert(true)
    else router.back()
  }

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault()
      setIsAlert(true)
    }

    const preventGoBack = () => {
      history.pushState(null, '', location.href)
      setIsAlert(true)
    }

    history.pushState(null, '', location.href)
    window.addEventListener('popstate', preventGoBack)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('popstate', preventGoBack)
    }
  }, [])

  return (
    <>
      <Box>
        <GiftHeader
          title="편지 작성하기"
          step={2}
          buttonAction={handleButton}
        />
        {children}
      </Box>
      {isAlert && <Modal onClose={onCloseModal} />}
    </>
  )
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
