import { useState, useEffect } from 'react'
import {
  getContentsInfo,
  sendContentsLikes,
  checkIsVote,
  sendContentsVotes,
  getContentsVoteResult,
} from '@/api/services/contents'
import { useUserInfoStore } from '@/stores/userInfo'

import { getCookie, setCookie } from '@/lib/cookie'

export const useContentsInfo = (contentId) => {
  const { userInfo } = useUserInfoStore()
  const { userId, nickname } = userInfo

  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [voteCount, setVoteCount] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)
  const [choice, setChoice] = useState(null)

  const hasVotedCookieName = `hasVotedForContent${contentId}`
  const choiceCookieName = `choiceForContent${contentId}`

  const getDefaultState = async () => {
    try {
      const contentsData = await getContentsInfo(contentId)
      const { viewCnt, likeCnt, totalVoteCnt } = contentsData.results

      setViewCount(viewCnt)
      setLikeCount(likeCnt)
      setVoteCount(totalVoteCnt)

      if (nickname.length > 0) {
        const data = await checkIsVote({ contentId, userId })
        const { hasVoted, choice } = data.results
        setHasVoted(hasVoted)
        setChoice(choice)
      } else {
        const hasVotedCookie = getCookie(hasVotedCookieName)
        const choiceCookie = getCookie(choiceCookieName)

        if (hasVotedCookie) {
          setHasVoted(hasVotedCookie)
        }
        if (choiceCookie) {
          setChoice(Number(choiceCookie))
        }
      }
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
      if (nickname.length > 0) {
        const data = await sendContentsVotes({ contentId, userId, choice })
        const { voteCnt } = data.results
        setVoteCount(voteCnt)
      } else {
        setHasVoted(true)
        setChoice(choice)
        setCookie(hasVotedCookieName, true, 1)
        setCookie(choiceCookieName, choice, 1)
      }
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
