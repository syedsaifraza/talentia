import { AuthResponse, LoginData, RegisterData } from "../auth-helper";

// const API_BASE_URL = "http://localhost:8000/auth"; // Replace with your actual API URL

// export const registerUser = async (userData: RegisterData): Promise<AuthResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/signup`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("Error during registration:", error);
//     return { success: false, error: "Something went wrong", message: "Registration failed" };
//   }
// };

// export const loginUser = async (credentials: LoginData): Promise<AuthResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(credentials),
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("Error during login:", error);
//     return { success: false, error: "Something went wrong", message: "Login failed" };
//   }
// };

 

// export const fetchUser = async (token: string): Promise<AuthResponse> => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/me`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching user details:", error);
//     return { success: false, error: "Something went wrong", message: "Failed to fetch user" };
//   }
// };


//import { AuthResponse, LoginData, RegisterData } from "../auth-helper";

const dummyUser: AuthResponse = {
  success: true,
  token: "dummy_token_123",
  error:"no error",
  message: "Operation successful",
};

export const registerUser = async (_userData: RegisterData): Promise<AuthResponse> => {
  console.log("Dummy registerUser called with:", _userData);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ ...dummyUser, message: "Registration successful" }), 500)
  );
};

export const loginUser = async (_credentials: LoginData): Promise<AuthResponse> => {

  console.log("Dummy loginUser called with:", _credentials);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ ...dummyUser, message: "Login successful" }), 500)
  );
};

export const fetchUser = async (_token: string): Promise<AuthResponse> => {
  console.log("Dummy fetchUser called with token:", _token);
  return new Promise((resolve) =>
    setTimeout(() => resolve({ ...dummyUser, message: "User fetched successfully" }), 500)
  );
};

