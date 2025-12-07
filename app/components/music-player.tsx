"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { usePlayer } from "@/lib/usePlayer";

export default function MusicPlayer() {
  const { tracks, currentIndex, isPlaying, toggle, next, prev } = usePlayer();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [volume, setVolume] = useState(0.5);

  const currentTrack = tracks[currentIndex];

  // ✅ PLAY / PAUSE + VOLUME
  useEffect(() => {
    if (!audioRef.current || !currentTrack?.preview_url) return;

    audioRef.current.volume = volume;

    if (isPlaying) {
      audioRef.current
        .play()
        .catch(() => console.log("Autoplay blocked"));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack, volume]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t border-neutral-800 px-6 flex items-center justify-between z-50">
      
      {/* ✅ SONG INFO */}
      <div className="flex items-center gap-4 w-1/3">
        <img
          src={currentTrack.album?.images?.[0]?.url || "/placeholder-song.jpg"}
          alt="Song Cover"
          className="w-14 h-14 rounded object-cover"
        />
        <div>
          <h4 className="font-semibold truncate">{currentTrack.name}</h4>
          <p className="text-sm text-neutral-400 truncate">
            {currentTrack.artists?.[0]?.name}
          </p>
        </div>
      </div>

      {/* ✅ PLAYER CONTROLS */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center gap-5 mb-2">
          <SkipBack
            size={22}
            onClick={prev}
            className="text-neutral-300 hover:text-white cursor-pointer"
          />

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
            onClick={toggle}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>

          <SkipForward
            size={22}
            onClick={next}
            className="text-neutral-300 hover:text-white cursor-pointer"
          />
        </div>

        {/* (UI ONLY PROGRESS BAR) */}
        <Slider className="w-[350px]" defaultValue={[0]} max={100} step={1} />
      </div>

      {/* ✅ VOLUME */}
      <div className="flex items-center gap-3 w-1/3 justify-end">
        <Volume2 className="text-neutral-300" size={20} />
        <Slider
          className="w-[120px]"
          value={[volume * 100]}
          onValueChange={(v) => setVolume(v[0] / 100)}
          max={100}
          step={5}
        />
      </div>

      {/* ✅ REAL AUDIO (ONLY WHEN URL EXISTS) */}
      {currentTrack.preview_url && (
        <audio
          ref={audioRef}
          src={currentTrack.preview_url}
          onEnded={next}
        />
      )}
    </div>
  );
}
