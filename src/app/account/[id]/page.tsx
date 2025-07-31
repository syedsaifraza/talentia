

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
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="relative w-full h-96 bg-gray-300">
        <Image
          src={user.coverPhoto || "/default-cover.jpg"}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          
          className="object-cover "
        />
        {/* Profile Picture */}
        <div className="absolute left-8 bottom-[-64px] w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
          <Image
            src={user.profilePhoto || "/default-profile.jpg"}
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div> 
       {followers.length > 0 ? (
  <NotFoundPage user={await fetchUserByUid(token, followers[0])} />
) : (
  <div></div>
)}
      </div>

    

      {/* User Info */}
      <div className="mt-20 px-8 md:px-16 flex flex-col md:flex-row md:items-center justify-between bg-white py-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{followers.length} followers · {followings.length} following</p> {/* Dummy followers/following */}
          <p className="mt-1 text-gray-700">{user.jobTitle}</p>
        </div>
        

        {/* Action Buttons */}
        <div className="flex mt-4 md:mt-0 gap-3">
          <EditButton userId={id} followers={followers} followings={followings}/>
          
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b bg-white mt-2 px-8 md:px-16">
        <AccountTabs userGallery={ <UserGallery id={id} /> } userPosts={<UserPosts id={id}/>} userVideos={<UserVideos id={id}/>} />
      </div>

      {/* Main Content */}
       
    </div>
  );
}
