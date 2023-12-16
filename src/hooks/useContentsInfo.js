import { useState, useEffect } from 'react'
import { getContentsInfo, sendContentsLikes } from '@/api/services/contents'

export const useContentsInfo = (id, userId) => {
  const [viewCount, setViewCount] = useState(0)
  const [likeCount, setLikeCount] = useState(0)
  const [voteCount, setVoteCount] = useState(0)
  const [isVote, setIsVote] = useState(false)

  useEffect(() => {
    const data = await getContentsInfo(id);
    const { viewCnt, likeCnt, voteCnt } = data;

    setViewCount(viewCnt);
    setLikeCount(likeCnt);
    setVoteCount(voteCnt);

    // TODO: userId check
    if (!userId) return;
    const data = await checkIsVote({ contentId: id, userId });
    const { isVote } = data;
    setIsVote(isVote);
  }, [])

  const handleLike = () => {
    const data = await sendContentsLikes(id);
    const { likeCnt } = data;
    setLikeCount(likeCnt);
  }

  const handleSendVote = (choice) => {
    const data = await sendContentsVotes({ contentId: id, userId, choice });
    const { voteCnt } = data;
    setVoteCount(voteCnt);
  }

  return { viewCount, likeCount, voteCount, isVote, handleLike, handleSendVote }
}
