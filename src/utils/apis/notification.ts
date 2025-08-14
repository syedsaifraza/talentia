import Cookies from "js-cookie";
import { AuthResponse } from "../auth-helper";

const API_BASE_URL = "https://talentia.org.in/api/notifications"; 
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



export const getNotifications = async (): Promise<any> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
    });

    const data = await response.json();
    // console.log("Blog data:", data);
    return data;
  } catch (error) {
    console.error("Error Fetching notification:", error);
    return { success: false,  message: "Noptification Fetching failed" };
  }
};

