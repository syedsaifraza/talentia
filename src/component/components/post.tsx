"use client";
import { Suspense, useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { IoMail, IoClose } from "react-icons/io5";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FiMessageSquare, FiCopy } from "react-icons/fi";
import { Bookmark, EyeOff, MoreVertical, SquarePen, Trash, X } from "lucide-react";
import moment from "moment";
import { addComment, addLike } from "@/utils/apis/post";
import { blogPost, savePost, watchPostReels } from "@/utils/apis/profile";
import { useSelector } from "react-redux";
import { CommentType, Feelings, PostType } from "@/lib/interfaces/types";
import ReadMore from "./ReadMore";
import NameAvatar from "./nameAvatar";
import PostSkelatal from "../skelatal/PostSkelatal";
import { handlePostRevalidation } from "./postRevalidation";
import Link from "next/link";
import { IoIosShareAlt, IoIosSend } from "react-icons/io";


type PostProps = {
  post: any;
  ogImageLoader?: React.ReactNode;
  className?: string;
  profileData?: any;
};

const Post = ({
  post,
  ogImageLoader,
  profileData,
  className = "",
}: PostProps) => {
  const [likeCount, setLikeCount] = useState(post.likes?.length || 0);
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [comments, setComments] = useState<CommentType[]>(post.comments || []);
  const [commentInput, setCommentInput] = useState("");
  const [isShareOverlayOpen, setIsShareOverlayOpen] = useState(false);
  const appState = useSelector((state: any) => state.auth);
  const [isLiked, setIsLiked] = useState(
    appState.user ? post.likes?.includes(appState.user.uid) : false
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isIgnored, setIsIgnored] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const getFeelingType = (feelingType: string, feelingInfo: Feelings) => {
    if (!feelingType || !feelingInfo) return "";
    return `${feelingType === "feelings" ? "is feeling" : "is"} ${
      feelingInfo.text
    } ${feelingInfo.emoji}`;
  };

  const handleLikeClick = (postId: any,postLikes:any) => {
    addLike(postId);
    setLikeCount((prev: any) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev: any) => !prev);
    // console.log(post.user.user_id);
    // console.log(postLikes);
    // console.log(postId);
    console.log("hello sir");
    console.log(profileData);
    // console.log(profileData)
    // console.log(post)
  };

  const handleSavePost = (postId: any,postLikes:any) => {
    savePost("post", postId);
    setIsSaved(!isSaved);
    setIsMenuOpen(false);
    console.log(postLikes);
  };

  const watchPost = (postId: any,) => {
    watchPostReels("post", postId);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const newComment: CommentType = {
      comment: commentInput,
      user: "122",
    };

    setComments([...comments, newComment]);
    setCommentInput("");
    addComment(post.id.toString(), commentInput);
    handlePostRevalidation();
  };

  const extractFirstURL = (text: string): string | null => {
    const match = text.match(/https?:\/\/[^\s"'<>()]+/);
    return match ? match[0] : null;
  };


  const [IsLiked,setIsLIked] = useState()

  useEffect(() => {

    // const Like = post.like(()=)

    // console.log(profileData.data.id)




    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (appState.user == null) return <PostSkelatal key={Math.random() * 1000} />;
  if (isIgnored) return null;

  return (
    <div
    // style={{width:"500px"}}
      className={` rounded-xl shadow-sm  overflow-hidden mb-4 ${className}`}
      style={{backgroundColor:"#fefefe",boxShadow: "0px 1px 1px 1px rgba(0, 0, 0, 0.1)"}}
    >
      {/* Post Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          {post.userDetails?.profilePhoto || post.userDetails?.logoURL ? (
            <Image
              src={post.userDetails.profilePhoto || post.userDetails.logoURL}
              width={40}
              height={40}
              alt={post.user.name}
              className="rounded-full object-cover aspect-square"
            />
          ) : (

            <Image
              src={"https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"}
              width={40}
              height={40}
              alt={post.user.name}
              className="rounded-full object-cover aspect-square"
            />

          
          )}

          <div>
            <Link
              href={`account/${post.user.uid || post.user.instituteId}`}
              className="font-semibold text-gray-800 hover:text-blue-600 transition-colors"
            >
              {post.user.name}
            </Link>
            {post.activityOrFeeling && post.currentFeeling && (
              <p className="text-xs text-gray-500">
                {getFeelingType(post.activityOrFeeling, post.currentFeeling)}
                {post.activityInfo && ` ${post.activityInfo}`}
              </p>
            )}
            <p className="text-xs text-gray-400">
              {moment(post.createdAt._seconds * 1000).fromNow()}
            </p>
          </div>
        </div>

        {/* Three-dot menu */}
        <div className="relative " ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="More options"
          >
            <MoreVertical className="w-5 h-5 text-gray-500" />
          </button>
          <button
          onClick={() => setIsIgnored(true)}
            className="p-1 ml-4 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="More options"
          >
            <X  className="w-5 h-5 text-gray-500" />
            {/* <MoreVertical className="w-5 h-5 text-gray-500" /> */}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
              <div className="py-1">
                <button
                  onClick={() => handleSavePost(post.id,post.likes)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <Bookmark className="w-4 h-4 mr-2" />
                  {isSaved ? "Unsave Post" : "Save Post"}
                </button>
                
                {/* Show Edit/Delete only for user's own post, safely check profileData */}
                {profileData &&
                  profileData.data &&
                  post.user.user_id === profileData.data.id && (
                    <>
                      <button
                        onClick={() => {
                          /* TODO: Add edit logic here */
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <SquarePen className="w-4 h-4 mr-2" /> Edit Post
                      </button>
                      <button
                        onClick={() => {
                          /* TODO: Add delete logic here */
                        }}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <Trash className="w-4 h-4 mr-2" /> Delete Post
                      </button>
                    </>
                  )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Post Content */}
      <div className=" pb-2">
        {extractFirstURL(post.text) !== post.text && (
          <div style={{fontSize:"13px"}} className="mb-2 px-4 font-inter font-normal text-justify text-gray-800">
            {post.text.length > 100 ? (
              <ReadMore text={post.text} />
            ) : (
              <p>{post.text}</p>
            )}
          </div>
        )}

        {ogImageLoader}

        {/* Media Content */}
        {post.fileURL && (
          <div className="overflow-hidden bg-gray-50 my-0 border-t border-b border-gray-200  flex justify-center items-center">
            {!post.fileURL.includes(".mp4") ? (
              <Suspense
                fallback={
                  <div className="w-full aspect-square max-w-[500px] bg-gray-200 animate-pulse" />
                }
              >
                <img
                  src={post.fileURL}
                  alt="Post Media"
                  className="w-full aspect-square max-w-[500px] object-contain"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "auto",
                    aspectRatio: "1/1",
                  }}
                />
              </Suspense>
            ) : (
              <Suspense
                fallback={
                  <div className="w-full h-64 bg-gray-200 animate-pulse" />
                }
              >
                <video
                  controls
                  className="w-full  object-contain"
                  onPlay={() => watchPost(post.id)}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "600px",
                    aspectRatio: "1/1",
                  }}
                >
                  <source src={post.fileURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense>
            )}
          </div>
        )}
      </div>

      {/* Post Stats */}
      <div className="px-4 py-2  flex justify-between text-sm text-gray-500">
        <span className="hover:text-blue-600 cursor-pointer">
          {likeCount} likes
        </span>
        <div className="flex gap-4">
          <span className="hover:text-blue-600 cursor-pointer">
            {post.userComments.length} comments
          </span>
          <span className="hover:text-blue-600 cursor-pointer">Share</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-4 py-2 border-t border-gray-200 grid grid-cols-3 gap-1 text-gray-600">
        <button
          onClick={() => handleLikeClick(post.id,post.likes)}
          className={`flex items-center justify-center gap-1 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
            isLiked ? "text-blue-600" : ""
          }`}
        >
          {isLiked ? (
            <AiFillLike className="text-xl" />
          ) : (
            <AiOutlineLike className="text-xl" />
          )}
          <span>Like</span>
        </button>
        <button
          onClick={() => setIsCommentSectionOpen((prev) => !prev)}
          className="flex items-center justify-center gap-1 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FiMessageSquare className="text-xl" />
          <span>Comment</span>
        </button>
        <button
          onClick={() => setIsShareOverlayOpen(true)}
          className="flex items-center justify-center gap-1 py-2 rounded-lg hover:bg-gray-100 transition-colors text-blue-600"
        >
          <IoIosShareAlt className="text-xl" />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {isCommentSectionOpen && (
        <div className="border-t border-gray-100 p-4">
          <div className="max-h-[30vh] overflow-y-auto space-y-3 mb-3">
            {post.userComments.map((comment: any, idc: number) => (
              <div key={idc} className="flex items-start space-x-2">
                {comment.userDetails?.profilePhoto ||
                comment.userDetails?.logoURL ? (
                  <Image
                    src={
                      comment.userDetails.profilePhoto ||
                      comment.userDetails.logoURL
                    }
                    width={32}
                    height={32}
                    alt={comment.userDetails.name}
                    className="rounded-full flex-shrink-0"
                  />
                ) : (
                  <NameAvatar
                    name={comment.userDetails?.name || "U"}
                    size={32}
                  />
                )}
                <div className="bg-gray-100 p-3 rounded-lg flex-1">
                  <p className="font-semibold text-sm">
                    {comment.userDetails?.name || "User"}
                  </p>
                  <p className="text-sm">{comment.comment}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleCommentSubmit}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={!commentInput.trim()}
              className="p-2 bg-blue-500 text-white rounded-full disabled:opacity-50"
            >
              <IoIosSend />
            </button>
          </form>
        </div>
      )}

      {/* Share Modal */}
      {isShareOverlayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Share this post</h2>
              <button
                onClick={() => setIsShareOverlayOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
                aria-label="Close share modal"
              >
                <IoClose className="text-2xl text-gray-500" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-3 gap-4">
              {/* Copy Link Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-gray-700 p-3 rounded-full">
                  <FiCopy className="text-2xl text-white" />
                </div>
                <span className="text-sm">Copy Link</span>
              </button>

              {/* WhatsApp Button */}
              <button
                onClick={() => {
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-green-500 p-3 rounded-full">
                  <FaWhatsapp className="text-2xl text-white" />
                </div>
                <span className="text-sm">WhatsApp</span>
              </button>

              {/* Facebook Button */}
              <button
                onClick={() => {
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-blue-600 p-3 rounded-full">
                  <FaFacebookF className="text-2xl text-white" />
                </div>
                <span className="text-sm">Facebook</span>
              </button>

              {/* Twitter Button */}
              <button
                onClick={() => {
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-black p-3 rounded-full">
                  <FaXTwitter className="text-2xl text-white" />
                </div>
                <span className="text-sm">Twitter</span>
              </button>

              {/* https://domain/feed/post?id----id */}

              {/* LinkedIn Button */}
              <button
                onClick={() => {
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      window.location.href
                    )}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-blue-700 p-3 rounded-full">
                  <FaLinkedinIn className="text-2xl text-white" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </button>

              {/* Email Button */}
              <button
                onClick={() => {
                  window.open(
                    `mailto:?body=${encodeURIComponent(window.location.href)}`,
                    "_blank"
                  );
                }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="bg-red-600 p-3 rounded-full">
                  <IoMail className="text-2xl text-red-600" />
                </div>
                <span className="text-sm">Email</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
