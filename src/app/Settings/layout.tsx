import Navbar from "../../component/components/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="w-full mx-auto flex">
        <main className="w-4/5 m-auto px-2">
          <div className="p-0 shadow">{children}</div>
        </main>
      </div>
    </div>
  );
}
