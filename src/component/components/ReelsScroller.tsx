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

  const initialReelsData = [
    {
      id: 1,
      user: "Alice Johnson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/video15.mp4",
    },
    {
      id: 7,
      user: "Grace Lee",
      avatar: "https://picsum.photos/20/20?random=2",
      thumbnail: "https://picsum.photos/300/500?random=2",
      video: "https://content.acetians.in/uploads/video4.mp4",
    },
    {
      id: 8,
      user: "Henry Martinez",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/video2.mp4",
    },
    {
      id: 9,
      user: "Ivy Nguyen",
      avatar: "https://picsum.photos/20/20?random=2",
      thumbnail: "https://picsum.photos/300/500?random=2",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0020.mp4",
    },
    {
      id: 10,
      user: "Jack Wilson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
    },
    {
      id: 10,
      user: "Jack Wilson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
    },
    {
      id: 10,
      user: "Jack Wilson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
    },
    {
      id: 10,
      user: "Jack Wilson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
    },
    {
      id: 10,
      user: "Jack Wilson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
    },
    {
      id: 10,
      user: "Jack Wilson",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0021.mp4",
    },
    {
      id: 11,
      user: "Karen Taylor",
      avatar: "https://picsum.photos/20/20?random=1",
      thumbnail: "https://picsum.photos/300/500?random=1",
      video: "https://content.acetians.in/uploads/VID-20250310-WA0023.mp4",
    },
  ];
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
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-95 gap-10" style={{zIndex:5000}}>
            <div>
              <button
                onClick={handlePrevious}
                className="ml-5 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
                disabled={selectedStatus === 0}
              >
                <FaAngleLeft className="text-[25px]" />
              </button>
            </div>

            <div className="flex flex-col flex">
              <div className="flex p-2 w-[350px] absolute gap-2 bg-[#000000ba] items-center">
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

              <div className="w-[350px] h-[550px]">
                 {statusUpdates.status[selectedStatus].fileURL!=null?
                  <div className="flex justify-center items-center p-5" style={{  minHeight:'80vh',width:'500px' }}>
                  <span className="text-white"></span>
                  
                  <Image
                    width={300}
                    height={500}
                    src={statusUpdates.status[selectedStatus].fileURL}
                    alt={statusUpdates.status[selectedStatus].text}
                    className="w-full h-full object-cover"
                  />
                  </div>:
                  <div className="flex justify-center items-center p-5" style={{ background: "#f87171",minHeight:'80vh',width:'500px' }}>
                    
                    <div className="text-white text-lg">{statusUpdates.status[selectedStatus].text}  </div>
                    </div>}
                
              </div>
            </div>

            <div>
              <button
                onClick={handleNext}
                className="mr-5 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
                disabled={selectedStatus === initialReelsData.length - 1}
              >
                <FaAngleRight className="text-[25px]" />
              </button>
              <button
                onClick={closeOverlay}
                className="absolute top-4 right-4 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
              >
                <IoClose className="text-[30px]" />
              </button>
            </div>
          </div>
        )}
    {openStatusAdd===true &&
      <div className="w-screen h-screen fixed top-0 left-0 w-full h-full bg-white" style={{zIndex:200}}>
        <PostCustomizer closeStatusBox={()=>setOpenStatusAdd(false)} />
      </div>  
    }
    <div className="bg-white p-2 m-2 rounded-lg relative select-none">
 
    <ul className="w-full flex justify-between items-center hover:bg-green-400  transition duration-300 bg-indigo " style={{}}>
       <li className="hover:cursor-pointer hover:text-indigo-900"><BiChevronLeft onClick={() => scrollToRight()} className="bg-opacity-10" size={40} /></li>
       <li className="font-semibold">
        Status
       </li>
       <li className="hover:cursor-pointer hover:text-indigo-900"> <BiChevronRight onClick={() => scrollToLeft()} className="bg-white" size={40} /> </li>
       </ul>
       <ul className="flex" ref={arrayName} style={{overflow:'scroll',height:'100px'}}>
       <li key={23111} className="text-indigo-500 px-2 ">
          <div className="bg-gray-200 rounded-full  border-2 border-green-500 hover:cursor-pointer">
            <FaPlus size={68} color="green" onClick={()=>setOpenStatusAdd(true)}/>
          </div>
        </li>
        {statusUpdates.status.map((stat:any,i:number)=><li key={i} onClick={()=>setSelectedStatus(i)} className="text-indigo-500 px-2">
          
          {stat.userDetails.profilePhoto==undefined?<NameAvatar name={stat.userDetails.name} size={70}/>:
          <Image src={stat.userDetails.profilePhoto}
          width={100}
          height={100}
          alt={stat.text}
          className="rounded-full inset border-4 border-green-500"
          style={{minWidth:'70px',width:'70px',height:'70px'}}
          /> 
}
        </li>)}
       </ul>
       
       
       
       
 
    </div>
    </>
  );
}


