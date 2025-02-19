import GetNotified from "../components/GetNotified";
import JobsPage from "../components/jobpage";

export default function Job(){
    return <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
        <GetNotified/>
        <JobsPage/>
    </div>;
}