import Link from "next/link";

export default function NavbarAlt(){
    return (
      <div className={`nav navbar-sticky`}>
        <div className="nav-container">
          <Link href="/" className="nav-link">
            <div className="nav-logo">
              <div className="logo">
                <img src={"https://content.acetians.in/uploads/logo.png"} height={35} width={35} alt="logo" /><span>Talentia</span></div>
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