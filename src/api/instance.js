import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RUN_MODE,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
})

AxiosInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

AxiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (!error.response) {
      window.location.href = '/error'
    }

    return Promise.reject(error.response)
  },
)

export default AxiosInstance
