import AxiosInstance from '@/api/instance'

export const callGetTodayHot100 = () => {
  return AxiosInstance.get('/TodayHot100')
    .then((response) => response)
    .catch((error) => error)
}

export const callPostLoginApi = (body) => {
  return AxiosInstance.post('/users/login', body)
    .then((response) => response)
    .catch((error) => {
      // console.log('error', error)
      throw Error(error.status)
    })
}

export const callGetPlaylistApi = (id) => {
  return AxiosInstance.get(`/playlists/${id}`)
    .then((response) => response)
    .catch((error) => error)
}

export const callGetBoxesApi = (username) => {
  return AxiosInstance.get(`/playlists/boxes?nickname=${username}`)
    .then((response) => response)
    .catch((error) => error)
}
