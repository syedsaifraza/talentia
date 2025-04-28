"use client"

import React from "react"; 
import Link from "next/link";
 
import "../styles/Navbar.css";
import Image from "next/image";

const NavbarWebsite = () => {
  return (
    <div className={"navbar navbar-fixed"}>
      <div className="nav-container">
        <Link href="/" className="nav-link">
          <div className="nav-logo">
            <div className="logo">
              <Image src={"/assets/logo.png"} height={35} width={35} alt="logo" /><span>Talentia</span></div>
          </div>
         

        </Link>
        <div className="nav-links">
           
            <Link href="/signin" className="nav-link">Sign In</Link>
          
           
            <Link href="/signup" className="nav-link">Sign Up</Link>
          
        </div>
      </div>
    </div>
  );
};

export default NavbarWebsite;