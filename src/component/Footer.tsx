import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default  function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links footer-head">
          <Link style={{ textDecoration: "None" }} href="/" className="nav-link">
            <div className="footer-logo">
              Talentia
            </div>
          </Link>
          <p>Where Talent Meets Expression</p>
          <div className="footer-socials">
            <FaXTwitter className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <FaYoutube className="social-icon" />
          </div>
        </div>
        <div className="footer-links footer-labels">
          <h4>PLATFORM</h4>
          <Link style={{ textDecoration: "None" }} href="/">
            <h5>How it Works</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/">
            <h5>Features</h5>
          </Link>
        </div>
        <div className="footer-links footer-labels">
          <h4>RESOURCES</h4>
          <Link style={{ textDecoration: "None" }} href="/">
            <h5 className="footer-routes">Blog</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/community/help">
            <h5>Help Center</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/community/guidelines">
            <h5>Community Guidelines</h5>
          </Link>
          {/* <Link style={{ textDecoration: "None" }} href="/">
            <h5>Success Stories</h5>
          </Link> */}
        </div>
        <div className="footer-links footer-labels">
          <h4>COMPANY</h4>
          <Link style={{ textDecoration: "None" }} href="/community/about-us">
            <h5>About Us</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/community/privacy-policy">
            <h5>Privacy Policy</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/community/cookie-policy">
            <h5>Cookie Policy</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/community/terms-conditions">
            <h5>Terms & Conditions</h5>
          </Link>
          <Link style={{ textDecoration: "None" }} href="/">
            <h5>Contact Us</h5>
          </Link>
        </div>
      </div>
      <div className="horizontal-partition"></div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Talentia. All rights reserved.
      </p>
    </div>
  );
};


