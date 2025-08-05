import Cookies from "js-cookie";
import { AuthResponse } from "../auth-helper";

const API_BASE_URL = "https://talentia.org.in/api/profile"; 
// Replace with your actual API URL

interface ProfileData {
    name: string;
    bio: string;
    skills: string[];
    intro: string;
    profilePhoto: string;
    coverPhoto: string;
    featuredPhotos: string[];
    jobTitle: string;
  }

interface ProfileResponse extends AuthResponse {
  institution?: ProfileData;
  institutions?: ProfileData[];
  profileId?: string;
}

export const createProfile= async (formData: FormData): Promise<ProfileResponse> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}`, {
      method: "POST",
      headers: {  
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("Error creating institution:", error);
    return { 
      success: false,  
      message: "Institution creation failed" 
    };
  }
};


export const addFollower = async (followerId: string): Promise<AuthResponse> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/follow/${followerId}`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` },
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error following user:", error);
    return { success: false,  message: "Following failed" };
  }
};


export const savePost = async (type: string,postId:string): Promise<AuthResponse> => {
  const formData = {
    "type":type,
    "postId": postId
  }

console.log(JSON.stringify(formData))

const data ={
  type,  postId}
console.log(data);

const raw = JSON.stringify({
  "type": type,
  "postId": postId
});
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/save/post-reels`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` ,
        "Content-Type": "application/json"},
      body:raw,
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error following user:", error);
    return { success: false,  message: "Following failed" };
  }
};



export const blogPost = async (formData: object): Promise<AuthResponse> => {


console.log(JSON.stringify(formData))


  try {
    const token = Cookies.get("token");
    const response = await fetch(`https://talentia.org.in/api/blogs/add`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` ,
        "Content-Type": "application/json"},
      body:JSON.stringify(formData),
      credentials: "include",
    });

    console.log("Response from blogPost:", response);

    return await response.json();
  } catch (error) {
    console.error("Error following user:", error);
    return { success: false,  message: "Following failed" };
  }
};


export const watchPostReels = async (type: string,postId:string): Promise<AuthResponse> => {
  const formData = {
    "type":type,
    "postId": postId
  }

console.log(JSON.stringify(formData))

const data ={
  type,  postId}
console.log(data);

const raw = JSON.stringify({
  "type": type,
  "postId": postId
});
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/watch/post-reels`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` ,
        "Content-Type": "application/json"},
      body:raw,
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error following user:", error);
    return { success: false,  message: "Following failed" };
  }
};







export const getProfiles = async (
  type?: string,
  city?: string,
  country?: string
): Promise<ProfileResponse> => {
  try {
    // Build query parameters
    const params = new URLSearchParams();
    if (type) params.append('type', type);
    if (city) params.append('city', city);
    if (country) params.append('country', country);

    const response = await fetch(`${API_BASE_URL}?${params.toString()}`, {
      method: "GET",
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return { 
      success: false,  
      message: "Failed to fetch users" 
    };
  }
};



export const getUser = async (id: string): Promise<ProfileResponse> => {

  
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "GET",
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return { 
      success: false,  
      message: "Failed to fetch user" 
    };
  }
};



export const updateUser = async (
  id: string, 
  formData: FormData
): Promise<ProfileResponse> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {  
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("Error updating institution:", error);
    return { 
      success: false,   
      message: "Institution update failed" 
    };
  }
};

export const deleteProfile = async (id: string): Promise<ProfileResponse> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {  
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error deleting profile:", error);
    return { 
      success: false,  
      message: "Profile deletion failed" 
    };
  }
};