import { useState, useEffect } from 'react'
import { getContentsInfo, sendContentsLikes } from '@/api/services/contents'

export const useContentsInfo = (id, userId) => {
  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [voteCount, setVoteCount] = useState(0)
  const [isVote, setIsVote] = useState(false)

  const getDefaultState = async () => {
    const contentData = await getContentsInfo(id)
    const { viewCnt, likeCnt, voteCnt } = contentData

    setViewCount(viewCnt)
    setLikeCount(likeCnt)
    setVoteCount(voteCnt)

    // TODO: userId check
    if (!userId) return
    const voteData = await checkIsVote({ contentId: id, userId })
    const { isVote } = voteData
    setIsVote(isVote)
  }

  useEffect(() => {
    getDefaultState()
  }, [])

  const handleLike = async () => {
    const data = await sendContentsLikes(id)
    const { likeCnt } = data
    setLikeCount(likeCnt)
  }

  const handleSendVote = async (choice) => {
    const data = await sendContentsVotes({ contentId: id, userId, choice })
    const { voteCnt } = data
    setVoteCount(voteCnt)
  }

  return { viewCount, likeCount, voteCount, isVote, handleLike, handleSendVote }
}
