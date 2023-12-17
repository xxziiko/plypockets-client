import { useEffect, useState } from 'react'

import AxiosInstance from '@/api/instance'

export const useFetch = ({ url, enabled = true }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    await AxiosInstance.get(url)
      .then((response) => {
        console.log(response)
        setData(response.data)
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (!enabled) return
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export const useFetchTodayHot100 = () => {
  return useFetch({ url: '/TodayHot100' })
}

export const useFetchKoreanHot100 = () => {
  return useFetch({ url: '/KoreanHot100' })
}

export const useFetchSearchSong = (keyword) => {
  return useFetch({ url: `/search/${keyword}`, enabled: !!keyword })
}
