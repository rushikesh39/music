"use client";

import Link from "next/link";
import { ArrowLeft, Music2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 animate-fade-in">
      
      {/* Icon */}
      <div className="mb-6">
        <Music2 size={80} className="text-neutral-500 animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-4">
        404
      </h1>

      {/* Subtitle */}
      <p className="text-neutral-400 text-lg max-w-md mb-8">
        Oops! The page you're looking for doesn’t exist.  
        Let’s get you back to the rhythm 🎧
      </p>

      {/* Button */}
      <Link
        href="/"
        className="
          flex items-center gap-2 
          bg-white text-black px-5 py-2.5 rounded-full 
          font-medium hover:bg-neutral-200 
          transition duration-200
        "
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>

      {/* Small caption */}
      <p className="text-neutral-500 text-sm mt-6">
        MusicVerse • Explore • Discover • Enjoy
      </p>
    </div>
  );
}
