"use client"
import { useSelector } from "react-redux";
import ReelCardSkeletal from "../skelatal/ReelCardSkletal";
import NameAvatar from "./nameAvatar";
import Image from "next/image";
import Link from "next/link";

export default function TalentsView (){
    const reelsState= useSelector((state:any)=>state.reels.reels);
    return (
    <div className=" flex flex-col gap-4 bg-white  mt-2 mb-2 rounded-[5px] p-4">
        <ul className="flex justify-between">
            <li>
                <h4 className="font-semibold" onClick={()=>{
                    console.log("Talents View Clicked",reelsState);
                }}>Talents View</h4>
            </li>
            <li className="text-sm">
                <Link href="/reels" className="hover:text-purple">View all</Link>
            </li>
        </ul>
        <ul className="flex flex-row gap-4  rounded-lg" style={{height:'200px',overflowX:'scroll'}}>
             
        {reelsState.slice(0,7).map((rState:any,idx:number)=>

        <li className="bg-gray-400 rounded-lg" key={idx}>
            <Link href={`/reels?reel=${idx}`} >
            <div onClick={()=>{
                console.log("Reel Clicked",rState.userDetails.profilePhoto);
            }} className=" rounded-lg h-full w-[55px] relative">
               <Image  alt={rState.id} src={rState.thumbnail} width="130" height="100" className="rounded-lg h-full object-cover" style={{maxWidth:'120px',height:'200px'}}  />
               <div className="absolute bottom-0 p-2">
                {rState.userDetails.profilePhoto==null?<NameAvatar name={rState.user.name} size={30}/>: <Image src={rState.userDetails.profilePhoto} alt="M" height={90} width={90} className="rounded-full" style={{height:'30px',width:'30px'}} /> }
               </div>
            </div>
            </Link>
        </li>
        )}
        </ul>
    </div>
    );

}