
import Navbar from "../../component/components/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f2f4f7] h-screen overflow-scroll">
      <Navbar />
      <div className="w-full">
        {/* Centered Content */}
        <main className="">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
