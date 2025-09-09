import Image from "next/image";
import NameAvatar from "./nameAvatar";
import { loginUserInstitute } from "@/utils/apis/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie"; 
 

export default function UserAccountTile({name,currentAcc,avatar,docId}:{name:string,currentAcc:boolean,avatar:string,docId:string}){

    const handleUserLogin=async ()=>{
        
        if(docId==""){
            return;
        }
        const response = await loginUserInstitute({ docId:docId});
        if (response.success && response.token) {
        Cookies.set("token", response.token);
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          style: { backgroundColor: "#8e44ad", color: "white" },
        });
        setTimeout(() => {
          window.location.href = "/home";
        }, 100);
      } else {
        // setError(response.message || "Invalid credentials");
        toast.error("Invalid credentials", {
          position: "top-center",
          autoClose: 3000,
        });
      }
        console.log(response);
    }
    return (
        <>
        <ToastContainer/>
    <div className="flex items-center my-1 relative hover:bg-gray-200 px-1 rounded-md hover:cursor-pointer" onClick={()=>handleUserLogin()}>
        <div className={`${currentAcc==true?`gradient-account-moving`:''} rounded-full p-1`}  >
            {avatar != ""  ? <Image
            src={avatar} style={{border:'1px solid black',borderRadius:'50%'}} width={40} alt={name} height={40}
            />:  <NameAvatar name={name} size={40}/> }
             
        </div>
        
        <h4 className="ml-3 font-600">{name}</h4>
        {currentAcc? 
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md  dark:bg-blue-900 dark:text-blue-300 p-1 absolute right-0">Active</span>:""}
    </div>
    </>
    )
}