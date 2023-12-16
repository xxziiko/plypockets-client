import { ERROR_MESSAGE } from '@/lib/constants'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useUserInputStore = create((set) => ({
  userInputValue: {
    nickname: '',
    password: '',
  },

  errorMessage: {
    id: ERROR_MESSAGE.ID?.default,
    pw: ERROR_MESSAGE.PW?.default,
  },

  setErrorMessage: (error) => set(() => ({ errorMessage: error })),

  setUserInputValue: (userInfo) =>
    set(() => ({
      userInputValue: userInfo,
    })),
}))

export const useUserBundleStore = create((set) => ({
  currentIndex: 0,
  bundles: [],
  setCurrentIndex: (index) => set(() => ({ currentIndex: index })),
  setBundles: (data) => set(() => ({ bundles: data })),
}))

export const useUserInfoStore = create(
  persist(
    (set, get) => ({
      userInfo: {
        userId: 0,
        nickname: '',
      },
      setUserInfo: (userInfo) => set(userInfo),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
      whitelist: ['userInfo'],
    },
  ),
)
