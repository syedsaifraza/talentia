"use client";
import { useState } from "react";
import Step1Form from "@/component/create-institute/StepForm";
import Step2Upload from "@/component/create-institute/Step2Upload";
import Step3Links from "@/component/create-institute/Step3Link";
import PagePreview from "@/component/create-institute/PagePreview";
import StepNavigation from "@/component/create-institute/StepNavigation";
import FormHeader from "@/component/create-institute/FormHeader";
import { createInstitution } from "@/utils/apis/institute";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<any>({
    pageName: "", category: "", bio: "",
    facebook: "", instagram: "", linkedin: "", website: "", contact: "",address:"",email:"",city:"",country:""
  });
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const [coverPhoto, setCoverPhoto] = useState<string>("");

  const handleChange = (e:any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e:any, type:string) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      type === "profile" ? setProfilePhoto(url) : setCoverPhoto(url);
    }
  };

  const submitForm = async () => {
    const requiredFields:string[] = [
      "pageName", "category", "bio",
      "address", "city", "country", "contact", "email"  ];
  
    for (const field of requiredFields) {
      if (!form[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }
  
    // if (!form.terms) {
    //   alert("You must agree to the terms and conditions.");
    //   return;
    // }
    const searchParams = useSearchParams();
    const formData = new FormData();
    formData.append("institutionType", searchParams.get("type")!); // Assuming category is type
    formData.append("name", form.pageName);
    formData.append("bio", form.bio);
    formData.append("address", form.address || "");
    formData.append("city", form.city || "");
    formData.append("country", form.country || "");
    formData.append("contact", form.contact || "");
    formData.append("email", form.email || "");
    formData.append("website", form.website || "");
    formData.append("affiliation", form.category || "");
    formData.append("facebook", form.facebook || "");
    formData.append("linkedin", form.linkedin || "");
    formData.append("instagram", form.instagram || "");
    // formData.append("terms", form.terms?.toString() || "false");
  
    // handle logo/banner if available from image state
    if (profilePhoto) {
      const blob = await fetch(profilePhoto).then((res) => res.blob());
      formData.append("logo", blob, "profile.jpg");
    }
  
    if (coverPhoto) {
      const blob = await fetch(coverPhoto).then((res) => res.blob());
      formData.append("banner", blob, "cover.jpg");
    }
  
    try {
      const response = await createInstitution(formData); // You must define this API call
      alert(response.message);
      window.location.href="/feed";
      // Optionally: router.push("/feed");
    } catch (error) {
      console.error("Submission failed", error);
      alert("Failed to submit. Please try again.");
    }
  };
  

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="flex h-screen">
      {/* Sidebar Form */}
      <div className="w-full md:w-1/3 bg-gray-100 p-6 overflow-y-auto border-r relative">
        <FormHeader />
        <form className="space-y-4">
          {step === 1 && <Step1Form form={form} handleChange={handleChange} />}
          {step === 2 && <Step2Upload handleImageChange={handleImageChange} />}
          {step === 3 && <Step3Links form={form} handleChange={handleChange} />}
        </form>
        <StepNavigation step={step} nextStep={nextStep} prevStep={prevStep} submitForm={submitForm} />
      </div>

      {/* Preview */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-white">
        <PagePreview form={form} profilePhoto={profilePhoto} coverPhoto={coverPhoto} />
      </div>
    </div>
  );
}
