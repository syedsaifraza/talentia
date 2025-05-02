"use client"
import { useSelector } from "react-redux";
import ReelCardSkeletal from "../skelatal/ReelCardSkletal";
import NameAvatar from "./nameAvatar";
import Image from "next/image";
import Link from "next/link";

export default function TalentsView (){
    const reelsState= useSelector((state:any)=>state.reels.reels);
    return (
    <div className="h-[250px] bg-white mt-2 mb-2 rounded-lg p-2">
        <ul className="flex justify-between">
            <li>
                <h4 className="font-semibold">Talents View</h4>
            </li>
            <li className="text-sm">
                <Link href="/reels/all" className="hover:text-purple">View all</Link>
            </li>
        </ul>
        <ul className="flex" style={{height:'200px',overflowX:'scroll'}}>
             
        {reelsState.slice(0,4).map((rState:any,idx:number)=>
        <li className="px-1" key={idx}>
            <Link href="/reels/all">
            <div className="bg-gray-200 rounded-lg h-full w-[55px] relative">
               <video src={rState.fileURL} className="rounded-lg h-full object-cover" style={{maxWidth:'120px',height:'200px'}}  />
               <div className="absolute bottom-0 p-2">
                {reelsState.userDetails==null?<NameAvatar name={"User"} size={30}/>: <Image src={reelsState.userDetails.profilePhoto} alt="M" height={100} width={100} className="rounded-full" style={{height:'40px',width:'40px'}} /> }
                  
                 {}
               </div>
            </div>
            </Link>
        </li>
        )}
        </ul>
    </div>
    );

}