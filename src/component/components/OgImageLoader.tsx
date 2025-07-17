import React from 'react';
import { Metadata } from 'next';
import * as cheerio from 'cheerio'; // npm install cheerio
import Link from 'next/link';

interface OGData {
  title: string;
  description: string;
  image: string | null;
}

interface Props {
  text: string;
}

const extractFirstURL = (text: string): string | null => {
  const match = text.match(/https?:\/\/[^\s"'<>()]+/);
  return match ? match[0] : null;
};

async function fetchOgDataDirect(url: string): Promise<OGData | null> {
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Bot/1.0)',
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    const getMeta = (name: string) =>
      $(`meta[property='og:${name}']`).attr('content') ||
      $(`meta[name='${name}']`).attr('content') ||
      '';

    const title = getMeta('title') || $('title').text();
    const description = getMeta('description');
    const image = getMeta('image');

    return {
      title,
      description,
      image: image || null,
    };
  } catch (error) {
    console.error('Failed to fetch OG data:', error);
    return null;
  }
}

const OgImageLoader = async ({ text }: Props) => {
  const url = extractFirstURL(text);
  const ogData = url ? await fetchOgDataDirect(url) : null;

  return (
    <div className="space-y-4">
      {ogData && (
        <Link href={url||""} target='_blank'> 
        <div className="border rounded-lg overflow-hidden shadow-md max-w-lg">
          {ogData.image && (
            <img src={ogData.image} alt={ogData.title} className="w-full h-auto" />
          )}
          <div className="p-4 bg-white">
            <h3 className="font-semibold text-lg">{ogData.title}</h3>
            <p className="text-sm text-gray-600">{ogData.description}</p>
          </div>
        </div>
        </Link>
      )}
    </div>
  );
};

export default OgImageLoader;
