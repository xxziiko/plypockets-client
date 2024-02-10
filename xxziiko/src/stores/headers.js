import { create } from 'zustand'

export const useHeaderStore = create((set) => ({
  hasToken: false,
  openModal: false,
  isViewText: false,
  setUserName: (state) => set({ nickname: state }),
  setOpenModal: (state) => set({ openModal: state }),
  setHasToken: (state) => set({ hasToken: state }),
  setIsViewText: (state) => set({ isViewText: state }),
}))
