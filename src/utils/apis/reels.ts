import { StatusType } from "@/types/PostType";
import { AuthResponse, LoginData, RegisterData } from "../auth-helper";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";

const API_BASE_URL = "http://69.62.76.168:8000/api/reels"; 
// Replace with your actual API URL

export const getReels = async (token:string): Promise<{ posts: StatusType[] }> => {
  try {
 
    const response = await fetch(`${API_BASE_URL}/list`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
    });

    const data = await response.json();
 

    return { posts: data.status || [] }; // Safely handle if posts is undefined
  } catch (error) {
    console.error("Error during fetching status:", error);
    return { posts: [] }; // Match the return type
  }
};



// export const getPosts = async (): Promise<{posts:StatusType[]}> => {
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

//     return await response.json() as StatusType[];
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
    return { success: false, message: "Comment failed" };
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
    return { success: false,  message: "Like failed" };
  }
};
export const addReels = async (postData:FormData): Promise<AuthResponse> => {
  try {
    
     
    const token = Cookies.get("token"); 
    const response = await fetch(`${API_BASE_URL}/add`, {
      method: "POST",
      headers: {  
        "Authorization":`Bearer ${token}`
       },
      credentials: "include", 
      body:postData,
    });
    revalidatePath("/feed");
    return await response.json();
  } catch (error) {
    console.error("Error during adding post:", error);
    return { success: false,  message: "Post Add Failed" };
  }
};

 







