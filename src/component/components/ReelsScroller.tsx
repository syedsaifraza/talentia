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
          <div id="default-sidebar"   className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 gap-10 overflow-hidden" >
            <div>
              <button
                onClick={handlePrevious}
                 className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
                disabled={selectedStatus === 0}
              >
                <FaAngleLeft size={28} color="white" />
              </button>
            </div>

            <div className="flex flex-col">
              <div className="flex p-2 w-[300px] absolute gap-2 bg-[#000000ba] items-center">
                <div className="w-12 h-12 border-2 border-blue-500 rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={statusUpdates.status[selectedStatus].userDetails.profilePhoto}
                    alt={statusUpdates.status[selectedStatus].userDetails.name}
                    className="w-full h-full rounded-full"
                  />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {statusUpdates.status[selectedStatus].userDetails.name}
                  </h3>
                  <p className="text-xs text-white">{moment(statusUpdates.status[selectedStatus].createdAt._seconds*1000).fromNow()}</p>
                </div>
              </div>

              <div className="w-[400px] h-full flex justify-center border-1 border-white">
                 {statusUpdates.status[selectedStatus].fileURL!=null?
                  <div className="flex justify-center items-center p-5" style={{  minHeight:'80vh',width:'500px' }}>
                  <span className="text-white"></span>
                  {statusUpdates.status[selectedStatus].fileURL.endsWith(".mp4")?<video controls src={statusUpdates.status[selectedStatus].fileURL} autoPlay={true}/>:
                  <Image
                    width={300}
                    height={500}
                    src={statusUpdates.status[selectedStatus].fileURL}
                    alt={statusUpdates.status[selectedStatus].text}
                    className="w-full h-full object-cover"
                  />}
                  </div>:
                  <div className="flex justify-center items-center p-5" style={{ background: "#f87171",height:'90vh',width:'400px' }}>
                    
                    <div className="text-white text-lg">{statusUpdates.status[selectedStatus].text}  </div>
                    </div>}
                
              </div>
            </div>

            <div>
              <button
                onClick={handleNext}
               className="bg-white/20 hover:bg-white/30 p-2 rounded-full text-white"
                // disabled={selectedStatus === initialReelsData.length - 1}
              >
                <FaAngleRight size={28} color="white"/>
              </button>
              <button
                onClick={closeOverlay}
                className="absolute top-4 left-4 bg-white bg-opacity-50 rounded-full bg-white/20 hover:bg-white/30 p-2  hover:bg-opacity-75 z-50"
              >
                <IoClose className="text-[30px]" color="white" />
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


