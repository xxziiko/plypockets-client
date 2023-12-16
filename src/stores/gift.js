import { create } from 'zustand'

export const useGiftStore = create((set) => ({
  nickname: '',
  coverIdx: '',
  decoIdx: '',
  colorIdx: '',
  letter: '',
  friendname: '',
  spotifyId: '',

  setNickname: (state) => set({ nickname: state }),
  setCoverIdx: (state) => set({ coverIdx: state }),
  setDecoIDx: (state) => set({ decoIdx: state }),
  setLetter: (state) => set({ letter: state }),
  setFriendName: (state) => set({ friendname: state }),
  setSpotifyId: (state) => set({ spotifyId: state }),
}))
