import { GraduationCap } from 'lucide-react';
import "./main.css";
import BannerImg from "./Banner1.png";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { BookOpen, Trophy, Medal } from "lucide-react";

import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <div>
        <div className="Footer-Section">
            <div className="Footer-section-content">
                <div className="Footer-section-content-item">
                    <div className="Footer-section-content-item-heading">
                        <GraduationCap size={28}  className="Footer-left-icon"/><div className="Topbar-left-text">Talentia</div>
                    </div>
                    
                    <div className="Footer-section-content-item-Icon">
                    <Facebook className="social-icon" />
                    <Instagram className="social-icon" />
                    <Twitter className="social-icon" />
                    <Linkedin className="social-icon" />
                    <Youtube className="social-icon" />
                    </div>
                </div>
                <div className="Footer-section-content-item">
                    <div className="Footer-section-content-item-row-heading"> PLATFORM</div>
                    <div className="Footer-section-content-item-row-text">How it works</div>
                    <div className="Footer-section-content-item-row-text">Features</div>
                    <div className="Footer-section-content-item-row-text">Pricing</div>
                </div>
                <div className="Footer-section-content-item">
                    <div className="Footer-section-content-item-row-heading">Resources </div>
                    <div className="Footer-section-content-item-row-text">Blog</div>
                    <div className="Footer-section-content-item-row-text">Help Center</div>
                    <div className="Footer-section-content-item-row-text">Community Guidelines</div>
                    <div className="Footer-section-content-item-row-text">Success Stories</div>
                </div>
                <div className="Footer-section-content-item">
                    <div className="Footer-section-content-item-row-heading">COMPANY</div>
                    <div className="Footer-section-content-item-row-text">About Us</div>
                    <div className="Footer-section-content-item-row-text">Careers</div>
                    <div className="Footer-section-content-item-row-text">Privacy</div>
                    <div className="Footer-section-content-item-row-text">Terms</div>
                
                </div>
            </div>
            <div className="copyRight">©2025 Acetians Technologies Pvt Ltd</div>
        </div>
    </div>
  );
}

export default Footer;
