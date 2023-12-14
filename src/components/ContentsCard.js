import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Typography } from '@/components'

export const ContentsCard = (props) => {
  const { id, title, subTitle, image, imageDescription } = props
  const router = useRouter()

  return (
    <Container
      onClick={() =>
        router.push(`/contents/${id}`, undefined, { shallow: true })
      }
      image={image}
    >
      <Typography as="h3" size="16px" weight={700} spacing={-0.64} color="#FFF">
        {title}
      </Typography>
      <Typography size="12px" weight={500} spacing={-0.48} color="#FFF">
        {subTitle}
      </Typography>

      <Typography
        style={{
          alignSelf: 'flex-end',
          marginTop: 'auto',
        }}
        size="12px"
        weight={500}
        spacing={-0.48}
        color="#FFF"
      >
        지금 보러가기
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 192px;
  min-width: 192px;
  height: 256px;
  min-height: 256px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 8px;

  background-color: #000;

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    lightgray;
  background: -webkit-linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    lightgray;
  background: -o-linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    lightgray;
  background: -moz-linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    lightgray;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  cursor: pointer;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`
