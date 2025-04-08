"use client";
import { Suspense, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6"; 
import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5"; 
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { FiCopy } from "react-icons/fi";
import moment from "moment";
import { addComment, addLike } from "@/utils/apis/post";
import { useSelector } from "react-redux";
import { CommentType, PostType } from "@/lib/interfaces/types"; 
import ReadMore from "./ReadMore";

const Post = ( {post}:{post:any}) => {
  // alert(JSON.stringify(post))
  const [likeCount, setLikeCount] = useState(post.likes==undefined?0: post.likes.length);
  
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [comments, setComments] = useState<CommentType[]>(post.comments==undefined?[]:post.comments);
  const [commentInput, setCommentInput] = useState("");
  const [isShareOverlayOpen, setIsShareOverlayOpen] = useState(false);
  const appState = useSelector((state:any)=>state.auth);
  const [isLiked, setIsLiked] = useState(appState.user==null?false: post.likes?.includes(appState.user.uid) || false);

  // Handle like button click
  const handleLikeClick = (postId:any) => {
    addLike(postId);
    
    setLikeCount((prev:any) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev:any) => !prev);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentInput.trim() === "") return;

    const newComment: CommentType = {
       
      comment: commentInput,
      user:"122"
    };

    setComments([...comments, newComment]);
    setCommentInput("");
    addComment(post.id.toString(),commentInput)
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
    <div className="bg-white  rounded-lg p-4 space-y-4 mb-2">
      {/* Post Header */} 
       
      <div className="flex items-center space-x-3">
        {/* <DefaultAvatar/> */}
        {/* {JSON.stringify(post.userDetails)} */}
        {post.userDetails==null  ? (<div
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3498db",
            color: "#fff",
            fontSize: 40 * 0.5,
            fontWeight: "bold",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          
          {post.user.name.charAt(0).toUpperCase()}
        </div>):(post.userDetails.profilePhoto==undefined? 
        <div
        style={{
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3498db",
          color: "#fff",
          fontSize: 40 * 0.5,
          fontWeight: "bold",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        {post.user.name.charAt(0).toUpperCase()}
      </div>:
      <Image src={post.userDetails.profilePhoto} 
      width={40} height={40} alt={post.user.name} style={{
        borderRadius: "50%",
        objectFit: "cover",
        cursor: "pointer",
      }} />
        )}

        
        
        {/* <Image
          width={40}
          height={40}
          src={post.user.avatar}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        /> */}
        <div>
          <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
          <p className="text-xs text-gray-500"> 
          {moment(post.createdAt._seconds*1000).fromNow()}
 
            
          </p>
        </div>
      </div>

     
      <ReadMore text={post.text}/>

     
      {post.fileURL!="" && post.fileURL!=null && (
        !post.fileURL.includes(".mp4")  ? (
          <Suspense fallback={<p>Loading</p>}>
            <Image
            width={600}
            height={500} 
             
            src={post.fileURL}
            alt="Post Media"
            className="rounded-lg"
          />
          </Suspense>
          
        ) : (
           <Suspense fallback={<p>Loading</p>}>
            <video
            controls
            className="w-full min-h-[60vh] object-cover rounded-md"
          >
            <source src={post.fileURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>  
          </Suspense>
         
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
          onClick={()=>handleLikeClick(post.id)}
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
        {comments.map((comment,id) => (
          <div key={id} className="mb-4">
            <div className="flex items-center space-x-2">
               
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="text-sm">{comment.comment}</p>
                
              </div>
            </div>
    
         
             
    
          
             
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