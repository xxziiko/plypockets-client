import { create } from 'zustand'

export const useGiftStore = create((set) => ({
  nickname: '',
  letter: '',
  friendName: '',
  spotifyId: '',
  giftWrapper: {
    cover: null,
    decoration: null,
    color: null,
  },

  setGiftWrapper: (state) => set({ giftWrapper: state }),
  setNickname: (state) => set({ nickname: state }),
  setCoverIdx: (state) => set({ coverIdx: state }),
  setDecoIDx: (state) => set({ decoIdx: state }),
  setLetter: (state) => set({ letter: state.substring(0, 300) }),
  setFriendName: (state) => set({ friendName: state.substring(0, 8) }),
  setSpotifyId: (state) => set({ spotifyId: state }),
}))
