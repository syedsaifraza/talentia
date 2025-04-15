import { GraduationCap } from 'lucide-react';
import "./main.css";
import BannerImg from "./Banner1.png";
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { BookOpen, Trophy, Medal } from "lucide-react";

import { ArrowRight } from "lucide-react";

function Main() {
  return (
    <div>
        <div className="Main-Container">
            <div className="Main-Container-left">
                <div className="Hero-Section">
                    <div className="herosection-img">
                        <Image width={300} height={300} src={BannerImg} alt="Banner Image" className='bannerImage'/>
                    </div>
                    <div className="herosection-Content">
                         
                        <div className="herosection-Content-heading">
                            <span className="white-text">Make Education  <span className="yellow-text">A </span></span>
                            <span className="yellow-text">  Celebration</span>
                        </div>

                        <div className="herosection-Content-details">
                            Talentia is not just a platform it's your stage. Connect, create,and Celebrate with community that values your educational journey
                        </div>
                        <div className="herosection-Content-button">
                            <div className="herosection-Content-button-1st">
                                    Join the community <ArrowRight size={25} style={{ marginLeft: '8px' }} />
                            </div>
                             
                        </div>
                       
                    </div>
                </div>
            
            </div>
        
        </div>
        <div className="last-container">
            <div className="last-container-mid-div">
                <div className="last-container-mid-div-1st">
                    The education communty that celebrates learning and expression
                </div>
                <div className="last-container-mid-div-2nd">
                    <div className="herosection-Content-button-1st">
                        Get Started <ArrowRight size={25} style={{ marginLeft: '8px' }} />
                    </div>
                    <div className="herosection-Content-button-2nd">
                        Learn More
                    </div>
                </div>
                <div className="last-container-mid-div-3rd">
                    Join thousands of educators and learners already on Talentia
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Main;
