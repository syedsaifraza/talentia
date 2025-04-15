import { GraduationCap } from 'lucide-react';
import "./Topbar.css";
import Link from 'next/link';

function Topbar() {
  return (
    <div className="Topnavbar">
      <div className="TopNavbar-left">
        <div className="TopNavbar-item-1st">
          <GraduationCap size={28}  className="Topbar-left-icon"/><div className="Topbar-left-text">Talentia</div>
        </div>
        
      </div>
      <div className="TopNavbar-Right"><div className="authonticationbutton">
        <div className="authonticationbutton-signin">
          <Link href="/login"> Signin</Link>
        </div>
        <div className="authonticationbutton-signup">
        <Link href="/register"> Signup</Link>
        </div>
        </div></div>
    </div>
  );
}

export default Topbar;
