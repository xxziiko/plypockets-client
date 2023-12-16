import {
  callContentsInfo,
  callContentsLikes,
  callCheckIsVote,
  callContentsVotes,
} from '@/api/apis/contents'

export const getContentsInfo = (id) => {
  return callContentsInfo(id)
    .then((response) => response.data)
    .catch((error) => error)
}

export const sendContentsLikes = (id) => {
  return callContentsLikes(id)
    .then((response) => response.data)
    .catch((error) => error)
}

export const checkIsVote = ({ contentId, userId }) => {
  return callCheckIsVote(contentId, userId)
    .then((response) => response.data)
    .catch((error) => error)
}

export const sendContentsVotes = ({ contentId, userId, choice }) => {
  return callContentsVotes(contentId, userId, choice)
    .then((response) => response.data)
    .catch((error) => error)
}
