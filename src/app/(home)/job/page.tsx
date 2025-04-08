 
import GetNotified from "../../../component/components/GetNotified";
import JobsPage from "../../../component/components/jobpage";

export default function Job(){
    return <div className="bg-white shadow-md rounded-lg p-4 space-y-4 mt-2">
        <GetNotified/>
        <JobsPage/>
     
    </div>;
}