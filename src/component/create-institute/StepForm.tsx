"use client";

import { useSearchParams } from "next/navigation";

export default function Step1Form({ form, handleChange }:{form:any,handleChange:(e:any)=>void}) {
    const location = useSearchParams();

     

    const getAffiliationSelectOrInput = () => {
        const type = location.get("type") || "";
      
        if (type.includes("school")) {
          return renderSelect("Affiliation Board", ["CBSE", "ICSE", "State Board","IB","Cambridge","Others"]);
        } 
        else if (type.includes("coaching")){
         return renderSelect("Coaching Institute",["IIT-JEE", "NEET", "UPSC", "Banking", "CAT", "GATE", "Others"])
        }
        else if (type.includes("college") ) {
          return renderSelect("Affiliation & Accreditation", ["UGC", "AICTE", "NAAC", "NBA","State University", "Private University", "Others"]);
        } else if (type.includes("university")) {
          return renderSelect("University Type", ["Public", "Private", "Deemed", "State", "Central", "International", "Others"]);
        } else if (type.includes("training")) {
            return (
              <div className="mt-4">
                <label className="block mb-1 font-medium">Training Institute</label>
                <textarea
                  name="category"
                  placeholder="IT, Robotics, AI, Soft Skills, Vocational, Others"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows={4}
                />
              </div>
            );
          }
           else if (type.includes("eng")) {
          return renderSelect("Affiliation", ["AICTE","UGC", "NBA", "NAAC", "Others"]);
        } else {
          return (
            <div className="mt-4">
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-1 w-full border p-2 rounded"
              />
            </div>
          );
        }
      };
      
      // Helper: render a labeled <select> element
      const renderSelect = (label: string, options: string[]) => (
        <div className="mt-4">
          <label className="block mb-1 font-medium">{label}</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      );
      
       
      const instituteType = location.get("type")??"";
  return (
    <>
      <p className="text-sm text-gray-600 mb-4">Step 1: Basic Information</p>
      <div>
        <label className="block text-sm font-medium font-capitalize" style={{textTransform:'capitalize'}}
        >{instituteType} Name</label>
        <input
          type="text"
          name="pageName"
          value={form.pageName}
          onChange={handleChange}
          className="mt-1 w-full border p-2 rounded"
        />
      </div>
      <div>
        <label className="block text-sm font-medium"> </label>
        {getAffiliationSelectOrInput()}
      </div>
      <div>
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          className="mt-1 w-full border p-2 rounded"
        />
      </div>
      <input
          key={"contact"}
          type={"number"}
          name={"contact"}
          value={form.contact}
          onChange={handleChange}
          placeholder={`Contact Number`}
          className="w-full border p-2 rounded mb-2"
        />
      
      <input
          key={"email"}
          type={"email"}
          name={"email"}
          value={form.email}
          onChange={handleChange}
          placeholder={`Email`}
          className="w-full border p-2 rounded mb-2"
        />
    </>
  );
}
