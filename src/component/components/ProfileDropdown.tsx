import { useDispatch, useSelector } from "react-redux";
import ActionTile from "./ActionTile";
import UserAccountTile from "./UserAccountTile";
import { logout } from "@/store/slices/authSlices";
import router from "next/router";
import Cookies from "js-cookie";

export default function ProfileDropdown(){
  const instituteState = useSelector((state:any)=>state.institute);
  const userState = useSelector((state:any) => state.auth.userInfo);
  const accounts = useSelector((state:any) => state.auth.associatedAccounts);

  const dispatch = useDispatch();
const handleLogout = () => {
    
    // Clear session (e.g., remove token from localStorage)
    localStorage.removeItem("token");
    Cookies.remove("token")
    dispatch(logout());
    window.location.reload()
  };
    return (<div className="p-2 w-[300px]">
     <div className="shadow-lg rounded-lg my-2 p-2">
      
       <UserAccountTile docId={""} key={10929010}  avatar={userState.profilePhoto||userState.logoURL} name={userState.name} currentAcc={true} />
       <span className="m-3" >
       <hr className="border-1 border-gray-400 "/>
       </span> 
       {accounts.length>0 && (<>
        {accounts.filter((a:any)=>a.status!="active").map((ins:any,index:number)=><UserAccountTile docId={ins.uid} key={ins.id || ins._id || index}  avatar={ins.avatar} name={ins.name} currentAcc={false}/>)}
        </>)}
       <hr className="border-1 border-gray-400 mb-1"/>
       {accounts.filter((a:any)=>a.status!="active").length>2 &&
       <button className="p-2 bg-gray-200 w-full rounded-md text-gray-700 mt-1">
        See all Profiles ({accounts.filter((a:any)=>a.status!="active").length})
       </button> 
        }
     </div>
     <div className="p-2">
        <ActionTile name="System Settings" />

        <ActionTile name="Help & Support" />
        
        <button onClick={handleLogout} type="button" className="text-blue-700   border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-full">Logout</button>
       
     </div>
    </div>)
}