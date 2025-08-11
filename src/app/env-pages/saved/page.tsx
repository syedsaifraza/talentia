export const dynamic = 'force-dynamic';
import { getPosts } from "@/utils/apis/post";
import Post from "@/component/components/post";
import { PostType } from "@/types/PostType";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import { cookies } from "next/headers";
import TalentsView from "@/component/components/TalentsView";
import OgImageLoader from "@/component/components/OgImageLoader";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaLayerGroup, FaLink } from "react-icons/fa6";
import { BiImages, BiSolidVideos } from "react-icons/bi";
import { RiFilmAiFill } from "react-icons/ri";
import NoPost from "@/component/components/NoPost"
import SavedFilter from "@/component/components/savedComponents/SavedFilterForm";

export default async function PostList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const activeFilter = searchParams?.filter || 'all';
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  // Fetch user profile data
  let savedPostIds: string[] = [];
  try {
    const { profileData } = await fetchUserProfileAndInstitute(token?.value ?? "");
    savedPostIds = profileData?.data?.savedPosts ?? [];
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }



  // Fetch all posts
  let posts: PostType[] = [];
  try {
    const res = await getPosts(token?.value ?? "");
    if (res?.posts) {
      posts = res.posts.filter((post): post is PostType => post.isDeleted !== true);
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }



  // Filter posts to only include saved ones
  const savedPosts = posts.filter((post: PostType) => savedPostIds.includes(post.id));

  // Function to filter posts by type
  const filterPosts = (type: string) => {
    switch (type) {
      case 'videos':
        return savedPosts.filter(post => 
          post.fileURL && post.fileURL.toLowerCase().endsWith('.mp4')
        );
      case 'images':
        return savedPosts.filter(post => 
          post.fileURL && 
          (post.fileURL.toLowerCase().endsWith('.jpg') || 
           post.fileURL.toLowerCase().endsWith('.jpeg') || 
           post.fileURL.toLowerCase().endsWith('.png') ||
           post.fileURL.toLowerCase().endsWith('.gif'))
        );
      case 'reels':
        // Assuming reels are also MP4 files - adjust as needed
        return [];
      case 'text':
        return savedPosts.filter(post => 
          !post.fileURL || post.fileURL === null || post.fileURL === ''
        );
      default:
        return savedPosts;
    }
  };

  const menuItems = [
    {
      id: "all",
      label: "All Posts",
      icon: <FaLayerGroup />
    },
    {
      id: "videos",
      label: "Videos",
      icon: <BiSolidVideos />
    },
    {
      id: "images",
      label: "Images",
      icon: <BiImages />
    },
    {
      id: "reels",
      label: "Reels",
      icon: <RiFilmAiFill />
    },
  ];

  const filteredPosts = filterPosts(activeFilter as string);

  return (
    <div className="flex flex-row">
      <div className="pt-2 flex justify-center items-center flex-1">
        <div className="w-[500px]">
          {filteredPosts.length === 0 ? (
            <div className="text-center ">
              <div className="flex items-center justify-center bg-gray-100">
                <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
                  {/* Illustration Header */}
                  <div 
                    className="relative flex h-48 items-center justify-center overflow-hidden p-4" 
                    style={{
                      backgroundImage: "url('https://content.acetians.in/uploads/Static-page-design-v0-by-Vercel-08-08-2025_12_04_PM.png')", 
                      backgroundPosition: "contain"
                    }}
                  >
                    {/* Heart */}
                  </div>
  
                  {/* Content Section */}
                  <div className="p-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">No Saved available</h2>
                    <p className="mt-4 text-gray-600">
                      It looks like there are no posts to display at the moment. Please check back later for new content!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key="posts-container">
              {filteredPosts.map((post, idz) => (
                <div key={post.id}>
                  {(idz === 0 || idz % 3 === 0) ? (
                    <div key={`wrapper-${post.id}`}>
                      <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                    </div>
                  ) : (
                    <Post post={post} ogImageLoader={<OgImageLoader text={post.text}/>} />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <SavedFilter/> */}
      <div className="w-[300px] h-full">
        <div className="fixed bg-white right-0 w-[300px] flex flex-col h-screen overflow-y-auto">
          <div className="flex items-center p-4 border-b border-gray-200 justify-between sticky top-0 bg-white z-10">
            <h2 className="text-xl font-semibold text-gray-800">Saved</h2>
            <Link 
              href="/home" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 mr-2"
            >
              <IoClose size={24} className="text-gray-600" />
            </Link>
          </div>

          <aside className="space-y-2 w-[300px] p-[1rem]">
            {menuItems.map((filter) => (
              <Link
                key={filter.id}
                href={`?filter=${filter.id}`}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                  activeFilter === filter.id 
                    ? "bg-blue-50 border border-blue-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className={`p-2 rounded-full mr-3 ${
                  activeFilter === filter.id ? "bg-blue-500" : "bg-gray-200"
                }`}>
                  <div className={`${
                    activeFilter === filter.id ? "text-white" : "text-black"
                  }`}>
                    {filter.icon}
                  </div>
                </div>
                <span className={`font-medium ${
                  activeFilter === filter.id ? "text-blue-600" : "text-gray-700"
                }`}>
                  {filter.label}
                </span>
              </Link>
            ))}
          </aside>
        </div>
      </div>
      
    </div>
  );
}

