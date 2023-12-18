import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, DefaultButton } from '@/components'
import ThreeTriangleIcon from '@/icons/ThreeTriangleIcon'
import CheckRoundIcon from '@/icons/CheckIcon'

export const Vote = (props) => {
  const {
    voteData: { topic, datas },
    count,
    hasVoted,
    handleSendVote,
    choiced,
    voteResult,
  } = props

  const [clicked, setClicked] = useState(null)

  const handleButtonClick = (idx) => {
    if (clicked === idx) {
      setClicked(null)
    } else {
      setClicked(idx)
    }
  }

  const handleSubmit = () => {
    handleSendVote(clicked)
    setClicked(null)
  }

  return (
    <Container>
      <ThreeTriangleIcon style={{ alignSelf: 'flex-start' }} />
      <Typography
        as="h2"
        style={{
          paddingTop: '16px',
        }}
        size={'14px'}
        weight={600}
        spacing={-0.56}
        color={'#323232'}
      >
        {topic}
      </Typography>

      <Typography
        style={{
          alignSelf: 'flex-end',
          paddingTop: '8px',
          marginBottom: '32px',
        }}
        size={'12px'}
        weight={500}
        spacing={-0.48}
        color={'#888888'}
      >
        투표 참여자 {count}
      </Typography>

      <Box
        style={{
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {datas.map((content, idx) => {
          const num = idx + 1
          const isDefault = num !== choiced && num !== clicked
          const isClicked = num === clicked
          const isSelected = num === choiced
          return (
            <VoteButton
              key={num}
              onClick={() => handleButtonClick(num)}
              default={isDefault}
              choiced={num === choiced}
              disabled={!!hasVoted}
            >
              <Typography
                size={'14px'}
                weight={600}
                spacing={-0.56}
                color={isSelected ? '#ffffff' : '#323232'}
              >
                {content}
              </Typography>
              {isClicked && <CheckRoundIcon />}
              {hasVoted && (
                <Typography
                  size={'16px'}
                  weight={isSelected ? 700 : 500}
                  spacing={-0.64}
                  color={isSelected ? '#ffffff' : '#595959'}
                >
                  {voteResult[idx].percent}%
                </Typography>
              )}
            </VoteButton>
          )
        })}
      </Box>

      <DefaultButton
        command={hasVoted ? '투표 완료' : '투표 하기'}
        color={clicked === null ? '#A4A4A4' : '#ffffff'}
        backgroundColor={'#00916F'}
        isShowIcon={false}
        isButtonDisable={hasVoted || clicked === null}
        onClick={handleSubmit}
      />
    </Container>
  )
}

export default Vote

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 0;
  background-color: #f9f9f9;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const VoteButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 311px;
  height: 56px;
  padding: 0 16px;
  align-items: center;

  border-radius: 8px;
  border: ${(props) =>
    props.default
      ? '2px solid var(--stroke_grey, #e5e5e5)'
      : '2px solid var(--main_green, #00916F)'};
  background: ${(props) =>
    props.choiced ? 'var(--main_green, #00916F)' : 'var(--main_white, #fff)'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`
