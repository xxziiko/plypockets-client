import {
  callGetTodayHot100,
  callPostLoginApi,
  callGetPlaylistApi,
  callGetBoxesApi,
} from '@/api/apis'

export const getTodayHot100 = () => {
  return callGetTodayHot100()
    .then((response) => response.data)
    .catch((error) => error)
}

export const sendPostLogin = (body) => {
  return callPostLoginApi(body)
    .then(
      (response) => response.data,
      (error) => console.log('error', error.data),
    )
    .catch((error) => error)
}

export const getPlaylist = (id) => {
  return callGetPlaylistApi(id)
    .then((response) => response.data)
    .catch((error) => error)
}

export const getBoxes = (username) => {
  return callGetBoxesApi(username)
    .then((response) => response.data)
    .catch((error) => error)
}
