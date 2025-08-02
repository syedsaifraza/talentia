// "use client";
// import { useState } from "react"; 
// import { IoClose } from "react-icons/io5";
// import { MdOutlineArticle } from "react-icons/md"; 
// import Image from "next/image";
// import { IoMdCamera } from "react-icons/io";
// import { useRef } from "react"; 

// interface Media {
//   type: "image" | "video";
//   url: string;
// }

// export default function BlogPage() {
//   const [media, setMedia] = useState<Media | null>(null);

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const handleMediaUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const mediaUrl = URL.createObjectURL(file);
//       if (file.type.startsWith("image/")) {
//         setMedia({ type: "image", url: mediaUrl });
//       } else if (file.type.startsWith("video/")) {
//         setMedia({ type: "video", url: mediaUrl });
//       }
//     }
//   };

//   const handleRemoveMedia = () => {
//     setMedia(null);
//   };

//   const handleAddButtonClick = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <>
//       <div>
//         <ul className="flex flex-col gap-1 bg-white rounded-[12px]">
//           <li className="flex flex-row gap-2 items-center bg-gray-200 py-6 px-3 rounded-t-[12px]">
//             <MdOutlineArticle className="size-[30]" />
//             <p className="font-bold">Write New Article</p>
//           </li>
//           <li className="p-3 flex flex-col gap-4 ">
           
//             <label className="flex flex-row  gap-[135px] ">
//               <p className="text-black font-[500]">Title</p>
//               <input
//                 className="py-2 px-1 border w-full border-gray-200"
//                 type="text"
//               />
//             </label>
//             <label className="flex flex-row  gap-[107px] ">
//             <p className="text-black font-[500]">Contant</p>
//               <textarea
//                 className="py-2 px-1 border w-full border-gray-200 resize-y min-h-[40vh]"
//                 placeholder="Write your content here..."
//               />
//             </label>
//             <label className="flex flex-row  gap-[125px] ">
//             <p className="text-black font-[500]">Cover</p>
//               <div
//                 onClick={handleAddButtonClick}
//                 className="flex justify-center align-center flex-col rounded-[10px]  w-[15vw] border border-blue-500 h-[30vh] relative"
//               >
//                 {media ? (
//                   <div className=" relative">
//                     <button
//                       className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleRemoveMedia();
//                       }}
//                     >
//                       <IoClose className="text-lg text-gray-700" />
//                     </button>

//                     {media.type === "image" ? (
//                       <Image
//                         width={100}
//                         height={100}
//                         src={media.url}
//                         alt="Preview"
//                         className="w-full h-full object-cover rounded-md"
//                       />
//                     ) : (
//                       <video
//                         controls
//                         className="w-full h-full object-cover rounded-md"
//                       >
//                         <source src={media.url} type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     )}
//                   </div>
//                 ) : (
//                   <div className="flex  flex-col justify-center items-center">
//                     <IoMdCamera className="text-black text-[30px]" />
//                   </div>
//                 )}

//                 <input
//                   type="file"
//                   accept="image/*, video/*"
//                   onChange={handleMediaUpload}
//                   className="hidden"
//                   ref={fileInputRef}
//                 />
//               </div>
//             </label>
//             <label className="flex flex-row   gap-[100px] ">
//             <p className="text-black font-[500]">Category</p>
//               <select className=" w-full border text-[500] text-black py-3 px-1 border-gray-200">
//                 <option className="text-black" selected>
//                   Select Category
//                 </option>
//                 <option className="text-black">Only Friends</option>
//                 <option className="text-black">EveryOne</option>
//               </select>
//             </label>
//             <label className="flex flex-row  gap-[134px] ">
//             <p className="text-black font-[500]">Tags</p>
//               <input className="py-2 px-1 border w-full border-gray-200" />
//             </label>
//             <label className="flex flex-row  gap-[80px] ">
//             <p className="text-black font-[500]">Enable Tips</p>
//               <input type="checkbox" />
//             </label>
//           </li>
//           <li className="flex flex-row gap-2 items-center bg-gray-200 py-6 px-3 rounded-b-[12px]">
//             <button className="bg-blue-800 text-white font-bold px-4 py-2 rounded-[5px]">
//               Publish
//             </button>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

"use client";

import { blogPost } from "@/utils/apis/profile";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, ChangeEvent } from "react";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  avatar: string;
  author: string;
  date: string;
}

interface BlogForm {
  title: string;
  description: string;
  file: File | null;
  filePreview: string;
  category: string;
  tags: string[];
  subcategory: string;
  content: string;
}

export default function BlogPage() {
  const blogs: Blog[] = [
    {
      id: 1,
      title: "I Built A Successful Blog In One Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.",
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60",
      author: "Jone Doe",
      date: "21 SEP 2015",
    },
    // ... (keep your existing blog data)
  ];

  const [showForm, setShowForm] = useState(false);
  const [blogForm, setBlogForm] = useState<BlogForm>({
    title: "",
    description: "",
    file: null,
    filePreview: "",
    category: "",
    tags: [],
    subcategory: "",
    content: "",
  });
  const [tagInput, setTagInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBlogForm({ ...blogForm, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setBlogForm({
          ...blogForm,
          file,
          filePreview: reader.result as string
        });
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleTagInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (tagInput.trim() && !blogForm.tags.includes(tagInput.trim())) {
        setBlogForm({
          ...blogForm,
          tags: [...blogForm.tags, tagInput.trim()],
        });
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setBlogForm({
      ...blogForm,
      tags: blogForm.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert image to binary data if file exists
    let imageBinary = null;
    if (blogForm.file) {
      imageBinary = await readFileAsBinary(blogForm.file);
    }
    
    // Prepare form data for submission
    const formData = {
      title: blogForm.title,
      description: blogForm.description,
      image: imageBinary,
      category: blogForm.category,
      tags: blogForm.tags,
      subcategory: blogForm.subcategory,
      content: blogForm.content,
    };

    blogPost(formData)
    
    console.log("Form Data to Submit:", formData);
    
    // Here you would typically send the data to your API
    // For now, we'll just log it to the console
    
    // Reset form after submission
    setBlogForm({
      title: "",
      description: "",
      file: null,
      filePreview: "",
      category: "",
      tags: [],
      subcategory: "",
      content: "",
    });
    setShowForm(false);
  };

  const readFileAsBinary = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryString = reader.result as string;
        resolve(binaryString);
      };
      reader.onerror = reject;
      reader.readAsBinaryString(file);
    });
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className="flex felx-row justify-between gap-2 bg-white px-4">
        {/* Left column - Blog list */}
        <div className="flex-1 mt-2">
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <Image
                  alt="blog cover"
                  height={400}
                  width={800}
                  className="object-cover w-full h-64"
                  src={blog.image}
                />
                <div className="p-4">
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <Image
                          height={40}
                          width={40}
                          className="object-cover h-10 rounded-full"
                          src={blog.avatar}
                          alt="Avatar"
                        />
                        <a
                          href="#"
                          className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                          tabIndex={0}
                          role="link"
                        >
                          {blog.author}
                        </a>
                      </div>
                      <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                        {blog.date}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Link
                      href="/BlogDetailsPage/BlogViewDetails"
                      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                      tabIndex={0}
                      role="link"
                    >
                      {blog.title}
                    </Link>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Sidebar */}
        <div className="w-[25vw]">
          <div>
            <ul className="p-3 gap-5 flex flex-col">
              <div
                onClick={() => setShowForm(true)}
                className="bg-[#2dce89] w-full gap-2 rounded-[8px] flex flex-row justify-center items-center align-middle p-4 cursor-pointer hover:bg-[#28b67b] transition-colors"
              >
                <FiEdit className="text-white" />
                <button className="font-bold text-white">
                  Write New Article
                </button>
              </div>
              
              {/* ... (keep your existing sidebar content) */}
            </ul>
          </div>
        </div>
      </div>

      {/* Blog Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Create New Blog Post</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={handleInputChange}
                    value={blogForm.title}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your amazing blog post title"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleInputChange}
                    value={blogForm.description}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="A short summary of your post (optional)"
                  />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Featured Image
                  </label>
                  <div 
                    onClick={triggerFileInput}
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    {blogForm.filePreview ? (
                      <div className="relative w-full h-48">
                        <Image
                          src={blogForm.filePreview}
                          alt="Preview"
                          fill
                          className="object-contain rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 justify-center">
                          <span className="relative bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                            Upload an image
                          </span>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      id="file-upload"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="sr-only"
                    />
                  </div>
                </div>

                {/* Category and Subcategory */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="category"
                      name="category"
                      onChange={handleInputChange}
                      value={blogForm.category}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select a category</option>
                      <option value="technology">Technology</option>
                      <option value="business">Business</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="health">Health & Wellness</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700">
                      Subcategory
                    </label>
                    <select
                      id="subcategory"
                      name="subcategory"
                      onChange={handleInputChange}
                      value={blogForm.subcategory}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select a subcategory</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Apps</option>
                      <option value="ai">Artificial Intelligence</option>
                    </select>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 items-center px-4 py-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                    {blogForm.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 text-gray-500 hover:text-gray-700"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      id="tags"
                      name="tags"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleTagInputKeyDown}
                      className="flex-1 min-w-[100px] border-none focus:ring-0 p-0"
                      placeholder="Add tags (press enter or comma)"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Add relevant tags to help readers find your content</p>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    onChange={handleInputChange}
                    value={blogForm.content}
                    rows={10}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Write your amazing content here..."
                  />
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Publish Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}