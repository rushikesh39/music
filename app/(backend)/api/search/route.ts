import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  const tokenRes = await fetch("http://localhost:3000/api/spotify-token");
  const tokenData = await tokenRes.json();

  const res = await fetch(
    `https://api.spotify.com/v1/search?q=${q}&type=track&limit=10&market=IN`,
    {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    }
  );

  const data = await res.json();
  return NextResponse.json(data.tracks.items);
}
