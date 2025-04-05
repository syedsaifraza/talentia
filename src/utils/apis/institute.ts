import { AuthResponse } from "../auth-helper";
import Cookies from "js-cookie";

const API_BASE_URL = "https://talentia2.humanoid.education/api/institute"; 
// Replace with your actual API URL

interface Institution {
  id?: string;
  name: string;
  address: string;
  city: string;
  country: string;
  contact: string;
  email: string;
  website?: string;
  affiliation: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  institutionType: string;
  logoURL?: string;
  bannerURL?: string;
}

interface InstitutionResponse extends AuthResponse {
  institution?: Institution;
  institutions?: Institution[];
  institutionId?: string;
}

export const createInstitution = async (formData: FormData): Promise<InstitutionResponse> => {
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
      error: "Something went wrong", 
      message: "Institution creation failed" 
    };
  }
};

export const getInstitutions = async (
  type?: string,
  city?: string,
  country?: string
): Promise<InstitutionResponse> => {
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
    console.error("Error fetching institutions:", error);
    return { 
      success: false, 
      error: "Something went wrong", 
      message: "Failed to fetch institutions" 
    };
  }
};

export const getInstitution = async (id: string): Promise<InstitutionResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "GET",
      credentials: "include",
    });

    return await response.json();
  } catch (error) {
    console.error("Error fetching institution:", error);
    return { 
      success: false, 
      error: "Something went wrong", 
      message: "Failed to fetch institution" 
    };
  }
};

export const updateInstitution = async (
  id: string, 
  formData: FormData
): Promise<InstitutionResponse> => {
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
      error: "Something went wrong", 
      message: "Institution update failed" 
    };
  }
};

export const deleteInstitution = async (id: string): Promise<InstitutionResponse> => {
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
    console.error("Error deleting institution:", error);
    return { 
      success: false, 
      error: "Something went wrong", 
      message: "Institution deletion failed" 
    };
  }
};