

export const dynamic = 'force-dynamic';
import AccountTabs from "@/component/components/AccountTabs";
import EditButton from "@/component/components/EditProfileButton";
import UserGallery from "@/component/components/UserGallery";
import UserPosts from "@/component/components/UserPosts";
import UserVideos from "@/component/components/UserVideos";
import { fetchUserByUid, fetchUserProfileAndInstitute } from "@/utils/apis/auth";
import { cookies } from "next/headers";
import Image from "next/image";
import NotFoundPage from "@/app/not-found";


// no `await` needed

interface PageProps {
  params: {
    id: string;
    [key: string]: string; // allow extra params if needed
  };
}

export default async function ProfileView({params}:{params:any}) {
  const { id } = params;

 
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "n";

  const res = await fetchUserByUid(token, id);
  const user = res?.user;

  if (!user) {
    return <div className="text-center text-red-500 mt-10">User not found</div>;
  }

  const followers  =  user.followers||[];
  const followings = user.followings||[];




const { instituteData, profileData,statusData,reelsData } = await fetchUserProfileAndInstitute(token)

const getuse = followers.map((id: any) => (
  <NotFoundPage user={fetchUserByUid(token, id)} />
));

  return (
    <div className="bg-[#f2f4f7] min-h-screen px-[100px]">
      {/* Cover Photo */}
      <div className="relative w-full h-96 rounded-b-2xl">
        <Image
          src={user.coverPhoto || "https://content.acetians.in/uploads/360_F_705229898_6MV4F9FPWLFzz1pWVmr3BNnls9s8b1x4.jpg"}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          
          className="object-contain rounded-b-2xl "
        />
        {/* Profile Picture */}
        <div className="absolute bg-white left-8 bottom-[-64px] w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <Image
            src={user.profilePhoto || "https://content.acetians.in/uploads/d%20u%20m%20m%20y%20-%20u%20s%20er%20-%20male.jpg"}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex mt-4 md:mt-0 gap-3 absolute  bottom-3 right-3">
          <EditButton userId={id} followers={followers} followings={followings}/>
          
        </div>
      </div>


    

      {/* User Info */}
      <div className="mt-20 px-8 md:px-16 flex flex-col md:flex-row md:items-center justify-between bg-white py-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          
          <p className="mt-1 text-gray-700">{user.jobTitle}</p>
        </div>

      <div>
        <p className="text-gray-600">{followers.length} followers · {followings.length} following</p> 
      </div>
        

        {/* Action Buttons */}
        
      </div>

      {/* Tabs */}
      <div className="border-b bg-white p-3 mt-5">
        <AccountTabs userGallery={ <UserGallery id={id} /> } userPosts={<UserPosts  id={id}/>} userVideos={<UserVideos id={id}/>} />
      </div>

      {/* Main Content */}
       
    </div>
  );
}
