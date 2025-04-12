import { Timestamp } from "firebase/firestore";

export interface FeaturedPhotos {
    url:string
}

export interface Feelings {
  text: string;
  emoji: any;
  nextInput?: string | null;
}

export interface FeelingsList {
  feelings: Feelings[];
  activities: Feelings[];
}

 
  
export 
interface Media {
  type: "image" | "video";
  url: string;
}

export interface Comment {
  comment: string;
  user:string;
}

export interface PostType {
  id: string; // Firestore document ID
  text: string;
  createdAt:{
    _seconds:number;
    _nanoseconds:number;
  };

  userDetails:UserProfile;
  media: {
    type: string;
    url: string;
  } | null;
  user: FirebaseUser;
  timestamp: string; // ISO date string or Firebase timestamp converted
  fileURL?: string;
  likes: string[]; // array of user UIDs
  comments: CommentType[];
}
export interface FirebaseUser {
  uid: string;
  name: string;
  avatar?: string;
  email?: string;
}
export interface CommentType {
  comment: string;
  user: string; // UID
  createdAt?: string; // Firebase timestamp or ISO string
}

export interface UserProfile {
  name: string;
  email: string;
  bio: string;
  intro: string;
  jobTitle: string;
  profilePhoto: string;
  coverPhoto: string;
  skills: string[];
  featuredPhotos:FeaturedPhotos[];
  createdAt: string; // ISO timestamp or convert from Firebase timestamp
  updatedAt: string; // ISO timestamp or convert from Firebase timestamp
}


export  interface ProfileData {
    name: string;
    bio: string;
    skills: string[];
    intro: string;
    profilePhoto: string;
    coverPhoto: string;
    featuredPhotos: string[];
    jobTitle: string;
  }
 