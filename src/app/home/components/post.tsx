"use client";
import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FiCopy } from "react-icons/fi";

interface Comment {
  id: number;
  text: string;
  replies: { id: number; text: string }[];
}

interface PostProps {
  post: {
    id: number;
    text: string;
    media?: {
      type: "image" | "video";
      url: string;
    };
    user: {
      name: string;
      avatar: string;
    };
    timestamp: string;
  };
}

const Post = ({ post }: PostProps) => {
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentInput, setCommentInput] = useState("");
  const [isShareOverlayOpen, setIsShareOverlayOpen] = useState(false);

  // Handle like button click
  const handleLikeClick = () => {
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim() === "") return;

    const newComment: Comment = {
      id: Date.now(),
      text: commentInput,
      replies: [],
    };

    setComments([...comments, newComment]);
    setCommentInput("");
  };

  // Handle reply submission
  const handleReplySubmit = (commentId: number, replyText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === commentId
        ? {
            ...comment,
            replies: [...comment.replies, { id: Date.now(), text: replyText }],
          }
        : comment
    );
    setComments(updatedComments);
  };

  // Handle share button click
  const handleShareClick = () => {
    setIsShareOverlayOpen(true);
  };

  // Close share overlay
  const closeShareOverlay = () => {
    setIsShareOverlayOpen(false);
  };

  return (
    <div className="bg-white my-[3vh] rounded-lg p-4 space-y-4">
      {/* Post Header */}
      <div className="flex items-center space-x-3">
        <Image
          width={40}
          height={40}
          src={post.user.avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
          <p className="text-xs text-gray-500">
            {new Date(post.timestamp).toLocaleString()}
          </p>
        </div>
      </div>

     
      <p className="text-gray-700">{post.text}</p>

     
      {post.media && (
        post.media.type === "image" ? (
          <Image
            width={500}
            height={500}
            src={post.media.url}
            alt="Post Media"
            className="rounded-lg  max-h-[70vh] w-full"
          />
        ) : (
          <video
            controls
            className="w-full min-h-[60vh] object-cover rounded-md"
          >
            <source src={post.media.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      )}

   
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500 hover:text-[#6366f1] cursor-pointer">
          {likeCount} likes
        </span>
        <div className="flex gap-3">
          <span className="text-sm text-gray-500 hover:text-[#6366f1] cursor-pointer">
            {comments.length} comments
          </span>
          <span className="text-sm text-gray-500 hover:text-[#6366f1] cursor-pointer">
            Share
          </span>
        </div>
      </div>

      
      <div className="flex justify-between text-gray-600 text-sm border-t pt-2">
        <button
          className="flex items-center rounded-md justify-center space-x-1 hover:bg-gray-100 p-2 w-32"
          onClick={handleLikeClick}
        >
          {isLiked ? (
            <AiFillLike className="text-[21px] text-[#6366f1]" />
          ) : (
            <AiOutlineLike className="text-[21px] text-[#808080]" />
          )}
          <span className={`text-[15px] font-[600] ${isLiked ? "text-[#6366f1]" : "text-[#808080]"}`}>
            Like
          </span>
        </button>
        <button
          className="flex items-center rounded-md justify-center space-x-1 hover:bg-gray-100 p-2 w-32"
          onClick={() => setIsCommentSectionOpen((prev) => !prev)}
        >
          <FiMessageSquare className="text-[21px]" />
          <span>Comment</span>
        </button>
        <button
          className="flex items-center rounded-md justify-center space-x-1 hover:bg-gray-100 p-2 w-32"
          onClick={handleShareClick}
        >
          <IoIosShareAlt className="text-[21px] text-[#6366f1]" />
          <span className="text-[15px] font-[600] text-[#6366f1]">Share</span>
        </button>
      </div>


      {isShareOverlayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-[90vw] max-w-md">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg">Share</h2>
              <button
                className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
                onClick={closeShareOverlay}
              >
                <IoClose className="text-[22px] text-black" />
              </button>
            </div>

            <div className="flex flex-row justify-between">
              <button
                className="flex items-center justify-center bg-gray-700 rounded-full p-[10px] border-2"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
              >
                <FiCopy className="text-[30px] text-white" />
              </button>
              <button className="flex items-center justify-center bg-green-500 rounded-full p-[10px] border-2">
                <FaWhatsapp className="text-[30px] text-white" />
              </button>
              <button className="flex items-center justify-center bg-[#1877F2] rounded-full p-[10px] border-2">
                <FaFacebookF className="text-[30px] text-white" />
              </button>
              <button className="flex items-center justify-center bg-black rounded-full p-[10px] border-2">
                <FaXTwitter className="text-[30px] text-white" />
              </button>
              <button className="flex items-center justify-center bg-[#0077b5] rounded-full p-[10px] border-2">
                <FaLinkedinIn className="text-[30px] text-white" />
              </button>
              <button className="flex items-center justify-center bg-[#bd081c] rounded-full p-[10px] border-2">
                <IoMail className="text-[30px] text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

     
      {isCommentSectionOpen && (
      <div className="mt-4">
      <div className="overflow-y-auto max-h-[30vh]">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <div className="flex items-center space-x-2">
              <Image
                width={24}
                height={24}
                src={post.user.avatar}
                alt="User Avatar"
                className="w-6 h-6 rounded-full"
              />
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="text-sm">{comment.text}</p>
               
                <div className="flex space-x-4 mt-2">
                  <button
                    className="text-sm text-gray-500 hover:text-[#6366f1]"
                    // onClick={() => handleLike(comment.id)}
                  >
                    Like
                  </button>
                  <button
                    className="text-sm text-gray-500 hover:text-[#6366f1]"
                    // onClick={() => handleShare(comment.id)}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
    
         
            {comment.replies.map((reply) => (
              <div key={reply.id} className="ml-8 mt-2">
                <div className="flex items-center space-x-2">
                  <Image
                    width={24}
                    height={24}
                    src={post.user.avatar}
                    alt="User Avatar"
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-sm">{reply.text}</p>
                
                    <div className="flex space-x-4 mt-2">
                      <button
                        className="text-sm text-gray-500 hover:text-[#6366f1]"
                        // onClick={() => handleLike(reply.id)}
                      >
                        Like
                      </button>
                      <button
                        className="text-sm text-gray-500 hover:text-[#6366f1]"
                        // onClick={() => handleShare(reply.id)}
                      >
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
    
          
            <button
              className="ml-8 text-sm text-gray-500 hover:text-[#6366f1]"
              onClick={() => {
                const replyText = prompt("Enter your reply:");
                if (replyText) {
                  handleReplySubmit(comment.id, replyText);
                }
              }}
            >
              Reply
            </button>
          </div>
        ))}
      </div>
    
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full p-2 border rounded-lg focus:outline-none"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg"
          >
            <IoIosSend />
          </button>
        </div>
      </form>
    </div>
      )}
    </div>
  );
};

export default Post;