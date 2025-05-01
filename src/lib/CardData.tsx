import React from "react";
import { SlBadge } from "react-icons/sl";
import { FaPencil, FaPersonRunning, FaShareFromSquare } from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";

export const cardData = [
  {
    id: 1,
    title: "Talentverse",
    icon: <GrAchievement size={30} strokeWidth={5} />,
    description:
      "Step into the Talentverse — where debates, codes, creations, and performances collide in one vibrant learning space.",
  },
  {
    id: 2,
    title: "Write Your Ideas in Blogs",
    icon: <FaPencil size={30} strokeWidth={5} />,
    description:
      "Let your thoughts speak louder. Publish blogs that educate, ignite minds, and showcase your intellectual spark.",
  },
  {
    id: 3,
    title: "Content Sharing",
    icon: <FaShareFromSquare size={30} strokeWidth={5} />,
    description:
      "Turn your knowledge into influence. Share your skills through reels, posts, blogs, and spark meaningful educational conversations.",
  },
  
  {
    id: 4,
    title: "Flaunt Your Activities",
    icon: <FaPersonRunning size={30} strokeWidth={5} />,
    description:
      "From stage to lab, share every achievement. Competitions, projects, or art — it’s your spotlight moment.",
  },
  {
    id: 5,
    title: "Earn Badges and & Rewards",
    icon: <SlBadge size={30} strokeWidth={5} />,
    description:
      "Be more than a user — be a champion. Collect badges and awards that showcase your growth and grit.",
  },
];


