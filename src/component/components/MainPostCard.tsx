import { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import DefaultAvatar from "./defaultAvatar";
import { Feelings, Media } from "@/lib/interfaces/types";
import { addPost } from "@/utils/apis/post";

export default function MainPostCard({
  postPrivacy,
  name,
  postTypes,
  clickFeelings,
  close,
  postText,
  setPostText,
  currentFeeling,
  currentType,
  actInput,setactInput
}: {
  postPrivacy: string[];
  name: string;
  postText:string,
  setPostText:(e:any)=>void;
  postTypes: string[];
  clickFeelings: any;
  close: () => void;
  currentFeeling?: Feelings;
  currentType: string;
  setactInput:any;actInput:string;
}) {
  const [fileV, setFileV] = useState<File | null>(null);
  const [media, setMedia] = useState<Media | null>(null);
  
  const [currentPrivacy,setCurrentPrivacy]=useState(postPrivacy[0]);
  const [textSize, setTextSize] = useState("text-3xl");
  const [isUploading, setIsUploading] = useState(false);
  const [currentMediaType, setCurrentMediaType] = useState("image");
  const [selectedType, setSelectedType] = useState(currentType || "");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMediaSelect = (mType: string) => {
    setCurrentMediaType(mType.includes("video") ? "video" : "image");
    fileInputRef.current?.click();
  };

  const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileV(file);
      const mediaUrl = URL.createObjectURL(file);
      setMedia({
        type: file.type.startsWith("image/") ? "image" : "video",
        url: mediaUrl,
      });
    }
  };

  const handlePostTextAdd = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const length = e.target.value.length;
    setPostText(e.target.value); // Update postText

    if (length > 260) {
      setTextSize("text-sm");
    } else if (length > 100) {
      setTextSize("text-md");
    } else if (length > 40) {
      setTextSize("text-2xl");
    } else {
      setTextSize("text-2xl");
    }
  };

  const handleRemoveMedia = () => {
    setMedia(null);
    setFileV(null);
  };

  const handlePostPrivacyChanhge= (e:any)=>{
    setCurrentPrivacy(e.target.value)
  }

  const handlePostSubmit = async () => {
    if (!postText.trim() && !fileV) return;
    setIsUploading(true);

    const formData = new FormData();
    formData.append("text", postText);
    formData.append("activityOrFeeling", currentType);
    formData.append("activityInfo",actInput||"");
    formData.append("privacyType",currentPrivacy);
    if(currentFeeling){
        formData.append("currentFeeling", JSON.stringify(currentFeeling));
    }
    
    formData.append("timestamp", new Date().toISOString());
    if (fileV) formData.append("file", fileV);

    try {
      await addPost(formData); // ✅ your API function to upload
      setPostText("");
      setMedia(null);
      setFileV(null);
      setIsUploading(false);
      setIsUploading(false);
      setIsUploading(false);
    //   window.location.reload(); // Refresh to reflect post
    close()
    } catch (error) {
      console.error("Error posting:", error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100" style={{ height: "auto", width: "500px" }}>
      <div className="flex justify-between border-b-2 border-gray-200 p-4">
        <h4 className="font-normal">{isUploading!=true?"Create" :"Saving"} Post</h4>
        <FaTimes size={20} onClick={() => close()} className="cursor-pointer" />
      </div>

      <div className="flex">
        <div className="px-2 py-1">
          <DefaultAvatar size={55} />
        </div>
        <div className="px-3 py-1">
          <div className="font-semibold text-sm">
            {name}{" "} 
            <span className="font-normal text-xs">
                
              {selectedType =="feelings" && (
                <> is feeling <span className="font-semibold text-xs">{currentFeeling?.text}{currentFeeling?.emoji}</span></>
              )}
              {selectedType === "activities" && (
                <> is <span className="font-normal text-xs">{currentFeeling?.text} </span> <span className="font-semibold text-blue-800">{actInput}</span></>
              )}
            </span>
          </div>
          <select className="text-xs bg-gray-200 p-1 rounded-md" value={currentPrivacy} onChange={(e)=>handlePostPrivacyChanhge(e)}>
            {postPrivacy.map((pr, i) => (
              <option key={i}>{pr}</option>
            ))}
          </select>
        </div>
      </div>
      {isUploading==true?<>
      <Image alt="Uploading Gif" src={"https://content.acetians.in/uploads/uploading.gif"} width={50} height={100} style={{height:'200px',width:"auto",  margin:'auto'}} />

      </>:
     <>
      <div className="text-input p-3">
        <textarea
          value={postText}
          onChange={handlePostTextAdd}
          className={`${textSize} py-1 px-2 font-normal block border rounded-lg w-full focus:border-none focus:outline-none`}
          placeholder="What are you thinking?"
          rows={4}
        ></textarea>
      </div>

      {media && (
        <div className="px-4 mb-2 relative">
          {media.type === "image" ? (
            <Image width={100} height={100} src={media.url} alt="Selected media" className="rounded-lg max-h-52 w-full object-contain" style={{maxHeight:'200px'}} />
          ) : (
            <video src={media.url} controls className="rounded-lg max-h-52 w-full object-contain" />
          )}
          <button onClick={handleRemoveMedia} className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200">
            <FaTimes />
          </button>
        </div>
      )}

      <input type="file" accept={`${currentMediaType}/*`} ref={fileInputRef} className="hidden" onChange={handleMediaUpload} />

      <div className="flex justify-between items-center px-2 pb-3">
        <div className="flex w-3/4 flex-wrap">
          {postTypes.map((postType, index) => {
            const label = postType.replace(".gif", "");
            const isSelected = selectedType === postType;
            const isFeeling = postType.toLowerCase().includes("feeling");

            return (
              <div className="w-1/3 p-1" key={index}>
                <div
                  className={`py-2 text-center cursor-pointer border-2 rounded-xl ${
                    isSelected ? "border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => {
                    if (isFeeling) {
                      clickFeelings();
                      setSelectedType("feelings");
                    } else {
                      handleMediaSelect(postType);
                    }
                  }}
                >
                  <Image src={`https://content.acetians.in/uploads/${postType}`} width={50} height={50} alt={label} className="mx-auto" />
                  <p className="text-xs capitalize mt-1">{label}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-auto">
          <button
            type="button"
            onClick={handlePostSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 disabled:opacity-60"
            disabled={isUploading}
          >
            {isUploading ? "Posting..." : "Post"}
          </button>
        </div>
      </div>

      </>
}
    </div>
  );
}
