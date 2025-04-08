'use client'
import { useState } from "react";
import Image from "next/image";
import { 
    SchoolForm, CollegeForm, UniversityForm, TrainingCenterForm,   
    EnggMgmtForm,  MedicalInstituteForm, PolytechnicForm, 
    CoachingInstituteForm,
    OtherInstituteForm
} from "@/component/components/InstitutionForm";
import { useSelector } from "react-redux";
import { CgChevronRight } from "react-icons/cg";
import DefaultAvatar from "@/component/components/defaultAvatar";

interface StepProps {
    setStep: (step: number) => void;
    setInstitutionType: (type: string) => void;
}

export default function InstitutionalPage() {
    const [step, setStep] = useState<number>(1);
    const [institutionType, setInstitutionType] = useState<string>("");
    const appState = useSelector((state:any) => state.institute);

    return (
        <div className="bg-white p-6 mt-4 mx-auto rounded shadow-lg">
            {(step==1|| step==null) && (appState.institutes.length>0) && <h2 className="text-xl font-bold text-indigo-800 mb-2 flex justify-start items-center">Your Pages</h2>}
            {
              (step==1|| step==null) && 
              <div className="px-2 flex flex-justify-start flex-wrap">
  {appState.institutes.map((ins:any) => (
     
      <div className="w-1/4 p-1">
        <div className="shadow-lg min-h-[300px]">
        <div className="rounded-t-lg h-[12vh] overflow-hidden">
          <Image
            alt="user"
            height={100}
            width={100}
            className="object-cover object-top w-full"
            src={ins.bannerURL}

          />
        </div>
        <div className="mx-auto w-[6vw] h-[6vw] relative left-[-80px] -mt-10 overflow-hidden"> 
          <Image src={ins.logoURL} height={60} width={60} className="rounded-full" alt={ins.namea} />
         
          
        </div>
        <div className=" mx-4">
          <h3 className="font-semibold min-h-[30px] max-h-[30px]">{ins?.name || 'Guest'}</h3>
          <p className="text-gray-500"></p>
        </div>
        <ul className="py-4  text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <div>0</div>
            <p className="text-xs">Followers</p>
          </li>
          <li className="flex flex-col items-center justify-between">
            <div>0</div>
            <p className="text-xs">Following</p>
          </li>
          <li className="flex flex-col items-center justify-around">
            <div>0</div>
            <p className="text-xs">Post</p>
          </li>
        </ul>

        <div className="flex justify-between gap-2 px-5">
  <button className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
    View
  </button>
  <button className="px-3 py-1 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
    Login
  </button>
</div>

           
        </div>
      </div>

      
     
  ))}
</div> 

            }
            {step==null && <h1 className="text-[30px] text-indigo-800 font-bold mb-4 mt-2">Create a new  Institutional Page</h1>}
            
            
            {step === 1 && <OptionCards setStep={setStep} setInstitutionType={setInstitutionType} />}
            {step === 2 && institutionType === "School" && <SchoolForm setStep={setStep} />}
            {step === 2 && institutionType === "College" && <CollegeForm setStep={setStep} />}
            {step === 2 && institutionType === "University" && <UniversityForm setStep={setStep} />}
            {step === 2 && institutionType === "Training Center" && <TrainingCenterForm setStep={setStep} />}
            {step === 2 && institutionType === "Coaching Institute" && <CoachingInstituteForm setStep={setStep} />}
            {step === 2 && institutionType === "Engineering & Management Institute" && <EnggMgmtForm setStep={setStep} />}
            {step === 2 && institutionType === "Medical Institute" && <MedicalInstituteForm setStep={setStep} />}
            {step === 2 && institutionType === "Polytechnic Institute" && <PolytechnicForm setStep={setStep} />}
            {step === 2 && institutionType === "Other" && <OtherInstituteForm setStep={setStep} />}
        </div>
    );
}

function OptionCards({ setStep, setInstitutionType }: StepProps) {
    const options = [
        { name: "School", icon: "https://cdn-icons-png.flaticon.com/128/2995/2995543.png", gradient: "bg-blue-50" },
        { name: "College", icon: "https://cdn-icons-png.flaticon.com/128/2995/2995582.png", gradient: "bg-green-50" },
        { name: "University", icon: "https://cdn-icons-png.flaticon.com/128/2231/2231696.png", gradient: "bg-purple-50" },
        { name: "Training Center", icon: "https://cdn-icons-png.flaticon.com/128/1376/1376523.png", gradient: "bg-yellow-50" },
        { name: "Coaching Institute", icon: "https://cdn-icons-png.flaticon.com/128/9539/9539805.png", gradient: "bg-red-50" },
        { name: "Engineering & Management Institute", icon: "https://cdn-icons-png.flaticon.com/128/5110/5110088.png", gradient: "bg-teal-50" },
        { name: "Medical Institute", icon: "https://cdn-icons-png.flaticon.com/128/2995/2995592.png", gradient: "bg-cyan-50" },
        { name: "Polytechnic Institute", icon: "https://cdn-icons-png.flaticon.com/128/3589/3589322.png", gradient: "bg-indigo-50" },
        { name: "Other", icon: "https://cdn-icons-png.flaticon.com/128/18833/18833483.png", gradient: "bg-orange-50" },
    ];

    return (
        <div>
            <h2 className="text-lg font-semibold mb-3 mt-3">Choose an Institution Type to create</h2>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                {options.map((option, index) => (
                    <div 
                        key={index} 
                        className={`border p-4 rounded-lg cursor-pointer hover:bg-indigo-100 text-center ${option.gradient}`} 
                        onClick={() => {
                            setInstitutionType(option.name);
                            setStep(2);
                        }}
                    >
                        <Image src={option.icon} width={80} height={80} alt={option.name} className="m-auto mb-3 mt-3"/>
                        <p className="text-[18px] font-medium">{option.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
