"use client";

import Link from "next/link";
import { Home, Compass, Bot, Book, Mic, User, ShoppingBag } from "lucide-react";

const routes = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Explore", icon: Compass, href: "/explore" },
  { label: "AI Chatbot", icon: Bot, href: "/ai-chat" },
  { label: "Podcasts", icon: Mic, href: "/podcast" },
  { label: "Books", icon: Book, href: "/books" },
  { label: "Orders", icon: ShoppingBag, href: "/orders" },
  { label: "Profile", icon: User, href: "/profile" },
];

export default function Sidebar({ isMobile = false }) {
  return (
    <aside
      className={`${
        isMobile ? "block" : "hidden md:flex"
      } flex-col bg-[#000] h-full p-5 border-r border-neutral-800 space-y-8 w-64`}
    >
      <h1 className="text-2xl font-bold">MusicVerse</h1>

      <nav className="space-y-2">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-[#121212] text-neutral-300 hover:text-white"
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
