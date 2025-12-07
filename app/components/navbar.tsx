"use client";

import { Menu, Search, Bell, UserCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useSearch } from "@/lib/useSearch"; 

export default function Navbar() {
  
  const { query, setQuery } = useSearch(); 
  return (
    <header className="w-full h-16 bg-[#000000] border-b border-neutral-800 flex items-center px-4 justify-between">

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="text-white" size={26} />
          </SheetTrigger>

          <SheetContent side="left" className="bg-black p-0 w-64">
            {/* ACCESSIBLE TITLE (hidden from UI but required) */}
            <span className="sr-only">
              <SheetTitle>Mobile Sidebar Menu</SheetTitle>
            </span>

            <Sidebar isMobile />
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile Logo */}
      <div className="md:hidden text-white font-semibold text-lg">
        MusicVerse
      </div>

      {/* Desktop Search */}
      <div className="hidden md:block w-full max-w-lg relative">
        <Search className="absolute left-3 top-2.5 text-neutral-400" size={18} />
        <input
         value={query}
         onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists, genres..."
          className="pl-10 bg-[#121212] border border-neutral-700 rounded-md text-white placeholder:text-neutral-400 w-full h-10 outline-none"
        />
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        <Bell className="text-neutral-300 hover:text-white cursor-pointer" size={22} />
        <UserCircle className="text-neutral-300 hover:text-white cursor-pointer" size={28} />
      </div>

    </header>
  );
}
