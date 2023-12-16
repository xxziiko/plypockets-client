import { callGetTodayHot100 } from '@/api/apis'

export const getTodayHot100 = () => {
  return callGetTodayHot100()
    .then((response) => response.data)
    .catch((error) => error)
}
