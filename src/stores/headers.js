import { create } from 'zustand'

export const useHeaderStore = create((set) => ({
  hasToken: false,
  isShowInputTools: false,
  isShowGiftList: false,
  isCopyClipboard: false,
  openModal: false,
  setIsCopyClipboard: (state) => set({ isCopyClipboard: state }),
  setIsShowInputTools: (state) => set({ isShowInputTools: state }),
  setIsShowGiftList: (state) => set({ isShowGiftList: state }),
  setOpenModal: (state) => set({ openModal: state }),
  setHasToken: (state) => set({ hasToken: state }),
}))
