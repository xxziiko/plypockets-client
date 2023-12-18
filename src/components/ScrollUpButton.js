import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { flexCenter } from '@/styles/common'
import { useButtonStore } from '@/stores/buttons'
import CheckRoundIcon from '@/icons/CheckIcon'
import { Typography } from '@/components'

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY !== 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Box>
      <Button onClick={handleScrollUp} visible={visible.toString()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
        >
          <path d="M6.49998 0L13 11H0L6.49998 0Z" fill="white" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
        >
          <path d="M6.49998 0L13 11H0L6.49998 0Z" fill="white" />
        </svg>
      </Button>
    </Box>
  )
}

const Box = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  width: 375px;
  padding-bottom: 48px;
  /* border: 1px solid red; */
`

const Button = styled.button`
  display: flex;

  flex-direction: column;

  margin-right: 34px;
  margin-left: auto;

  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? '1' : '0')};

  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: var(--sub_green, #00c496);
  box-shadow: 0px 0px 8px 0px rgba(0, 196, 150, 0.2);
`
