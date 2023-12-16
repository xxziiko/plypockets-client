import { useState, useEffect } from 'react'
import { getContentsInfo } from '@/api/services'

export const useContentsInfo = (id) => {
  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [voteCount, setVoteCount] = useState(0)

  useEffect(() => {
    getContentsInfo(id).then((res) => {
      console.log(res)
      setViewCount(res.viewCount)
      setLikeCount(res.likeCount)
      setVoteCount(res.voteCount)
    })
  }, [])

  return { viewCount, likeCount, voteCount }
}
