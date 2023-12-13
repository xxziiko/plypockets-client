import React from 'react'
import styled from 'styled-components'
import { Typography } from '@/components'
import QAIcon from '../icons/QAIcon'

export const QA = (props) => {
  const { qaDatas } = props
  return (
    <Container>
      <Box
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <QAIcon />
        <Typography
          size={'18px'}
          weight={600}
          spacing={-0.72}
          color={'#323232'}
        >
          궁금함을 해결해줄 호기심 보따리
        </Typography>
      </Box>

      {qaDatas.map((qaData) => (
        <Box
          key={qaData.id}
          style={{
            paddingTop: '24px',
            gap: '8px',
          }}
        >
          <Typography
            size={'14px'}
            weight={600}
            spacing={-0.56}
            color={'#323232'}
          >
            {qaData.question}
          </Typography>
          <Typography
            size={'14px'}
            weight={400}
            spacing={-0.56}
            color={'#323232'}
          >
            {qaData.answer}
          </Typography>
        </Box>
      ))}
    </Container>
  )
}

export default QA

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #ffffff;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`
