"use client";

import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#181818] border-t border-neutral-800 px-6 flex items-center justify-between">
      
      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/3">
        <img
          src="/placeholder-song.jpg"
          alt="Song Cover"
          className="w-14 h-14 rounded"
        />
        <div>
          <h4 className="font-semibold">Song Title</h4>
          <p className="text-sm text-neutral-400">Artist Name</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center gap-5 mb-2">
          <SkipBack size={22} className="text-neutral-300 hover:text-white cursor-pointer" />

          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={22} /> : <Play size={22} />}
          </button>

          <SkipForward size={22} className="text-neutral-300 hover:text-white cursor-pointer" />
        </div>

        {/* Progress Bar */}
        <Slider className="w-[350px]" defaultValue={[20]} max={100} step={1} />
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3 w-1/3 justify-end">
        <Volume2 className="text-neutral-300" size={20} />
        <Slider className="w-[120px]" defaultValue={[50]} max={100} step={5} />
      </div>
    </div>
  );
}
