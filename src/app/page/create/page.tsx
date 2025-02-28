'use client'
import { useState } from "react";
import Image from "next/image";
import BasicDetailsForm from "@/app/home/components/create/basic_details_form";
import AdvancedDetailsForm from "@/app/home/components/create/advance_details_form";
interface StepProps {
    setStep: (step: number) => void;
}

export default function InstitutionalPage() {
    const [step, setStep] = useState<number>(1);

    return (
        <div className="bg-white p-6 mt-4 mx-auto rounded shadow-lg">
            <h1 className="text-[30px] text-indigo-800 font-bold mb-4">Create Institutional Page</h1>
            
            {step === 1 && <OptionCards setStep={setStep} />}
            {step === 2 && <BasicDetailsForm setStep={setStep} />}
            {step === 3 && <AdvancedDetailsForm setStep={setStep} />}
        </div>
    );
}

function OptionCards({ setStep }: StepProps) {
    const options = [
        { 
            name: "School", 
            icon: "https://cdn-icons-png.flaticon.com/128/2995/2995543.png",
            gradient: "bg-gradient-to-r from-blue-100 to-blue-50"
        },
        { 
            name: "College", 
            icon: "https://cdn-icons-png.flaticon.com/128/2995/2995582.png",
            gradient: "bg-gradient-to-r from-green-100 to-green-50"
        },
        { 
            name: "University", 
            icon: "https://cdn-icons-png.flaticon.com/128/2231/2231696.png",
            gradient: "bg-gradient-to-r from-purple-100 to-purple-50"
        },
        { 
            name: "Training Center", 
            icon: "https://cdn-icons-png.flaticon.com/128/1376/1376523.png",
            gradient: "bg-gradient-to-r from-yellow-100 to-yellow-50"
        },
        { 
            name: "Coaching Institute", 
            icon: "https://cdn-icons-png.flaticon.com/128/9539/9539805.png",
            gradient: "bg-gradient-to-r from-red-100 to-red-50"
        },
        { 
            name: "Engineering & Management Institute", 
            icon: "https://cdn-icons-png.flaticon.com/128/5110/5110088.png",
            gradient: "bg-gradient-to-r from-teal-100 to-teal-50"
        },
        ,
        { 
            name: "Other", 
            icon: "https://cdn-icons-png.flaticon.com/128/18833/18833483.png",
            gradient: "bg-gradient-to-r from-indigo-100 to-orange-50"
        }
    ];
    
    return (
        <div>
            <h2 className="text-lg font-semibold">Choose an Option</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
                {options.map((option, index) => (
                    <div key={index} className={`border p-4 rounded-lg cursor-pointer hover:bg-indigo-100 h-300 text-center ${option.gradient}`}    onClick={() => setStep(2)}>
                        <Image src={option.icon}
                        width={100} height={100}
                        alt={option.name} className="m-auto mb-3 mt-3"/>
                        <p className="text-[20px]" >{option.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

 

 
