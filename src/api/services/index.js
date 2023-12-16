import { callGetTodayHot100, callContentsInfo } from '@/api/apis'

export const getTodayHot100 = () => {
  return callGetTodayHot100()
    .then((response) => response.data)
    .catch((error) => error)
}

export const getContentsInfo = (id) => {
  return callContentsInfo(id)
    .then((response) => response.data)
    .catch((error) => error)
}
