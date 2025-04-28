"use client";
 
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoCamera, IoClose } from "react-icons/io5";
import {  updateUser } from "@/utils/apis/profile";
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
    // Append all fields to FormData

    Object.entries(tempProfileData).forEach(([key, value]) => {
      console.log(key)
      // Handle file uploads differently
      if (key === 'profilePhoto' || key === 'coverPhoto') {
        // If it's a File object (from file input)
        if (value instanceof File) {
          formData.append(key, value);
        }
        // If it's a string (existing URL), we might not need to send it
        // or we could send it as a string if the backend expects it
      } 
      // Handle array of files (featuredPhotos)
      else if (key === 'featuredPhotos' && Array.isArray(value)) {
        value.forEach((file, index) => {
          if (file instanceof File) {
            formData.append(`${key}[${index}]`, file);
          }
        });
      }
      // Handle other fields (strings, numbers, etc.)
      else {
        formData.append(key, String(value));
      }
    });

    Object.entries(uploadFiles).forEach(([key, value]) => {
      console.log(key)
      // Handle file uploads differently
      if (key === 'profilePhoto' || key === 'coverPhoto') {
        // If it's a File object (from file input)
        if (value instanceof File) {
          formData.append(key, value);
        }
        // If it's a string (existing URL), we might not need to send it
        // or we could send it as a string if the backend expects it
      } 
      // Handle array of files (featuredPhotos)
      else if (key === 'featuredPhotos' && Array.isArray(value)) {
        value.forEach((file, index) => {
          if (file instanceof File) {
            formData.append(`${key}[${index}]`, file);
          }
        });
      }
      // Handle other fields (strings, numbers, etc.)
      else {
        formData.append(key, String(value));
      }
    });
    await updateUser(appState.user.uid,formData);
    
    await handleAccountRevalidation() 
    setIsModalOpen(false);
    setIsSaving(false);
    
  };

  const samplePosts: PostType[] = [
    // ... (keep your existing sample posts)
  ];

  const featuredPhotos : FeaturedPhotos[]=[];

  const accountSubOptions = ["Posts", "About", "Friends", "Photos", "More"];
  const [currentPage, setCurrentPage] = useState<string>(accountSubOptions[0]);
 if(userState==null){
  return <h1>Loading</h1>;
 }
  return (
    <>
      {isModalOpen && (
  <div className="fixed inset-0 z-[99] flex items-center justify-center bg-gray-800 bg-opacity-50 w-screen">
    <div className="bg-white flex flex-col py-5 rounded-lg w-[90vw] md:w-[90vw] lg:w-[90vw] max-h-[90vh] overflow-y-auto" style={{}}>

      {/* Header */}
      <div className="flex px-4 flex-row items-center border-b-[1px] border-gray pb-2 justify-between bg-orange-400">
        <h2 className="text-lg font-semibold">Edit Profile</h2>
        <button
          className="flex justify-center items-center rounded-[50%] p-2 bg-gray-300 hover:bg-gray-400 transition"
          onClick={() => setIsModalOpen(false)}
        >
          <IoClose />
        </button>
      </div>

      {/* Body */}
      {isSaving && <div className="h-80vh w-[80vw] flex flex-col items-center justify-center"><Loading /></div>}
      {!isSaving && 
      <div className="px-4 py-4 space-y-6">

        {/* Cover Photo */}
        <div className="flex">
          <div className="w-1/2">
          
          <div className="space-y-2">
          <label className="text-gray-900">Cover Photo</label>
          <div className="relative w-full h-[20vh] overflow-hidden border rounded-md">
            <Image
              src={tempProfileData.coverPhoto || "/default-avatar.jpg"}
              alt="Cover"
              width={400}
              height={100}
              className="object-cover w-full h-[30vh]"
            />
            <label className="z-[100] bottom-2 right-2 bg-white p-2 rounded-full cursor-pointer shadow-md hover:bg-gray-200 transition">
              <IoCamera className="text-black w-5 h-5" />
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => handleFileUpload("coverPhoto", e)}
              />
            </label>
          </div>
        </div>

        {/* Profile Photo */}
        <div className="space-y-2">
          <label className="text-gray-900">Profile Photo</label>
          <div className="relative w-20 h-20 rounded-full overflow-hidden border">
            {tempProfileData.profilePhoto === "" ? (
              <NameAvatar name={profileData.name} size={80} />
            ) : (
              <Image
                src={tempProfileData.profilePhoto || "/default-avatar.jpg"}
                alt="Profile"
                width={80}
                height={80}
                className="object-cover"
              />
            )}
            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md">
              <IoCamera className="text-black w-5 h-5" />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => handleFileUpload("profilePhoto", e)}
              />
            </label>
          </div>

          <div className="space-y-2">
          <label className="text-gray-900">Job Title</label>
          <input
            type="text"
            value={tempProfileData.jobTitle}
            onChange={(e) => handleInputChange("jobTitle", e.target.value)}
            placeholder="Job Title"
            className="w-full p-2 border rounded"
          />
        </div>
        </div>
          </div>

          <div className="w-1/2 px-2">
          

        {/* Bio */}
        <div className="space-y-2">
          <label className="text-gray-900">Bio</label>
          <textarea
            value={tempProfileData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Bio"
          />
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <label className="text-gray-900">Skills</label>
          <div className="flex flex-wrap gap-2">
            {tempProfileData.skills?.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                {skill}
                <button
                  type="button"
                  onClick={() => handleSkillRemove(skill)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add new skill"
              className="flex-1 p-2 border rounded"
            />
            <button
              type="button"
              onClick={handleSkillAdd}
              className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>

         

        {/* Featured Photos */}
        <div className="space-y-2">
          <label className="text-gray-900">Featured Photos</label>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {tempProfileData.featuredPhotos?.map((photo, index) => (
              <div key={index} className="relative group">
                <Image
                  src={photo}
                  alt={`Featured ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-24 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() =>
                    handleInputChange(
                      "featuredPhotos",
                      tempProfileData.featuredPhotos.filter((_, i) => i !== index)
                    )
                  }
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                >
                  ×
                </button>
              </div>
            ))}
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
            className="text-sm"
          />
        </div>
          </div>
        </div>
        
 
        
      </div>
      } 

      {/* Footer */}
      <div className="flex px-4 justify-between items-center space-x-2 mt-4 border-t pt-4">
        <button
          className="px-4 py-2 border rounded hover:bg-gray-100 transition"
          onClick={() => setIsModalOpen(false)}
          disabled={isSaving}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-blue-100"
          onClick={handleSave}
          disabled={isSaving}
        >
          Save Changes
        </button>
      </div>

    </div>
  </div>
)}

       {loading==true? <PostSkelatal/>:<div className="bg-gray-100 min-h-[90vh]">
        {/* Cover Photo */}
        

        {/* Profile Actions */}
        <div className="">
          <button 
            className="px-4 py-2 border rounded hover:bg-gray-100 transition" 
            onClick={() => {
              setTempProfileData({...profileData});
              setIsModalOpen(true);
            }}
          >
            Edit Profile
          </button>
        </div>

        

         
      </div> }
      
    </>
  );
}