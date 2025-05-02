"use client"
import SignUpComponent from "@/component/components/SignupComponent";
import Link from "next/link";import { FiBookOpen } from "react-icons/fi";
import { LuBook } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import "../../talentia.css"
import SignInComponent from "@/component/components/SignInComponent";
import { ToastContainer } from "react-toastify";


const fcardData = [
  {
    id: 1,
    title: "Share & Grow",
    icon: <FiBookOpen size={40} />,
    description:
      "Turn your talent journey into inspiration – post it, film it, blog it, and ignite minds!",
  },
  {
    id: 2,
    title: "Track Your Wins",
    icon: <LuBook size={40} />,
    description:
      "Your talent story, beautifully tracked – from first lesson to final mastery.",
  },
  {
    id: 3,
    title: "Meet Like-Minded Talents",
    icon: <MdPersonOutline size={40} />,
    description: "Connect, collaborate, and evolve alongside people who share your passion and creative spark.",
  },
];

export default function Login(){ 

  const handleLoginClick = () => {
    window.location.href="/signin";
    // setIsLogin("login");
  };

  const handleRegisterClick = () => {
    window.location.href="/signup";
   // router.push("/signup");
    // setIsLogin("register");
  };
  
  return (
    <>
     <ToastContainer/>
    <div className="login-page">
      <div className="form-container">
        <div className="login-title">
          <Link href="/" className="L-link">
            <div className="icon-hue">
              <img src={"/assets/logo.png"} alt="logo" height={35} width={35} /><span className="L-logo">Talentia</span>
            </div>
          </Link>
          <p>Your Talent journey begins here</p>
        </div>

        <div className="button-container">
          <button
            className={`  login-button1`}
            onClick={handleLoginClick}
          >
            Login
          </button>
          <button
            className={ `register-bbutton active`}
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </div>

        <div className="forms">
           <SignUpComponent/>
        </div>
      </div>
      <div className="fixed-container">
        <div className="ftitle">
          <h1>
            Welcome to <span className="highlight">Talentia</span>{" "}
          </h1>
          <p className="fsubheading">Where Talent Meets Expression</p>
        </div>
        <div className="fcard">
          {fcardData.map((item) => (
            <div key={item.id} className="fcard-item">
              <div className="fcard-icon highlight">{item.icon}</div>
              <div className="fcard-text">
                <h4 className="highlight">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}; 

