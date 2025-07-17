export interface RegisterData {
    
    name: string;
    email: string;
    password: string;
    dob:string;
    fullName:any;
    gender:string;
     
  }
  
  
  export interface LoginData {
    email: string;
    password: string;
  }

  export interface InstituteLoginData {
    docId: string; 
  }
  
  export interface AuthResponse {
    
    success: boolean;
    message: string;
    token?: string; 
  }
  export interface UserAsResponse {
    
    success: boolean;
    message: string;
    token?: string; 
    user?:any
  }
  