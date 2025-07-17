// app/components/UserGallery.tsx
import { getPosts } from "@/utils/apis/post";
import { cookies } from "next/headers";
import EmptyState from "./EmptyState";  
import GalleryGrid from "./GalleryGrids";

export const dynamic = "force-dynamic";

export default async function UserVideos({id}:{id:string}) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  let galleryImages: string[] = [];

  try {
    const res = await getPosts(token?.value || "no token");
    if (res?.posts) {
      galleryImages = res.posts
        .filter((post) =>
          post.isDeleted!=true &&
          post.fileURL &&
          post.fileURL.toLowerCase().endsWith(".mp4") 
        ).filter((f)=>f.user.user_id==id)
        .map((p) => p.fileURL);
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  if (galleryImages.length === 0) {
    return <EmptyState title="No Videos Found" />;
  }

  return <GalleryGrid images={galleryImages} />;
}
