// lib/youtube.ts
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY as string;

if (!API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_YOUTUBE_API_KEY in .env.local");
}

export interface YouTubeSearchItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    channelTitle: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
}

export async function searchIndianSongs(query: string): Promise<YouTubeSearchItem[]> {
  const q = `${query} Hindi song`; // bias toward Indian songs

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", "20");
  url.searchParams.set("q", q);
  url.searchParams.set("key", API_KEY);

  const res = await fetch(url.toString());

  if (!res.ok) {
    console.error("YouTube API error", await res.text());
    throw new Error("Failed to fetch from YouTube API");
  }

  const data = (await res.json()) as YouTubeSearchResponse;
  return data.items;
}
