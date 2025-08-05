import { statSync } from "fs";
import { AuthResponse, InstituteLoginData, LoginData, RegisterData, UserAsResponse } from "../auth-helper";
import { ResetPasswordData, ResetPasswordResponse } from "@/lib/interfaces/types";


const API_BASE_URL = "https://talentia.org.in/auth"; // Replace with your actual API URL

export const fetchUserProfileAndInstitute = async (token:string) => {
  const [instituteRes, profileRes,statusRes,reelsRes] = await Promise.all([
    fetch('https://talentia.org.in/api/institute', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }),
    fetch('https://talentia.org.in/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }),
    fetch('https://talentia.org.in/api/status', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }),
    fetch('https://talentia.org.in/api/reels', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
  ]);

  if (!instituteRes.ok || !profileRes.ok || !statusRes.ok|| !reelsRes.ok) {
    throw new Error("Failed to fetch some date");
  }

  const instituteData = await instituteRes.json();
  const profileData = await profileRes.json();
  const statusData = await statusRes.json();
  const reelsData = await reelsRes.json();
  return { instituteData, profileData ,statusData,reelsData };
};



// export const getTokken = async () => {
//    const cookieStore = cookies();
//   const token = (await cookieStore).get("token");  

//   return token

// }
 

export const registerUser = async (userData: RegisterData): Promise<AuthResponse> => {
  try { 
    const response = await fetch(`${API_BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    return await response.json();
  } catch (error) { 
    console.error("Error during registration:", error);
    return { success: false,  message: "Registration failed" };
  }
};


export const resetPassword = async (
  data: ResetPasswordData
): Promise<ResetPasswordResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/reset-password/mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.error("Error during password reset:", error);
    return {
      success: false,
      message: "Password reset request failed",
    };
  }
};

export const loginUserInstitute = async (credentials: InstituteLoginData ): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login/institute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    return await response.json();
  } catch (error) {
    console.error("Error during login:", error);
    return {  success: false, message: "Login failed",token:"no" };
  }
};

export const loginUser = async (credentials: LoginData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    console.log("Response from loginUser:", response);

    return await response.json();
  } catch (error) {
    console.error("Error during login:", error);
    return {  success: false, message: "Login failed",token:"no" };
  }
};


export const fetchDetailedUser = async (token: string): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/user-details`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {  success: false, message: "Failed to fetch user",token:"no" };
  }
};

export const fetchUserByUid = async (token: string,uid:string): Promise<UserAsResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {  success: false, message: "Failed to fetch user",token:"no" };
  }
};


export const fetchUser = async (token: string): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {  success: false, message: "Failed to fetch user",token:"no" };
  }
};






