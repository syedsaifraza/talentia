 
// import GetNotified from "../../../component/components/GetNotified";
// import JobsPage from "../../../component/components/jobpage";

// export default function Job(){
//     return <div className="bg-white shadow-md rounded-lg p-4 space-y-4 mt-2">
//         <GetNotified/>
//         <JobsPage/>
     
//     </div>;
// }




import { AdComponents } from "@/component/components/adComponents";
import GetNotified from "../../../component/components/GetNotified";
import JobsPage from "../../../component/components/jobpage";

export default function Job() {
  return (
    <div className="flex flex-row  justify-around ">
      <div id="default-sidebar" className="bg-white shadow-md rounded-lg p-4 space-y-4 " style={{ width: "570px" }}>
        <GetNotified />
        <JobsPage />
      </div>
      <div className="w-[300px]">
        <AdComponents />
      </div>
    </div>
  );
}