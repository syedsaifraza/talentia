import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import DefaultAvatar from "./defaultAvatar";
import Image from "next/image";
import MainPostCard from "./MainPostCard";
import { useState } from "react";
import FeelingActivitySelectionCard from "./FeelingActivitySelectionCard";
import { Feelings } from "@/lib/interfaces/types";

export default function PostAllInOne({close,postModal}:{close:Function,postModal:boolean}){
    
    const [feelingBoxOpen,setFeelingBoxOpen]=useState(false);
    const [postText, setPostText] = useState("");
    const [currentType, setCurrentType] = useState<string>("feelings");
   
    const [currentFeeling,setCurrentFeeling]= useState<Feelings>();
    const [activityInput,setActivityInput]=useState();
    const appState= useSelector((state:any)=>state.auth.userInfo);
    const postPrivacy = ["Everyone","Followers","Followings","Only Me"];
    const postTypes =["image.gif","video.gif","feeling.gif"];
    
    return (<div className={`bg-white top-0 w-screen  h-screen fixed top-0 left-0 w-full transition 300  bg-opacity-50 transition-all duration-300 ease-in-out ${postModal==true?'opacity-100' : 'opacity-0 pointer-events-none'}  flex flex-col items-center justify-center shadow-md rounded-lg border-2 border-gray-900`} style={{zIndex:200}}>
      {feelingBoxOpen!=true &&
     <MainPostCard actInput={activityInput||""} setactInput={setActivityInput} postText={postText} setPostText={setPostText} currentFeeling={currentFeeling}  clickFeelings={()=>setFeelingBoxOpen(true)} postPrivacy={postPrivacy} postTypes={postTypes} name={appState.name} close={()=>close()}  currentType={currentType} /> }
       {feelingBoxOpen==true ? <FeelingActivitySelectionCard actInput={activityInput} setactInput={setActivityInput} currentType={currentType} setCurrentType={setCurrentType} setFeeling={setCurrentFeeling} currentFeeling={currentFeeling} goBack={()=>setFeelingBoxOpen(false)}/>:""}

              </div>);
}