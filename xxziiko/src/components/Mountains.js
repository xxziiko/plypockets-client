'use client'

import styled from 'styled-components'

import { DESKTOP_WIDTH } from '@/lib/constants'

export default function Mountains() {
  return (
    <>
      {[0, 1, 2].map((value) => (
        <Mountain key={value} idx={value}>
          <svg
            width="594"
            height="470"
            viewBox="0 0 594 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M297.288 0L593.717 469.5H0.857849L297.288 0Z"
              fill="#018969"
              fillOpacity="0.7"
            />
          </svg>
        </Mountain>
      ))}
    </>
  )
}

const Mountain = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: ${({ idx }) => idx * (583 / 2) - 250}px;

  display: flex;
  z-index: -100;

  gap: 0px;
  overflow: hidden;

  @media screen and (max-width: ${DESKTOP_WIDTH - 1}px) {
    display: none;
  }
`
