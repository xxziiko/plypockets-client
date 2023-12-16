import AxiosInstance from '@/api/instance'

export const callGetTodayHot100 = () => {
  return AxiosInstance.get('/TodayHot100')
    .then((response) => response)
    .catch((error) => error)
}

export const sendPostFeedback = (body) => {
  return callPostFeedbackApi(body)
    .then((response) => response)
    .catch((err) => err)
}

export const callContentsInfo = (id) => {
  return AxiosInstance.patch(`/contents/${id}`)
    .then((response) => response)
    .catch((error) => error)
}
