import { create } from 'zustand'

export const useGiftStore = create((set) => ({
  nickname: '공민지',
  letter: '테스트중입니다',
  friendName: '',
  spotifyId: '3CWq0pAKKTWb0K4yiglDc4',
  giftWrapper: {
    cover: null,
    decoration: null,
    color: null,
  },

  setGiftWrapper: (state) => set({ giftWrapper: state }),
  setNickname: (state) => set({ nickname: state }),
  setCoverIdx: (state) => set({ coverIdx: state }),
  setDecoIDx: (state) => set({ decoIdx: state }),
  setLetter: (state) => set({ letter: state }),
  setFriendName: (state) => set({ friendName: state }),
  setSpotifyId: (state) => set({ spotifyId: state }),
}))
