import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MusicPlayer from "./components/music-player";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            <Navbar />
            {children}
          </main>
        </div>

        <MusicPlayer />
      </body>
    </html>
  );
}
