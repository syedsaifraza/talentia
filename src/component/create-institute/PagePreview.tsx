"use client";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
  FaPhone,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

type Props = {
  form: {
    email?:string,
    pageName?: string;
    category?: string;
    bio?: string;
    contact?: string;
    website?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  profilePhoto: string;
  coverPhoto: string;
};

export default function PagePreview({ form, profilePhoto, coverPhoto }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border">
      {/* Cover Photo Section */}
      <div className="relative h-40 bg-gray-200">
        {coverPhoto ? (
          <img
            src={coverPhoto}
            alt="Cover"
            className="w-full h-full object-cover "
            style={{maxHeight:'200px'}}
             
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500" style={{height:'150px'}}>
            Cover Photo
          </div>
        )}

        {/* Profile Photo */}
        <div  
        style={{
          position: "absolute",
          bottom: "-64px",
          left: "16px",    // left-16 = 16 * 4 = 64px
          width: "128px",  // w-32 = 32 * 4 = 128px
          height: "128px", // h-32 = 32 * 4 = 128px
          borderRadius: "9999px", // rounded-full
          border: "4px solid white",
          overflow: "hidden",
          backgroundColor: "#d1d5db", // bg-gray-300
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)" // shadow-md
        }}
        >
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              No Photo
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="pt-20 px-6 pb-6" style={{paddingTop:'60px'}}>
        <h2 className="text-2xl font-bold text-gray-800">
          {form.pageName || "Page Name"}
        </h2>
        <p className="text-sm text-gray-500">
          {form.category || "Category"}
        </p>
        <p className="mt-3 text-gray-700">
          {form.bio || "This is a short bio about the page."}
        </p>

        {/* Contact */}
        {form.contact && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
            <FaPhone className="text-gray-500" />
            {form.contact}
          </div>
        )}

{form.email && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
            <FaEnvelope className="text-gray-500" />
            {form.email}
          </div>
        )}

        {/* Website */}
        {form.website && (
          <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
            <FaGlobe />
            <a
              href={form.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {form.website}
            </a>
          </div>
        )}

        {/* Social Media Links */}
        <div className="mt-4 flex flex-row gap-2 text-sm">
          {form.facebook && (
            <a
              href={form.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <FaFacebook  size={40} />  
            </a>
          )}
          {form.instagram && (
            <a
              href={form.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-500 hover:underline"
            >
              <FaInstagram  size={40} color="purple" />  
            </a>
          )}
          {form.linkedin && (
            <a
              href={form.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 hover:underline"
            >
              <FaLinkedin size={40} color="navy" /> 
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
