'use client'
import { useState } from "react";
import LeaderBoard from "../components/achievements/leaderboard";
import WelcomeAchievements from "../components/WelcomeAchievements";
import { Challenges } from "../components/achievements/challenges";

export default function Achievements() {
    const [currentPage,setCurrentPage] = useState<number>(1)

    return <div className="bg-white rounded-xl p-2">
        <WelcomeAchievements/>
        <ul className="flex flex-row">
            <li className={`w-1/2 text-center p-2 ${currentPage==1?'bg-[#000] text-white':''} rounder-xl    hover:cursor-pointer`} onClick={()=>setCurrentPage(1)} >Leader Board</li>
            <li className={`w-1/2 text-center p-2 ${currentPage==2?'bg-[#000] text-white':''}  hover:cursor-pointer`} onClick={()=>setCurrentPage(2)}>My Challenges</li>
        </ul>
        {currentPage==1 && <LeaderBoard/>}
        {currentPage == 2 &&  <Challenges /> }
         
    </div>
        ;
}