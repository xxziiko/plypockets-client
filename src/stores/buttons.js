import { create } from 'zustand'

export const useButtonStore = create((set) => ({
  buttonDisable: false,
  isCopyClipboard: false,
  setIsCopyClipboard: (state) => set({ isCopyClipboard: state }),
  setButtonDisable: (state) => set({ buttonDisable: state }),
}))
