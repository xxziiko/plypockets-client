import { create } from 'zustand'

export const useButtonStore = create((set) => ({
  buttonDisable: false,
  setButtonDisable: (state) => set({ buttonDisable: state }),
}))
