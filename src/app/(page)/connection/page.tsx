'use client';
import NameAvatar from '@/component/components/nameAvatar';
import NoData from '@/component/components/NoData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Page() {
  const [mounted, setMounted] = useState(false);
  const followings = useSelector((state: any) => state.auth.followings || []);
  const followers = useSelector((state: any) => state.auth.followers || []);
  const followersIds :string[]= followers.map((follower:any)=>follower.uid);
  const connections = followings.filter((following: any) =>
  followersIds.includes(following.uid)
);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;  

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Connections</h2>
      {connections.length<1 &&  <NoData/> }
      <div className="flex flex-wrap gap-4">

        {connections.map((user: any, index: number) => (



 <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-44">
      {/* Profile Image Section */}
      <div className="relative">
        <img
          src={user.avatar || "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"}
          alt={user.avatar}
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-3">
        {/* Name */}
        <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight"> {user.name}</h3>

        {/* Followers */}
        <p className="text-sm text-gray-600 mb-3"> {user.bio}</p>

        {/* Action Buttons */}
        <div className="space-y-2">
         

          <button
          
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm"
          >
            Message
          </button>
        </div>
      </div>
    </div>






          
        //  <div
        //     key={index}
        //     className="w-1/5 p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
        //   >
             
           
        //     {!user.avatar  && <NameAvatar name={user.name} size={70} /> }

        //     {user.avatar  && <Image
        //       src={user.avatar || '/default-avatar.png'}
        //       alt={user.name || 'User'}
        //       height={80}
        //       width={80}
        //       className="rounded-full object-cover"
        //     />}
        //     <Link href={`account/${user.uid}`}>  
        //     <p className="mt-2 text-center text-md font-medium">
        //       {user.name}
        //     </p>
        //     </Link>
        //     <p className="mt-0 text-center text-sm  font-medium" style={{fontSize:'12px'}}>
        //     <em>{user.bio}</em>   
        //     </p>

           
             
        //   </div>

        ))}
      </div>
      {/* <h2 className="text-xl font-semibold mb-4 mt-4">Followings</h2>
      {followings.length<1 &&  <NoData/> }
      <div className="flex flex-wrap gap-4">
        {followings.map((user: any, index: number) => (
          
         <div
            key={index}
            className="w-1/5 p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
          >
             
           
            {!user.avatar  && <NameAvatar name={user.name} size={70} /> }

            {user.avatar  && <Image
              src={user.avatar || '/default-avatar.png'}
              alt={user.name || 'User'}
              height={80}
              width={80}
              className="rounded-full object-cover"
            />}
            <Link href={`account/${user.uid}`}>  
            <p className="mt-2 text-center text-md font-medium">
              {user.name}
            </p>
            </Link>
            <p className="mt-0 text-center text-sm  font-medium" style={{fontSize:'12px'}}>
            <em>{user.bio}</em>   
            </p>
           
             
          </div>

        ))}
      </div>

      <hr/>
      <h2 className="text-xl font-semibold mb-4 mt-4">Followers</h2>
      {followers.length<1 &&  <NoData/> }
      <div className="flex flex-wrap gap-4">
       
        {followers.map((user: any, index: number) => (
          
         <div
            key={index}
            className="w-1/5 p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
          >
             
           
            {!user.avatar  && <NameAvatar name={user.name} size={70} /> }

            {user.avatar  && <Image
              src={user.avatar || '/default-avatar.png'}
              alt={user.name || 'User'}
              height={80}
              width={80}
              className="rounded-full object-cover"
            />}
            <Link href={`account/${user.uid}`}>  
            <p className="mt-2 text-center text-md font-medium">
              {user.name}
            </p>
            </Link>
            <p className="mt-0 text-center text-sm  font-medium" style={{fontSize:'12px'}}>
            <em>{user.bio}</em>   
            </p>
           
             
          </div>

        ))}
      </div> */}
    </div>
  );
}

export default Page;
