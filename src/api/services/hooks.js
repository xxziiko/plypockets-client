import { useEffect, useState } from 'react'

import AxiosInstance from '@/api/instance'
import { useGiftStore } from '@/stores/gift'

export const useFetch = ({ url, enabled = true }) => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    await AxiosInstance.get(url)
      .then((response) => {
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

export const useFetchLimitedData = ({ fetchHooks, initialNum }) => {
  const { data, isLoading, error } = fetchHooks()
  const [slicedData, setSlicedData] = useState([])

  const slicedArray = (length) => {
    return data?.slice(0, length || data?.length) || []
  }

  const getList = (length) => {
    setSlicedData(slicedArray(length))
  }

  useEffect(() => {
    setSlicedData(slicedArray(initialNum))
  }, [data])

  return { data: slicedData, getList, isLoading, error }
}

export const usePostGift = () => {
  const { nickname, letter, friendName, spotifyId, giftWrapper } =
    useGiftStore()

  const dto = {
    coverIdx: giftWrapper.cover,
    decoIdx: giftWrapper.decoration,
    colorIdx: giftWrapper.color,
    letter: letter,
    friendname: friendName,
    spotifyId: spotifyId,
  }

  const callPostGiftApi = async () => {
    return await AxiosInstance.post(`/playlists/${nickname}`, dto).then(
      (response) => {
        return response.data
      },
    )
  }

  return { callPostGiftApi }
}
