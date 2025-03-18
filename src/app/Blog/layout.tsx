
import Navbar from "../home/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f2f4f7] h-screen overflow-scroll">
      <Navbar />
      <div className="w-full mx-auto flex justify-around py-1">
    

        {/* Centered Content */}
        <main className="w-full lg:w-3/4 mt-4 px-3">
          <div className="">{children}</div>
        </main>
      </div>
    </div>
  );
}
