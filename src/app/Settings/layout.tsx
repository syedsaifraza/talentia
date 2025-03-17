import CurrentMessagingUser from "../home/components/messaging/current_messaging_user";
import MessageList from "../home/components/messaging/message_list";
import Navbar from "../home/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-blue-50 h-screen">
      <Navbar />
      <div className="w-full mx-auto flex ">
        <main className="w-3/5 px-2">
          <div className="p-0 rounded-lg shadow">{children}</div>
        </main>
      </div>
    </div>
  );
}
