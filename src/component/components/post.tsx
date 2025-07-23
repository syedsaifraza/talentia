"use client";
import { Suspense, useRef,useEffect, useState } from "react";
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
import { CommentType, Feelings, PostType } from "@/lib/interfaces/types"; 
import ReadMore from "./ReadMore";
import NameAvatar from "./nameAvatar";
import PostSkelatal from "../skelatal/PostSkelatal";
import { handlePostRevalidation } from "./postRevalidation";
import TalentsView from "./TalentsView";
import Link from "next/link";
import { MoreVertical } from "lucide-react";
import EditDeleteModal from "./EditDeleteModal";
 
 

const Post = ( {post,ogImageLoader}:{post:any,ogImageLoader:React.ReactNode}) => { 

  const [likeCount, setLikeCount] = useState(post.likes==undefined?0: post.likes.length);

  const [moreView,setMoreView]=useState(false);
  const [setDeleteModal,deleteModal]=useState(false);
  
  const [isCommentSectionOpen, setIsCommentSectionOpen] = useState(false);
  const [comments, setComments] = useState<CommentType[]>(post.comments==undefined?[]:post.comments);
  const [commentInput, setCommentInput] = useState("");
  const [isShareOverlayOpen, setIsShareOverlayOpen] = useState(false);
  const appState = useSelector((state:any)=>state.auth);
  
  const [isLiked, setIsLiked] = useState(appState.user==null?false: post.likes?.includes(appState.user.uid) || false);
  const [isLikeds, setIsLikeds] = useState(appState.user==null?"null": JSON.stringify(post.likes?.includes(appState.user.uid)) || "false last");
  
  const getFeelingType=(feelingType:string,feelingInfo:Feelings)=>{

    const fline=(feelingType && feelingInfo!=null) ? feelingType=="feelings"?"is feeling ":"is ":"";
     
    const ftext = feelingInfo !=null ?feelingInfo.text: "";
    const femoji =feelingInfo !=null ?feelingInfo.emoji: "";
    return fline + " " +ftext +" "+femoji;
  }

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
    handlePostRevalidation() 
    
  };

  

  // Handle share button click
  const handleShareClick = () => {
    setIsShareOverlayOpen(true);
  };

  const extractFirstURL = (text: string): string | null => {
  const match = text.match(/https?:\/\/[^\s"'<>()]+/);
  return match ? match[0] : null;
  };

  // Close share overlay
  const closeShareOverlay = () => {
    setIsShareOverlayOpen(false);
  };
  if(appState.user==null){
    return <PostSkelatal key={Math.random()*1000}/>
  }
  return (
    <>
    <div className="bg-white box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;  rounded-[5px] p-4 space-y-4 mb-2">
      {/* Post Header */} 
        
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
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
           
        </div>):((post.userDetails.profilePhoto==undefined && post.userDetails.logoURL==undefined)? 
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
      <Image src={post.userDetails.profilePhoto||post.userDetails.logoURL} 
      width={40} height={40} alt={post.user.name} style={{
        borderRadius: "50%",
        objectFit: "cover",
        cursor: "pointer",
      }} />
        )}

        
         

        

        <div>
          
          <h3 className="font-semibold text-gray-800">  
            <Link href={`account/${post.user.uid||post.user.instituteId}`}> {post.user.name}</Link>
            
            <span className="font-normal px-2">{post.activityOrFeeling != null ? getFeelingType(post.activityOrFeeling,post.currentFeeling)+" "+post.activityInfo : ""}</span>
          </h3>
          <p className="text-xs text-gray-500"> 
          {moment(post.createdAt._seconds*1000).fromNow()}
 
            
          </p>
        </div>
      </div>
       
    
      {post.isSelfPost==true &&  <div className="relative"><span onClick={()=>setMoreView(!moreView)} className="hover:cursor-pointer"> <MoreVertical  /></span>  

      {moreView==true &&
      <div className="absolute right-0 mt-3   bg-white shadow-md rounded-md py-2" style={{zIndex:1000}}>
                          <div className="p-2">
                            <ul style={{width:'100px',fontSize:'12px'}}> 
                            <li className="hover:cursor-pointer">
                              <EditDeleteModal id={post.id}/>
                            </li>
                            <li className="hover:cursor-pointer">Change Privacy</li>
                            </ul>
                          </div>
                           
                        </div>

      }
      </div> }
      </div>
      {
      extractFirstURL(post.text)!=post.text &&  
        <>
       {post.text.length>100?<ReadMore text={post.text}/>:<p>{post.text}</p>}    
        </>
      }
      {ogImageLoader}
     
     
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

      
      <div className="flex justify-between items-center pb-4 border-b ">
        <span 
        className="text-sm text-gray-500 hover:text-[#6366f1]    cursor-pointer">

        {likeCount} likes
      
        </span>
 
        <div className="flex gap-3">
          <span className="text-sm text-gray-500 hover:text-[#6366f1] cursor-pointer">
            {post.userComments.length} comments
          </span>
          <span className="text-sm text-gray-500 hover:text-[#6366f1] cursor-pointer">
            Share
          </span>
        </div>
      </div>
    
      
      <div
       className="flex justify-between text-gray-600 text-sm">
        <button
          className="flex items-center gap-1 rounded-md justify-start space-x-1 hover:bg-gray-100 p-2 "
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
          className="flex items-center rounded-md gap-1 justify-center space-x-1 hover:bg-gray-100 p-2 "
          onClick={() => setIsCommentSectionOpen((prev) => !prev)}
        >
          <FiMessageSquare className="text-[21px]" />
          <span>Comment</span>
        </button>
        <button
          className="flex items-center gap-1 rounded-md justify-start space-x-1 hover:bg-gray-100 p-2 "
          onClick={handleShareClick}
        >
          <IoIosShareAlt className="text-[21px] text-[#6366f1]" />
          <span className="text-[15px] font-[600] text-[#6366f1]">Share</span>
        </button>
      </div>


      {isShareOverlayOpen && (
        // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        //   <div className="bg-white p-4 rounded-lg  max-w-md">
        //     <div className="flex justify-between items-center mb-5">
        //       <h2 className="text-lg">Share</h2>
        //       <button
        //         className="flex justify-center items-center rounded-[50%] p-2 bg-gray-200"
        //         onClick={closeShareOverlay}
        //       >
        //         <IoClose className="text-[22px] text-black" />
        //       </button>
        //     </div>

        //     <div className="flex flex-row justify-between gap-3">
        //       <button
        //         className="flex items-center justify-center bg-gray-700 rounded-full p-[10px] border-2"
        //         onClick={() => {
        //           navigator.clipboard.writeText(window.location.href);
        //           alert("Link copied to clipboard!");
        //         }}
        //       >
        //         <FiCopy className="text-[30px] text-white" />
        //       </button>
        //       <button className="flex items-center justify-center bg-green-500 rounded-full p-[10px] border-2">
        //         <FaWhatsapp className="text-[30px] text-white" />
        //       </button>
        //       <button className="flex items-center justify-center bg-[#1877F2] rounded-full p-[10px] border-2">
        //         <FaFacebookF className="text-[30px] text-white" />
        //       </button>
        //       <button className="flex items-center justify-center bg-black rounded-full p-[10px] border-2">
        //         <FaXTwitter className="text-[30px] text-white" />
        //       </button>
        //       <button className="flex items-center justify-center bg-[#0077b5] rounded-full p-[10px] border-2">
        //         <FaLinkedinIn className="text-[30px] text-white" />
        //       </button>
        //       <button className="flex items-center justify-center bg-[#bd081c] rounded-full p-[10px] border-2">
        //         <IoMail className="text-[30px] text-white" />
        //       </button>
        //     </div>
        //   </div>
        // </div>
          <div className="fixed inset-0 z-50 mt-0 flex items-center justify-center bg-black bg-opacity-50">
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
        {post.userComments.map((comment:any,idc:number) => (
          <div key={idc} className="mb-4">
            <div className="flex items-center space-x-2">
              {comment.userDetails.profilePhoto==undefined || comment.userDetails==null ?<NameAvatar key={18029012} name={comment.userDetails.name} size={30} />:<Image className="rounded-full" width={30} height={30} alt="saif" src={comment.userDetails.profilePhoto||comment.userDetails.logoURL}/>}
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="font-bold text-sm">{comment.userDetails.name}</p>
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
     
 </> 
 );
};

export default Post;