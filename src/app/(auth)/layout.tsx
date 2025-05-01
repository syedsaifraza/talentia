import { CiBoxes, CiGrid2H, CiShare1, CiHeart, CiBellOn, CiChat1, CiSettings } from "react-icons/ci";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex">

      {/* Left Side - Random Icons + Gradient Background */}
      <div className="w-full md:w-1/2 relative bg-gradient-to-br from-purple-200 via-purple-100 to-purple-300 flex items-center justify-center px-1 py-16 overflow-hidden">
        
        {/* Floating CI Icons */}
        <CiBoxes className="absolute top-10 left-10 text-purple-700 text-4xl animate-bounce-slow opacity-30" />
        <CiGrid2H className="absolute top-20 right-12 text-purple-600 text-3xl animate-float-medium opacity-30" />
        <CiShare1 className="absolute bottom-20 left-14 text-purple-800 text-5xl animate-float-fast opacity-30" />
        <CiHeart className="absolute top-1/3 left-1/2 text-purple-500 text-6xl animate-float-slow opacity-20" />
        <CiBellOn className="absolute bottom-10 right-16 text-purple-600 text-4xl animate-bounce-slow opacity-25" />
        <CiChat1 className="absolute bottom-1/2 right-1/3 text-purple-700 text-5xl animate-float-medium opacity-20" />
        <CiSettings className="absolute top-1/4 right-1/4 text-purple-700 text-4xl animate-float-slow opacity-25" />
        
        {/* Children Content (Login Form etc.) */}
        <div className="relative z-10 w-[500px]">
  {children}
</div>

      </div>

      {/* Right Side - 3D Icons & Welcome Text */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden items-center justify-center text-white">
        {/* Animated Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8e2de2] via-[#4a00e0] to-[#1f1c2c] animate-gradient-x opacity-90"></div>

        {/* Floating 3D Icons */}
        <img src="https://content.acetians.in/uploads/3dicons-rocket-front-color.png" className="absolute w-24 top-8 left-12 animate-float-slow opacity-80" alt="rocket" />
        <img src="https://content.acetians.in/uploads/3d-icon.png" className="absolute w-20 bottom-20 right-16 animate-float-fast opacity-70" alt="social" />
        <img src="https://content.acetians.in/uploads/3dicons-headphone-front-color.png" className="absolute w-28 top-24 right-24 animate-float-medium opacity-80" alt="headphones" />
        <img src="https://content.acetians.in/uploads/3dicons-thumb-up-front-color.png" className="absolute w-20 bottom-12 left-20 animate-float-slow opacity-75" alt="thumb-up" />

        {/* Text Content */}
        <div className="relative z-10 max-w-lg px-10 py-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Talentia</h2>
          <p className="mb-6 text-lg font-light">Where Talent Meets Expression</p>
          <ul className="space-y-5 text-base">
            <li>
              <strong><CiShare1 color="#fff" style={{ display: 'inline' }} size={30} /> Share & Grow</strong><br />
              Turn your talent into inspiration — blog it, post it, ignite minds!
            </li>
            <li>
              <strong><CiBoxes color="#fff" style={{ display: 'inline' }} size={30} /> Track Your Wins</strong><br />
              Monitor your progress from first lesson to final mastery.
            </li>
            <li>
              <strong><CiGrid2H color="#fff" style={{ display: 'inline' }} size={30} /> Meet Talents</strong><br />
              Collaborate with like-minded creatives and grow together.
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}
