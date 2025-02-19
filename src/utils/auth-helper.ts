export interface RegisterData {
    
    name: string;
    email: string;
    password: string;
     
  }
  
  
  export interface LoginData {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    success: boolean;
    message: string;
    token?: string;
    error?: string;
  }
  