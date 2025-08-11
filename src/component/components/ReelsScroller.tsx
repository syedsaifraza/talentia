"use client";
import Image from "next/image";
import { useRef, useState } from "react"; 
import { BiChevronLeft , BiChevronRight } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight, FaPlusCircle, FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import PostCustomizer from "./PostCustomiser";
import NameAvatar from "./nameAvatar";
import { IoClose } from "react-icons/io5";
import moment from "moment";

export default function ReelsScroller({ limit, size }: { limit: number; size: string }) {
  const [selectedStatus, setSelectedStatus] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const arrayName = useRef<HTMLUListElement>(null);
  const statusUpdates= useSelector((state:any)=>state.status)
  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({ left: direction === "left" ? -200 : 200, behavior: "smooth" });
    }
  };
  const scrollToLeft = () => {
    const { current } = arrayName;
    if (current) {
      current.scrollBy({ left:200 , behavior: "smooth" });
    }
  };
   
  const scrollToRight = () => {
    const { current } = arrayName;
    if (current) {
      current.scrollBy({ left:-100 , behavior: "smooth" });
    }
  };

  
  const [openStatusAdd,setOpenStatusAdd]=useState(false);
    const handleNext = () => {
    if (selectedStatus !== null && selectedStatus < statusUpdates.status.length - 1) {
      setSelectedStatus(selectedStatus + 1);
    }
  };

    const closeOverlay = () => {
    setSelectedStatus(null);
  };
  const handlePrevious = () => {
    if (selectedStatus !== null && selectedStatus > 0) {
      setSelectedStatus(selectedStatus - 1);
    }


   
  };



  return (
    <>
    {selectedStatus !== null && (
        <div 
  id="default-sidebar" 
  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 gap-4 md:gap-10 overflow-hidden z-50"
>
  {/* Navigation Arrows */}
  <div className="z-50">
    <button
      onClick={handlePrevious}
      className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
      disabled={selectedStatus === 0}
    >
      <FaAngleLeft size={28} color="white" />
    </button>
  </div>

  {/* Main Content Container */}
  <div className="relative flex flex-col items-center w-full max-w-2xl h-[90vh] mx-4">
    {/* User Header */}
    <div className="flex items-center w-full p-4 bg-[#000000ba]">
      <div className="w-10 h-10 border-2 border-blue-500 rounded-full overflow-hidden">
        <Image
          width={40}
          height={40}
          src={statusUpdates.status[selectedStatus].userDetails.profilePhoto}
          alt={statusUpdates.status[selectedStatus].userDetails.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-3">
        <h3 className="text-white text-md font-semibold">
          {statusUpdates.status[selectedStatus].userDetails.name}
        </h3>
        <p className="text-xs text-gray-300">
          {moment(statusUpdates.status[selectedStatus].createdAt._seconds*1000).fromNow()}
        </p>
      </div>
    </div>

    {/* Media Container - Keeping your original background handling */}
    <div className="w-full h-full flex justify-center">
      {statusUpdates.status[selectedStatus].fileURL ? (
        <div className="flex justify-center items-center" style={{ minHeight: '80vh', width: '500px' }}>
          {statusUpdates.status[selectedStatus].fileURL.endsWith(".mp4") ? (
            <video 
              controls 
              src={statusUpdates.status[selectedStatus].fileURL} 
              autoPlay={true}
              className="h-full max-h-[80vh] object-contain"
            />
          ) : (
            <Image
              width={300}
              height={500}
              src={statusUpdates.status[selectedStatus].fileURL}
              alt={statusUpdates.status[selectedStatus].text}
              className="h-full max-h-[80vh] object-contain"
            />
          )}
        </div>
      ) : (
        <div 
          className="flex justify-center items-center w-full h-full" 
          style={{ background: "#f87171", height: '90vh', width: '400px' }}
        >
          <div className="text-white text-lg p-4 text-center">
            {statusUpdates.status[selectedStatus].text}
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Navigation and Close Button */}
  <div className="z-50 flex flex-col items-center gap-4">
    <button
      onClick={handleNext}
      className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
    >
      <FaAngleRight size={28} color="white"/>
    </button>
    <button
      onClick={closeOverlay}
      className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
    >
      <IoClose size={24} color="white" />
    </button>
  </div>
</div>
        )}
    {openStatusAdd===true &&
      <div className=" fixed top-0 left-0 w-full h-full bg-white" style={{zIndex:200}}>
        <PostCustomizer closeStatusBox={()=>setOpenStatusAdd(false)} />
      </div>  
    }
    <div className="bg-white p-4 flex flex-col gap-5 rounded-[5px] relative select-none">
 
    <ul className="w-full flex justify-between items-center" >
       <li className="hover:cursor-pointer flex justify-start items-start hover:text-indigo-900 hover:bg-gray-300"><BiChevronLeft onClick={() => scrollToRight()} className="bg-opacity-10" size={40} /></li>
       <li className="font-semibold">
        Status
       </li>
       <li className="hover:cursor-pointer hover:text-indigo-900"> <BiChevronRight onClick={() => scrollToLeft()} className="bg-white" size={40} /> </li>
    </ul>




    <ul className="flex border-1 border-black" 
        ref=  {arrayName} style={{overflow:'scroll',scrollbarWidth:"none",height:'100px'}}>
          <li key={23111} className="text-indigo-500 px-2 ">
                <div className="bg-gray-200 rounded-full 
                 border-2 border-green-500 hover:cursor-pointer">
                  <FaPlus size={68} color="green" onClick={()=>setOpenStatusAdd(true)}/>
                </div>
           </li>
              {statusUpdates.status.map((stat:any,i:number)=><li key={i} onClick={()=>setSelectedStatus(i)} className="text-indigo-500 px-2">
                
                {stat.userDetails.profilePhoto==undefined?<NameAvatar name={stat.userDetails.name} size={70}/>:
                  <Image src={stat.userDetails.profilePhoto}
                  width={100}
                  height={100}
                  alt={stat.text}
                  className="rounded-full inset border-2 border-green-500"
                  style={{minWidth:'70px',width:'70px',height:'70px'}}
                  /> 
                }
        </li>)}
    </ul>
       
       
       
       
 
    </div>
    </>
  );
}


