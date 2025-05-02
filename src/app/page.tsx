"use client"
import React, { useState } from "react"; 
import CardCarousel from "@/component/components/CardCarousel";
import { cardData } from "@/lib/CardData";
import Image from "next/image";
import "../app/talentia.css"
import Navbar from "@/component/components/navbar";
import Footer from "@/component/Footer";
import NavbarAlt from "@/component/components/NavbarAlt";
import { usePathname } from "next/navigation";
 

export default function  Homepage()  {
  const [hide, setHide] = useState("");
  const location  = usePathname()  
  const isHomepage = location=="/";
  return (
    <>
    <NavbarAlt/>
    <div className="homepage">
    <div className="homepage-container">
      <div className="image-container">
        <img
          src={"/assets/trophyGirl.png"}
          alt="Trophy Girl"  
        />
      </div>
      <div className="text-container">
        <div className="heading">
          <h1 className="h1">
            Make Your Talent <span className="highlight">A Celebration</span>
          </h1>
          <p className="subheading">
          Talentia isn't just a platform — it's your spotlight. Connect with inspiring minds, create boldly, and celebrate every win with a community that believes in your potential. 
          </p>
        </div>
        <div>
          <CardCarousel>
          {cardData.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-icon-container">
            <div className="card-icon">{card.icon}</div>
          </div>
          <div className="card-text-container">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
          </CardCarousel>
        </div>

      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

