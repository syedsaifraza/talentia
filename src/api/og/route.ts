import { NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }

  try {
    const { error, result } = await ogs({ url });

    if (error) {
      return NextResponse.json({ error: 'Failed to fetch OG data' }, { status: 500 });
    }

    return NextResponse.json({
      title: result.ogTitle,
      description: result.ogDescription,
      image:Array.isArray(result.ogImage)
  ? result.ogImage[0]?.url || null
  : result.ogImage || null
    });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
