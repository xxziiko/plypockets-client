import { create } from 'zustand'

export const createState = create((set) => ({
  setState: () =>
    set((state) => ({
      ...state,
      // set data
    })),
}))
