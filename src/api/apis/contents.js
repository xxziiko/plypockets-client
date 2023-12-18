import AxiosInstance from '@/api/instance'

export const callContentsInfo = (id) => {
  return AxiosInstance.patch(`/contents/${id}`)
    .then((response) => response)
    .catch((error) => error)
}

export const callContentsLikes = (id) => {
  return AxiosInstance.patch(`/contents/likes/${id}`)
    .then((response) => response)
    .catch((error) => error)
}

export const callCheckIsVote = (contentId, userId) => {
  return AxiosInstance.get(`/votes/${contentId}/${userId}`)
    .then((response) => response)
    .catch((error) => error)
}

export const callContentsVotes = (contentId, userId, choice) => {
  return AxiosInstance.post(`/votes`, {
    contentId,
    userId,
    choice,
  })
    .then((response) => response)
    .catch((error) => error)
}

export const callContentsVoteResult = (contentId) => {
  return AxiosInstance.get(`/votes/${contentId}`)
    .then((response) => response)
    .catch((error) => error)
}
