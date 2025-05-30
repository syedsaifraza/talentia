import CurrentMessagingUser from "../../component/components/messaging/current_messaging_user";
import MessageList from "../../component/components/messaging/message_list";
import Navbar from "../../component/components/navbar";
 
 

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
         
        <div className="bg-blue-50 h-screen">
            <Navbar />
            <div className="w-full mx-auto flex ">
               
                <MessageList />
                
                {/* Centered Content */}
                <main className="w-3/5 px-2">
                    <div className="p-0 rounded-lg shadow">{children}</div>
                </main>
                
                <div className="w-1/5">
                <CurrentMessagingUser/>
                </div>
                
                 
            </div>
        </div>
         
    );
}
