"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoCamera, IoClose } from "react-icons/io5";
import { updateUser } from "@/utils/apis/profile";
import { useSelector } from "react-redux"; 
import { revalidatePath } from "next/cache";
import { FeaturedPhotos, PostType, ProfileData } from "@/lib/interfaces/types";
import useAuth from "@/hooks/useAuth";
import PostSkelatal from "@/component/skelatal/PostSkelatal";
import NameAvatar from "@/component/components/nameAvatar";
import DefaultAvatar from "@/component/components/defaultAvatar";
import Post from "@/component/components/post";
import { handleAccountRevalidation } from "./accountRevaliation";
import Loading from "./Loading";

export default function EditProfileFormBox({followers,followings}:{followers:string[],followings:string[]}) {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
   try{
    setLoading(true)
    useAuth()
   }catch(e) {

   }finally{
    setLoading(false);
   }
  })
  
  const [uploadFiles,setUploadFiles]=useState({});
  const editOptions = [
    { name: "Cover Photo", input: "image", key: "coverPhoto" },
    { name: "Profile Photo", input: "image", key: "profilePhoto" },
    { name: "Job Title", input: "text", key: "jobTitle" },
    { name: "Bio", input: "textarea", key: "bio" },
    { name: "Skills", input: "tags", key: "skills" },
    { name: "Customised Intro", input: "text", key: "intro" },
    { name: "Featured Photos", input: "images", key: "featuredPhotos" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving ,setIsSaving]=useState(false);
  const appState = useSelector((state:any)=>state.auth);
  const userState= useSelector((state:any)=>state.auth.userInfo);
  const [profileData, setProfileData] = appState.userInfo==null? useState({name:"" ,
    bio:"",
    skills:[],
    intro:"",
    coverPhoto:appState.userInfo==null?"https://content.acetians.in/uploads/cover1_cleanup.jpg":appState.userInfo.coverPhoto,
    profilePhoto:appState.userInfo!=null? appState.userInfo.profilePhoto:"https://content.acetians.in/uploads/logo%20(2).png",
    featuredPhotos: [],
    jobTitle:""}): useState({
    name: appState.userInfo.name ,
    bio: appState.userInfo.bio,
    skills: appState.userInfo.skills,
    intro:appState.userInfo.intro,
    profilePhoto: appState.userInfo.profilePhoto,
    coverPhoto: appState.userInfo.coverPhoto||"https://content.acetians.in/uploads/cover1_cleanup.jpg",
    featuredPhotos: [],
    jobTitle:appState.userInfo.jobTitle
  });

  const [tempProfileData, setTempProfileData] = useState<ProfileData>({...profileData});
  const [newSkill, setNewSkill] = useState("");

  const handleInputChange = (key: keyof ProfileData, value: any) => {
    setTempProfileData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSkillAdd = () => {
    if (newSkill.trim() && !tempProfileData.skills.includes(newSkill.trim())) {
      handleInputChange("skills", [...tempProfileData.skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    handleInputChange(
      "skills",
      tempProfileData.skills.filter(skill => skill !== skillToRemove)
    );
  };

  const handleFileUpload = (key: keyof ProfileData, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange(key, reader.result as string);
      };
      reader.readAsDataURL(file);
      setUploadFiles((prev)=>({...prev,[key]:file}))
    }
    console.log(key)
  };

  const handleSave = async() => {
    const formData = new FormData();
    setIsSaving(true);
    
    Object.entries(tempProfileData).forEach(([key, value]) => {
      console.log(key)
      if (key === 'profilePhoto' || key === 'coverPhoto') {
        if (value instanceof File) {
          formData.append(key, value);
        }
      } else if (key === 'featuredPhotos' && Array.isArray(value)) {
        value.forEach((file, index) => {
          if (file instanceof File) {
            formData.append(`${key}[${index}]`, file);
          }
        });
      } else {
        formData.append(key, String(value));
      }
    });

    Object.entries(uploadFiles).forEach(([key, value]) => {
      console.log(key)
      if (key === 'profilePhoto' || key === 'coverPhoto') {
        if (value instanceof File) {
          formData.append(key, value);
        }
      } else if (key === 'featuredPhotos' && Array.isArray(value)) {
        value.forEach((file, index) => {
          if (file instanceof File) {
            formData.append(`${key}[${index}]`, file);
          }
        });
      } else {
        formData.append(key, String(value));
      }
    });
    
    await updateUser(appState.user.uid,formData);
    await handleAccountRevalidation() 
    setIsModalOpen(false);
    setIsSaving(false);
  };

  const samplePosts: PostType[] = [];
  const featuredPhotos : FeaturedPhotos[]=[];
  const accountSubOptions = ["Posts", "About", "Friends", "Photos", "More"];
  const [currentPage, setCurrentPage] = useState<string>(accountSubOptions[0]);

  if(userState==null){
    return <h1>Loading</h1>;
  }

  return (
   <>
      {isModalOpen && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 w-screen">
          <div className="bg-white flex flex-col rounded-lg w-[90vw] max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Header */}
            <div className="flex px-6 py-4 flex-row items-center border-b border-gray-200 justify-between bg-white sticky top-0 z-10">
              <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
              <button
                className="flex justify-center items-center rounded-full p-2 hover:bg-gray-100 transition"
                onClick={() => setIsModalOpen(false)}
              >
                <IoClose className="text-gray-600 text-xl" />
              </button>
            </div>

            {/* Body */}
            {isSaving && (
              <div className="h-[60vh] w-full flex flex-col items-center justify-center">
                <Loading />
              </div>
            )}
            
            {!isSaving && (
              <div className="space-y-6">
                {/* Cover Photo - Now with full width and better styling */}
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={tempProfileData.coverPhoto || "/default-cover.jpg"}
                    alt="Cover"
                    fill
                    className="object-cover"
                  />
                  <label className="absolute bottom-4 right-4 z-5 bg-white/90 p-2 rounded-full cursor-pointer shadow-md hover:bg-white transition backdrop-blur-sm">
                    <IoCamera className="text-gray-700 w-5 h-5" />
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => handleFileUpload("coverPhoto", e)}
                    />
                  </label>
                </div>

                <div className="px-6 py-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column - Profile Photo and Basic Info */}
                    <div className="w-full md:w-1/2 space-y-4">
                      {/* Profile Photo with overlap effect */}
                      <div className="relative flex flex-row gap-10 items-center -mt-16 z-6">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                          {tempProfileData.profilePhoto === "" ? (
                            <NameAvatar name={profileData.name} size={128} />
                          ) : (
                            <Image
                              src={tempProfileData.profilePhoto || "/default-avatar.jpg"}
                              alt="Profile"
                              width={128}
                              height={128}
                              className="object-cover"
                            />
                          )}
                          <label className="absolute bottom-0  bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-100">
                            <IoCamera className="text-gray-700 w-4 h-4" />
                            <input
                              type="file"
                              hidden
                              accept="image/*"
                              onChange={(e) => handleFileUpload("profilePhoto", e)}
                            />
                          </label>
                        </div>
                        <div className="space-y-2 flex-1">
                        <label className="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                          type="text"
                          value={tempProfileData.jobTitle}
                          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                          placeholder="E.g. Software Engineer"
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      </div>

                      {/* Job Title */}
                      

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Bio</label>
                        <textarea
                          value={tempProfileData.bio}
                          onChange={(e) => handleInputChange("bio", e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          rows={4}
                          placeholder="Tell us about yourself..."
                        />
                      </div>

                    </div>

                    {/* Right Column - Bio, Skills, etc. */}
                    <div className="w-full md:w-1/2 space-y-4">
                      {/* Bio */}
                      
                      {/* Skills */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Skills</label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {tempProfileData.skills?.map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                            >
                              {skill}
                              <button
                                type="button"
                                onClick={() => handleSkillRemove(skill)}
                                className="text-blue-500 hover:text-blue-700 text-lg"
                              >
                                ×
                              </button>
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            placeholder="Add new skill"
                            className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            onKeyPress={(e) => e.key === 'Enter' && handleSkillAdd()}
                          />
                          <button
                            type="button"
                            onClick={handleSkillAdd}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                          >
                            Add
                          </button>
                        </div>
                      </div>

                      {/* Featured Photos */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Featured Photos</label>
                        <div className="grid grid-cols-3 gap-3 mb-2">
                          {tempProfileData.featuredPhotos?.map((photo, index) => (
                            <div key={index} className="relative group aspect-square">
                              <Image
                                src={photo}
                                alt={`Featured ${index + 1}`}
                                fill
                                className="w-full h-full object-cover rounded-md border border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  handleInputChange(
                                    "featuredPhotos",
                                    tempProfileData.featuredPhotos.filter((_, i) => i !== index)
                                  )
                                }
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                          <label className="aspect-square border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:border-gray-400 transition">
                            <div className="text-center p-2">
                              <IoCamera className="mx-auto text-gray-400 w-6 h-6" />
                              <span className="text-xs text-gray-500">Add Photo</span>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={(e) => {
                                if (e.target.files) {
                                  const newPhotos = Array.from(e.target.files).map(file =>
                                    URL.createObjectURL(file)
                                  );
                                  handleInputChange("featuredPhotos", [
                                    ...tempProfileData.featuredPhotos,
                                    ...newPhotos,
                                  ]);
                                }
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex px-6 py-4 justify-end items-center gap-3 mt-4 border-t border-gray-200 bg-gray-50 sticky bottom-0">
              <button
                className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition font-medium text-gray-700"
                onClick={() => setIsModalOpen(false)}
                disabled={isSaving}
              >
                Cancel
              </button>
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium disabled:bg-blue-300"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {loading ? (
        <PostSkelatal/>
      ) : (
        <div className=" min-h-[90vh]">
          <button 
            className="px-5 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium text-gray-700 shadow-sm"
            onClick={() => {
              setTempProfileData({...profileData});
              setIsModalOpen(true);
            }}
          >
            Edit Profile
          </button>
        </div>
      )}
    </>

  );
}