import { PostType } from "@/types/PostType";
import { AuthResponse, LoginData, RegisterData } from "../auth-helper";
import Cookies from "js-cookie";
import { revalidatePath } from "next/cache";
import { SpecificPost } from "@/lib/interfaces/types";

const API_BASE_URL = "https://talentia.org.in/api/posts"; 
// Replace with your actual API URL

export const getPosts = async (token:string): Promise<{ posts: PostType[] }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {  
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      credentials: "include",
    });
    const data = await response.json();
    return { posts: data.posts || [] }; // Safely handle if posts is undefined
  } catch (error) {
    console.error("Error during fetching posts:", error);
    return { posts: [] }; // Match the return type
  }
};



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

export const hidePost = async (id:string): Promise<AuthResponse> => {
  try {
    
     
    const token = Cookies.get("token"); 
    const response = await fetch(`${API_BASE_URL}/hide-this`, {
      method: "POST",
      headers: {  
        "Authorization":`Bearer ${token}`,
        'Content-Type': 'application/json',
       },
      credentials: "include", 
      body: JSON.stringify({ id: id }),
    });
    // revalidatePath("/home");
    return await response.json();
  } catch (error) {
    console.error("Error during adding post:", error);
    return { success: false,  message: "Post Add Failed" };
  }
};

export const addPost = async (postData:FormData): Promise<AuthResponse> => {
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
    // revalidatePath("/home");
    return await response.json();
  } catch (error) {
    console.error("Error during adding post:", error);
    return { success: false,  message: "Post Add Failed" };
  }
};

 







