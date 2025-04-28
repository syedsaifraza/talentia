export const dynamic = 'force-dynamic';
import EditButton from "@/component/components/EditProfileButton";
import { fetchUserByUid } from "@/utils/apis/auth";
import { cookies } from "next/headers";
import Image from "next/image";
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

  const followers=user.followers||[];
  const followings = user.followings||[];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="relative w-full h-72 bg-gray-300">
        <Image
          src={user.coverPhoto || "/default-cover.jpg"}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          className="object-cover"
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

      {/* User Info */}
      <div className="mt-20 px-8 md:px-16 flex flex-col md:flex-row md:items-center justify-between bg-white py-6 shadow-sm">
        <div>
          <h1 className="text-3xl font-bold">{user.name} </h1>
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
        <div className="flex space-x-8">
          {["Posts", "About", "Photos", "Videos", "More"].map((tab, index) => (
            <button
              key={index}
              className="py-4 text-gray-600 hover:text-blue-600 font-medium border-b-2 border-transparent hover:border-blue-600 transition"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 md:px-16 py-8">
        <h2 className="text-xl font-semibold mb-4">Intro</h2>
        <p className="text-gray-700">{user.bio || "No bio available."}</p>

        {/* Skills section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            {user.skills?.filter((skill:any) => skill !== "undefined").map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
