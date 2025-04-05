import { PostType } from "@/types/PostType";
import { AuthResponse, LoginData, RegisterData } from "../auth-helper";
import Cookies from "js-cookie";

const API_BASE_URL = "https://talentia2.humanoid.education/api/posts"; 
// Replace with your actual API URL

export const getPosts = async (): Promise<{ posts: PostType[] }> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/list`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
    });

    const data = await response.json();

    // You can add a console.log to check the structure
    console.log("API Response:", data);

    return { posts: data.posts || [] }; // Safely handle if posts is undefined
  } catch (error) {
    console.error("Error during fetching posts:", error);
    return { posts: [] }; // Match the return type
  }
};



// export const getPosts = async (): Promise<{posts:PostType[]}> => {
//   try {
     
//     const token = Cookies.get("token");
//     console.log("API URL:", API_BASE_URL);
//     const response = await fetch(`${API_BASE_URL}/list`, {
//       method: "GET",
//       headers: {  
//         "Authorization":`Bearer ${token}`
//        },
//       credentials: "include", 
//     });

//     return await response.json() as PostType[];
//   } catch (error) {
//     console.error("Error during adding post:", error);
//     return [];
//   }
// };

export const addComment = async (postId: string, comment: string): Promise<AuthResponse> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/comment/${postId}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify({ comment }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error adding comment:", error);
    return { success: false, error: "Something went wrong", message: "Comment failed" };
  }
};
export const addLike = async (postId: string): Promise<AuthResponse> => {
  try {
    const token = Cookies.get("token");
    const response = await fetch(`${API_BASE_URL}/like/${postId}`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` },
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error adding like:", error);
    return { success: false, error: "Something went wrong", message: "Like failed" };
  }
};
export const addPost = async (postData:FormData): Promise<AuthResponse> => {
  try {
    
     
    const token = Cookies.get("token");
    console.log("API URL:", API_BASE_URL);
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: "POST",
      headers: {  
        "Authorization":`Bearer ${token}`
       },
      credentials: "include", 
      body:postData,
    });

    return await response.json();
  } catch (error) {
    console.error("Error during adding post:", error);
    return { success: false, error: "Something went wrong", message: "Post Add Failed" };
  }
};

 







