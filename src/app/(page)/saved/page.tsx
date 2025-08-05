export const dynamic = 'force-dynamic';

import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import TalentsView from "@/component/components/TalentsView";
import OgImageLoader from "@/component/components/OgImageLoader";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";

interface PageProps {
  searchParams?: {
    filter?: string;
  };
}

export default async function PostList({ searchParams }: PageProps) {
  const activeFilter = searchParams?.filter || 'all';
  const cookieStore = cookies();
  const token = await cookieStore.get("token")?.value;

  // Fetch user profile data
  let savedPostIds: string[] = [];
  try {
    const { profileData } = await fetchUserProfileAndInstitute(token ?? "");
    savedPostIds = profileData?.data?.savedPosts ?? [];
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }

  // Fetch all posts
  let posts: PostType[] = [];
  try {
    const res = await getPosts(token ?? "");
    if (res?.posts) {
      posts = res.posts.filter((post): post is PostType => post.isDeleted !== true);
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  // Filter posts to only include saved ones
  const savedPosts = posts.filter((post: any) => savedPostIds.includes(post.id));

  // Function to filter posts by type
  const filterPosts = (type: string) => {
    switch (type) {
      case 'video':
        return savedPosts.filter(post => 
          post.fileURL && post.fileURL.toLowerCase().endsWith('.mp4')
        );
      case 'image':
        return savedPosts.filter(post => 
          post.fileURL && 
          (post.fileURL.toLowerCase().endsWith('.jpg') || 
           post.fileURL.toLowerCase().endsWith('.jpeg') || 
           post.fileURL.toLowerCase().endsWith('.png') ||
           post.fileURL.toLowerCase().endsWith('.gif'))
        );
      case 'text':
        return savedPosts.filter(post => 
          !post.fileURL || post.fileURL === null || post.fileURL === ''
        );
      default:
        return savedPosts;
    }
  };

  const filteredPosts = filterPosts(activeFilter);

  return (
    <div className="flex flex-row">
      <div className="pt-2 flex-1 mx-3">
        {filteredPosts.length === 0 ? (
          <div key="skeleton-container">
            <PostSkelatal key="cas1" />
            <PostSkelatal key="cas2" />
          </div>
        ) : (
          <div key="posts-container">
            {filteredPosts.map((post, idz) => 
              (idz === 0 || idz % 3 === 0) ? 
                <div key={`wrapper-${post.id}`}>
                  <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                </div> : 
                <Post key={post.id} post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
            )}
          </div>
        )}
      </div>
      <div className="w-[400px]">
        <div className="fixed top-16 right-0 w-[400px] flex justify-end h-screen overflow-y-auto">
          <aside
            style={{
              width: '200px',
              background: '#fff',
              borderLeft: '1px solid #e0e0e0',
              padding: '2rem 1rem',
              boxShadow: '-2px 0 5px rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{ marginBottom: '1.5rem', fontSize: '18px' }}>Filter Saved</h2>
            {['all', 'video', 'image', 'text'].map((filter) => (
              <a 
                key={filter}
                href={`?filter=${filter}`}
                style={{
                  display: 'block',
                  background: activeFilter === filter ? '#007bff' : '#f9f9f9',
                  color: activeFilter === filter ? '#fff' : '#333',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  fontWeight: activeFilter === filter ? '600' : '500',
                  transition: '0.3s ease',
                  marginBottom: '12px',
                  textDecoration: 'none',
                }}
              >
                {filter === 'all'
                  ? 'All Posts'
                  : filter.charAt(0).toUpperCase() + filter.slice(1) + 's'}
              </a>
            ))}
          </aside>
        </div>
      </div>
    </div>
  );
}