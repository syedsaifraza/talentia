import Image from "next/image";
export default function Loading(){
   return <>
   <Image alt="Uploading Gif" src={"https://content.acetians.in/uploads/uploading.gif"} width={50} height={100} style={{height:'200px',width:"auto",  margin:'auto'}} />
         
         Submitting Please Wait
   </>;
}