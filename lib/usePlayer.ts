import { create } from "zustand";

interface PlayerState {
  tracks: any[];
  currentIndex: number;
  isPlaying: boolean;
  setTracks: (tracks: any[], index: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
}

export const usePlayer = create<PlayerState>((set, get) => ({
  tracks: [],
  currentIndex: 0,
  isPlaying: false,

  setTracks: (tracks, index) =>
    set({
      tracks,
      currentIndex: index,
      isPlaying: true,
    }),

  toggle: () => set({ isPlaying: !get().isPlaying }),

  next: () => {
    const { currentIndex, tracks } = get();
    const nextIndex = (currentIndex + 1) % tracks.length;
    set({ currentIndex: nextIndex, isPlaying: true });
  },

  prev: () => {
    const { currentIndex, tracks } = get();
    const prevIndex =
      (currentIndex - 1 + tracks.length) % tracks.length;
    set({ currentIndex: prevIndex, isPlaying: true });
  },
}));
