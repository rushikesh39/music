import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tokenRes = await fetch("http://localhost:3000/api/spotify-token");
    const tokenData = await tokenRes.json();

    const res = await fetch(
      "https://api.spotify.com/v1/search?q=hindi&type=track&limit=10&market=IN",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    const data = await res.json();

    // ✅ DO NOT FILTER preview_url
    return NextResponse.json(data.tracks.items || []);
  } catch (err) {
    console.error("HOME TRACK API ERROR:", err);
    return NextResponse.json({ error: "Failed to load tracks" }, { status: 500 });
  }
}
