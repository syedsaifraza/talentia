import Image from "next/image";
import Link from "next/link";

export const SelfProfile=()=>{
    return (

<div
    className="max-w-xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900 w-64">
     
    <div className="mx-auto w-20 h-20 relative border-4 border-white rounded-full overflow-hidden">
        <Image width={100}  height={100}  className="object-cover object-center h-20" src='https://randomuser.me/api/portraits/men/69.jpg' alt='Woman looking front'/>
    </div>
    <div className="text-center mt-2">
        <h2 className="font-semibold">Rohit Saxena</h2>
        <p className="text-gray-500">Marketing Executive</p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
             <p className="text-xs">Followers</p>
            <div className="font-bold">2k</div>
        </li>
        <li className="flex flex-col items-center justify-between">
        <p className="text-xs">Following</p>
        <div className="font-bold">2.1k</div>
        </li>
        <li className="flex flex-col items-center justify-around">
        <p className="text-xs">Posts</p>
        <div className="font-bold">200</div>
        </li>
    </ul>
    <div className="p-4 mx-8 mt-0">
          
      <button className="w-auto block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-4 py-2 text-sm"> <Link href="/account/profile"> My Profile </Link></button>
       
         
    </div>
</div>
    );
}