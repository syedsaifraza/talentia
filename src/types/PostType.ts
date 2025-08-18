
export interface StatusType{
  fileURL: any;
  id: number; 
  type: string; // "image" or "text"
  message:string;
  background: string;
  image: string;
  zoom:string;
  dominantColor:string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
}
export interface PostType {
    fileURL: any;
    id: number;
    text: string;
    isDeleted:boolean|undefined,
    likes :string[]|undefined,
    comments:string[]|undefined,
    createdAt:any|undefined,
    media: {
      type: "image" | "video";
      url: string;
    } | null;
    user: {
      name: string;
      avatar: string;
      user_id:string;
      uid:string;
    };
     
    timestamp: string;
  }
  