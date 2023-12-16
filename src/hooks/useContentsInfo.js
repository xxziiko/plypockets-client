import { useState, useEffect } from 'react'
import {
  getContentsInfo,
  sendContentsLikes,
  checkIsVote,
  sendContentsVotes,
} from '@/api/services/contents'

export const useContentsInfo = (contentId, userId) => {
  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [voteCount, setVoteCount] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)
  const [choice, setChoice] = useState(null)

  const getDefaultState = async () => {
    try {
      const contentsData = await getContentsInfo(contentId)
      const { viewCnt, likeCnt, totalVoteCnt } = contentsData.results

      setViewCount(viewCnt)
      setLikeCount(likeCnt)
      setVoteCount(totalVoteCnt)

      // TODO: userId check
      // if (userId === 0) return
      const data = await checkIsVote({ contentId, userId })
      console.log(data)
      const { hasVoted, choice } = data.results
      setHasVoted(hasVoted)
      setChoice(choice)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getDefaultState()
  }, [])

  const handleLike = async () => {
    try {
      const { results } = await sendContentsLikes(contentId)

      const { likeCnt } = results
      setLikeCount(likeCnt)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSendVote = async (choice) => {
    try {
      const data = await sendContentsVotes({ contentId, userId, choice })
      console.log('handleSendVote', data)
      const { voteCnt } = data.results
      setVoteCount(voteCnt)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    viewCount,
    likeCount,
    voteCount,
    hasVoted,
    choice,
    handleLike,
    handleSendVote,
  }
}
