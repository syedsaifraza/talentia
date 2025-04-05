import { AuthResponse, LoginData, RegisterData } from "../auth-helper";

const API_BASE_URL = "https://talentia.humanoid.education/auth"; // Replace with your actual API URL

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
    return { success: false, error: "Something went wrong", message: "Registration failed" };
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
    return { success: false, error: "Something went wrong", message: "Login failed" };
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
    return { success: false, error: "Something went wrong", message: "Failed to fetch user" };
  }
};






