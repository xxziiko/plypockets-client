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
  const [choiced, setChoiced] = useState(null)

  const [voteResult, setVoteResult] = useState([{ choice: 0, percent: 0 }])

  const hasVotedCookieName = `hasVotedForContent${contentId}`
  const choiceCookieName = `choiceForContent${contentId}`

  const getDefaultState = async () => {
    try {
      const contentsData = await getContentsInfo(contentId)
      const { viewCnt, likeCnt, totalVoteCnt } = contentsData.results
      console.log(contentsData.results)

      setViewCount(viewCnt)
      setLikeCount(likeCnt)
      setVoteCount(totalVoteCnt)

      let voted = false

      if (nickname.length > 0) {
        const data = await checkIsVote({ contentId, userId })
        const { hasVoted, choice, voteResultResponseDtoList } = data.results
        voted = Boolean(hasVoted)
        setHasVoted(Boolean(hasVoted))
        setChoiced(choice)
        setVoteResult(voteResultResponseDtoList)
      } else {
        const data = await getContentsVoteResult(contentId)
        const voteResult = data.results
        setVoteResult(voteResult)

        const hasVotedCookie = getCookie(hasVotedCookieName)
        const choiceCookie = getCookie(choiceCookieName)

        if (hasVotedCookie && choiceCookie) {
          voted = true
          setHasVoted(Boolean(hasVotedCookie))
          setChoiced(Number(choiceCookie))
        }
      }

      if (!voted) {
        const data = await getContentsVoteResult(contentId)
        const { voteResultResponseDtoList } = data.results
        setVoteResult(voteResultResponseDtoList)
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

  const handleSendVote = async (voteNum) => {
    try {
      const data = await sendContentsVotes({
        contentId,
        userId: nickname.length > 0 ? userId : null,
        choice: voteNum,
      })
      const { hasVoted, choice, voteResultResponseDtoList, totalVoteCnt } =
        data.results
      setHasVoted(hasVoted)
      setChoiced(choice)
      setVoteResult(voteResultResponseDtoList)
      setVoteCount(totalVoteCnt)

      if (nickname.length === 0) {
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
    voteResult,
    choiced,
    handleLike,
    handleSendVote,
  }
}
