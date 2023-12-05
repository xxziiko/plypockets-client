import { create } from 'zustand'

export const useHeaderStore = create((set) => ({
  isShowInputTools: false,
  isShowTextButtons: false,
  isShowGiftList: false,
  isCopyClipboard: false,
  modalOpen: false,
  setIsCopyClipboard: (state) => set({ isCopyClipboard: state }),
  setIsShowInputTools: (state) => set({ isShowInputTools: state }),
  setIsShowGiftList: (state) => set({ isShowGiftList: state }),
  setIsTextButtons: (state) => set({ isShowTextButtons: state }),
  setModalOpen: (state) => set({ modalOpen: state }),
}))
