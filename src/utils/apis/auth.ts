import { statSync } from "fs";
import { AuthResponse, LoginData, RegisterData } from "../auth-helper";

const API_BASE_URL = "https://talentia2.humanoid.education/auth"; // Replace with your actual API URL

export const fetchUserProfileAndInstitute = async (token:string) => {
  const [instituteRes, profileRes,statusRes] = await Promise.all([
    fetch('https://talentia2.humanoid.education/api/institute', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }),
    fetch('https://talentia2.humanoid.education/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }),
    fetch('https://talentia2.humanoid.education/api/status', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }),
  ]);

  if (!instituteRes.ok || !profileRes.ok || !statusRes.ok) {
    throw new Error("Failed to fetch institute or profile data");
  }

  const instituteData = await instituteRes.json();
  const profileData = await profileRes.json();
  const statusData = await statusRes.json();
  return { instituteData, profileData ,statusData };
};


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

export const loginUser = async (credentials: LoginData): Promise<AuthResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
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






