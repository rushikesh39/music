"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Music, Bot, Mic, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div className="p-6 space-y-10">

      {/* ---------- HERO SECTION ---------- */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold text-white mb-3">
          Welcome to MusicVerse
        </h1>
        <p className="text-neutral-400 text-lg">
          Explore music, discover podcasts, chat with AI, and enjoy books — all in one place.
        </p>
      </section>

      {/* ---------- QUICK ACCESS CARDS ---------- */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Quick Access</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <QuickCard
            title="Explore Music"
            icon={<Music size={26} />}
            link="/explore"
          />

          <QuickCard
            title="AI Chatbot"
            icon={<Bot size={26} />}
            link="/ai-chat"
          />

          <QuickCard
            title="Podcasts"
            icon={<Mic size={26} />}
            link="/podcast"
          />

          <QuickCard
            title="Books"
            icon={<BookOpen size={26} />}
            link="/books"
          />

        </div>
      </section>

      {/* ---------- PLAYLISTS SECTION ---------- */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Recommended Playlists</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </section>

      {/* ---------- PODCASTS SECTION ---------- */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Trending Podcasts</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
          <PodcastCard />
        </div>
      </section>

      {/* ---------- BOOKS SECTION ---------- */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Featured Books</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------
   REUSABLE UI COMPONENTS (Simple, clean)
------------------------------------------- */

function QuickCard({ title, icon, link }: any) {
  return (
    <a href={link}>
      <Card className="bg-[#121212] hover:bg-[#1b1b1b] transition p-5 cursor-pointer rounded-xl">
        <CardContent className="flex flex-col items-center justify-center space-y-3">
          <div className="p-3 bg-neutral-800 rounded-full text-white">
            {icon}
          </div>
          <p className="text-sm font-medium">{title}</p>
        </CardContent>
      </Card>
    </a>
  );
}

function PlaylistCard() {
  return (
    <Card className="bg-[#121212] hover:bg-[#1b1b1b] transition rounded-xl">
      <CardContent className="p-3 space-y-2">
        <div className="w-full h-32 bg-neutral-800 rounded-lg"></div>
        <p className="font-medium text-sm">Playlist Name</p>
        <p className="text-xs text-neutral-400">Good vibes • 20 songs</p>
      </CardContent>
    </Card>
  );
}

function PodcastCard() {
  return (
    <Card className="bg-[#121212] hover:bg-[#1b1b1b] transition rounded-xl">
      <CardContent className="p-3 space-y-2">
        <div className="w-full h-32 bg-neutral-800 rounded-lg"></div>
        <p className="font-medium text-sm">Podcast Title</p>
        <p className="text-xs text-neutral-400">Host • 10 episodes</p>
      </CardContent>
    </Card>
  );
}

function BookCard() {
  return (
    <Card className="bg-[#121212] hover:bg-[#1b1b1b] transition rounded-xl">
      <CardContent className="p-3 space-y-2">
        <div className="w-full h-32 bg-neutral-800 rounded-lg"></div>
        <p className="font-medium text-sm">Book Title</p>
        <p className="text-xs text-neutral-400">Author Name</p>
      </CardContent>
    </Card>
  );
}
