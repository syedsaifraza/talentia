import Link from "next/link";
import AppLogo from "../../assets/AppLogo.png"
import Image from "next/image";

export default function NavbarAlt(){
    return (
      <div className={`nav navbar-sticky`}>
        <div className="nav-container">
          <Link href="/" className="nav-link">
            <div className="nav-logo">
              <div className="logo">
                <Image src={AppLogo} height={35} width={35} alt="logo" /><span>Talentia</span></div>
            </div>
          </Link>
          <div className="nav-links">
            <button className="b1" >
              <Link href="/signin" className="nav-link">Sign In</Link>
            </button>
            <button className="button2" >
              <Link href="/signup" className="nav-link">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };