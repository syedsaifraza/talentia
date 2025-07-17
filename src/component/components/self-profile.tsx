import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import DefaultAvatar from "./defaultAvatar";
import { useSelector } from "react-redux";
import { CgChevronRight } from "react-icons/cg";
import Cookies from "js-cookie";
import { fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import SelfProfileSkelatal from "../skelatal/SelfProfileCard";


export default function SelfProfile  ()  {


  
  const appState = useSelector((state:any) => state.institute);
  const userState = useSelector((state:any) => state.auth.userInfo);
  const coverPhoto='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
  const profilePhoto ='https://content.acetians.in/uploads/149071.png';
  if(userState==null){
    
    
    return <SelfProfileSkelatal/>;
  }
  const followers=userState.followers||[];
  const followings = userState.followings||[];
  function getCoverPhoto(userState: any, coverPhoto: string): string {
  if (userState == null) return coverPhoto;

  if (userState.coverPhoto !== undefined) {
    return userState.coverPhoto;
  }

  if (userState.bannerURL !== undefined) {
    return userState.bannerURL;
  }

  return coverPhoto;
}
  return (
    <>
    
      <div className="sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[20vh] overflow-hidden">
          <Image
            alt="user"
            height={100}
            width={100}
            className="object-cover object-top w-full"
            src={getCoverPhoto(userState, coverPhoto)}
            style={{maxHeight:'200px'}}

          />
        </div>
        <div style={{
          width: '6vw',
          height: '6vw', 
          marginRight: 'auto',
          position: 'relative',
          left: 20,
          marginTop: '-50px',
          overflow: 'hidden',
        }}>
          {/* <Link href="/account/profile"> */}
          {userState==null ? <DefaultAvatar  size={50} />: <DefaultAvatar imageUrl={userState.profilePhoto||userState.logoURL}  size={80} />}
       
        </div>
        <div className="mx-4">
         <Link href={`/account/${userState.id}`}>
         <h2 className="font-semibold">{userState.name|| 'Guest'}</h2>
         </Link> 
          <p className="text-gray-500">{userState.jobTitle|| ''}</p>
        </div>
        <ul className="py-1 pb-2  text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <div>{followers.length}</div>
            <p className="text-xs">Followers</p>
          </li>
          <li className="flex flex-col items-center justify-between">
            <div>{followings.length}</div>
            <p className="text-xs">Following</p>
          </li>
          <li className="flex flex-col items-center justify-around">
            <div>0</div>
            <p className="text-xs">Post</p>
          </li>
        </ul>
        



      </div>
       
    </>
  );
};
