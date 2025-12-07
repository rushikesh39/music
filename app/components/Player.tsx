"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { usePlayer } from "@/lib/usePlayer";

export default function Player() {
  const { tracks, currentIndex, isPlaying, next, prev, toggle } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, currentIndex, volume]);

  if (!tracks.length) return null;

  return (
    <div className="fixed bottom-0 w-full bg-black border-t p-4 flex items-center gap-4">
      <img
        src={tracks[currentIndex].album.images[0].url}
        className="w-12 h-12 rounded"
      />

      <div className="flex-1">
        <p className="text-sm">{tracks[currentIndex].name}</p>
        <p className="text-xs text-gray-400">
          {tracks[currentIndex].artists[0].name}
        </p>
      </div>

      <Button onClick={prev}>⏮</Button>
      <Button onClick={toggle}>{isPlaying ? "⏸" : "▶️"}</Button>
      <Button onClick={next}>⏭</Button>

      <div className="w-32">
        <Slider
          value={[volume]}
          onValueChange={(v) => setVolume(v[0])}
          max={1}
          step={0.01}
        />
      </div>

      <audio
        ref={audioRef}
        src={tracks[currentIndex].preview_url}
        onEnded={next}
      />
    </div>
  );
}
