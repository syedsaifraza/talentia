export interface PostType {
    id: number;
    text: string;
    media: {
      type: "image" | "video";
      url: string;
    } | null;
    user: {
      name: string;
      avatar: string;
    };
    timestamp: string;
  }
  