import CurrentMessagingUser from "../../component/components/messaging/current_messaging_user";
import MessageList from "../../component/components/messaging/message_list";
import Navbar from "../../component/components/navbar";
 
 

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
         
        <div className="bg-blue-50 h-[100vh] overflow-hidden">
            <Navbar />
            <div className="w-full mx-auto flex mt-2 ">
               
                <MessageList />
            
                {/* Centered Content */}
                <main className="w-3/5 px-2">
                    <div className="p-0 rounded-lg shadow">{children}</div>
                </main>
                
                <div className="w-[25vw]">
                <CurrentMessagingUser/>
                </div>
                
                 
            </div>
        </div>
         
    );
}
