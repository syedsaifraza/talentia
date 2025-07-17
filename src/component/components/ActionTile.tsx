import { FaChevronRight } from "react-icons/fa6";
import NameAvatar from "./nameAvatar";

export default function ActionTile({name}:{name:string}){
    return (
    <div className="flex items-center mb-0 mt-0 relative hover:bg-gray-100 px-2 rounded-md hover:cursor-pointer w-full py-2">
         
        
        <h5 className="font-600">{name}</h5>
        <FaChevronRight className="absolute right-2"/> 
    </div>
    )
}