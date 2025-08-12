"use client";

import { addBlog, getBlog } from "@/utils/apis/blog";
import { log } from "console";
import { PencilLine } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import Editor from 'react-simple-wysiwyg';
import { useState, useRef, ChangeEvent, useEffect } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoClose, IoMail } from "react-icons/io5";

interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  userDetails: {
    name: string;
    profilePhoto: string;
  };
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  category:string
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



 

 





  const categories = [
    "ART",
    "CAUSES",
    "CRAFTS",
    "DANCE",
    "DRINKS",
    "FILM",
    "FITNESS",
    "FOOD",
    "GAMES",
    "GARDENING",
    "HEALTH",
    "HOME",
    "LITERATURE",
    "MUSIC",
    "NETWORKING",
    "OTHER",
    "PARTY",
    "RELIGION",
    "SHOPPING",
    "SPORTS",
    "THEATER",
    "WELLNESS",
  ];

  const [blogs, setBlogs] = useState<Blog[]>([]);
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
  const [loading, setLoading] = useState(true);


     const [html, setHtml] = useState('');
  
  function onChange(e:any) {
    // setHtml(e.target.value);

     const value  = e.target.value;
     const name  = e.target.name;
    setBlogForm({ ...blogForm, [name]: value });
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlog();
        setBlogs(res.posts || []);

        console.log(res);
        console.log(res.posts);

        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
          filePreview: reader.result as string,
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

    const formData = new FormData();
    formData.append("title", blogForm.title);
    formData.append("description", blogForm.description);
    formData.append("category", blogForm.category);
    formData.append("subcategory", blogForm.subcategory);
    formData.append("tags", "name");
    formData.append("content", "some content");
    if (blogForm.file) {
      formData.append("file", blogForm.file);
    }

    const response = await addBlog(formData);

    if (response.success === true) {
      // Refresh the blog list after successful submission
      try {
        const res = await getBlog();
        setBlogs(res.posts || []);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }

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
    } else {
      alert(response.message);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to format the date from Firebase timestamp
  const formatDate = (firebaseTimestamp: {
    _seconds: number;
    _nanoseconds: number;
  }) => {
    const date = new Date(firebaseTimestamp._seconds * 1000);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-row  justify-around ">
      <div className="flex flex-row justify-between bg-white mx-auto">
        {/* Left column - Blog list */}
        <div className="flex-1">
          <div className="">
            {blogs.map((blog) => (
              <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 relative">
                  {/* Edit Button */}
                  {/* <button className="absolute top-4 right-4 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Edit
        </button> */}

                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {blog.category}
                    </span>
                  </div>

                  {/* Title */}

                  <Link href={`/env-pages/blog/view-blog?id=${blog.id}`}>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                      {blog.title}
                    </h1>
                  </Link>

                  {/* Author Info and Engagement Metrics */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <img
                        src={
                          blog.userDetails.profilePhoto ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpY5LtQ47cqncKMYWucFP41NtJvXU06-tnQ&s"
                        }
                        alt="superadmin avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold text-gray-800">
                            {blog.userDetails.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          Posted{" "}
                          {moment(blog.createdAt._seconds * 1000).fromNow()}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {/* Chat Icon SVG */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H16.5m-1.275-3.034c-.07-.017-.14-.034-.21-.051C13.453 9.034 12.002 8.25 10.5 8.25c-1.501 0-2.953.784-3.99 1.965a.75.75 0 0 0-.19.734c.06.27.27.47.53.53.26.06.47-.15.53-.42.78-.35 1.6-.54 2.42-.54 1.01 0 1.97.3 2.79.86.26.17.59.1.75-.16.16-.26.09-.59-.16-.75Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                          />
                        </svg>
                        <span>0</span>
                      </div>
                      <div className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                        {/* Eye Icon SVG */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                        <span>22</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Share Icons */}
                  <div className="flex space-x-3 mb-8">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-80"
                      aria-label="Share on Facebook"
                    >
                      <FaFacebookF className="text-2xl text-white" />
                    </a>
                    {/* Twitter */}
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:opacity-80"
                      aria-label="Share on Twitter"
                    >
                      <FaXTwitter className="text-2xl text-white" />
                    </a>

                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:opacity-80"
                      aria-label="Share on LinkedIn"
                    >
                      <FaLinkedinIn className="text-2xl text-white" />
                    </a>
                    {/* WhatsApp */}
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-80"
                      aria-label="Share on WhatsApp"
                    >
                      <FaWhatsapp className="text-2xl text-white" />
                    </a>
                    {/* Email */}
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:opacity-80"
                      aria-label="Share via Email"
                    >
                      <IoMail className="text-2xl text-red-600" />
                    </a>
                    {/* Pinterest */}
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:opacity-80"
                      aria-label="Share on Pinterest"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.5 17.5h-2v-7h2v7zm.5-8c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm6.5 8h-2v-4.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v4.5h-2v-7h2v.5c.31-.354.79-.5 1.5-.5s1.5.672 1.5 1.5v6.5z" />
                      </svg>
                    </a>
                  </div>

                  {/* Cover Image */}
                  <div className="mb-8">
                    <img
                      // src={blog.userDetails.profilePhoto}
                      src={blog.image}
                      alt="Hand holding holographic AI projection"
                      className="rounded-lg max-h-[400px] object-contain w-full"
                    />
                  </div>

                  {/* Article Content */}
                  <div  className="max-w-none text-gray-700 leading-relaxed line-clamp-3">
                    <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[350px]">
        <div
          className="fixed flex-col right-2 px-2  md:w-0 h-[89vh]"
          id="default-sidebar-1"
          style={{ width: "330px" }}
        >
          <ul className="py-5 gap-5 flex flex-col">
            <div
                onClick={() => setShowForm(true)}
                className="bg-[#2dce89] w-full gap-2 rounded-[8px] flex flex-row justify-center items-center align-middle p-4 cursor-pointer hover:bg-[#28b67b] transition-colors"
              >
                <FiEdit className="text-white" />
                <button className="font-bold text-white">
                  Write New Article
                </button>
              </div>

            {/* <div
              onClick={() => setShowForm(true)}
              className="min-h-screen overflow-y-scroll  bg-[#f0f2f5]"
            >
       
              <div className="mb-8">
                <button className="w-full bg-[#2ecc71] text-white py-3 px-4 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold transition-colors hover:bg-[#27ae60]">
                  <PencilLine className="w-5 h-5 mr-2" />
                  Write New Article
                </button>
              </div>

             
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-700 mb-4 relative pb-2">
                  SEARCH
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-400"></span>
                </h2>
                <div className="flex rounded-lg overflow-hidden shadow-sm">
                  <input
                    type="text"
                    placeholder="Search for articles"
                    className="flex-1 p-3 text-gray-700 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                  <button className="bg-gray-100 text-gray-800 font-semibold px-5 py-3 border border-l-0 border-gray-200 transition-colors hover:bg-gray-200">
                    Search
                  </button>
                </div>
              </div>

             
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-700 mb-4 relative pb-2 flex items-center">
                  CATEGORIES
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-400"></span>
                  <span className="w-3 h-3 bg-[#2ecc71] rounded-full ml-2"></span>
                </h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="bg-[#e0e7ff] text-[#6a5acd] text-sm font-medium py-2 px-4 shadow-sm transition-colors hover:bg-[#cdd5f5] whitespace-nowrap"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

           
              <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4 relative pb-2">
                  READ MORE
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-400"></span>
                </h2>
               
                <div className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400">
                  {"{"}Content goes here{"}"}
                </div>
              </div>
            </div> */}
          </ul>
        </div>
      </div>

   
      {showForm && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Create New Blog Post
              </h2>
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
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    description <span className="text-red-500">*</span>
                  </label>

                  {/* <Editor  name={"description"}  value={blogForm.description} onChange={onChange} /> */}
                  
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleInputChange}
                    value={blogForm.description}
                    rows={10}
                    required
                    className="w-full px-4 py-3 border border-gray-300 max-h-20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Write your amazing description here..."
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
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 5MB
                        </p>
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
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700"
                    >
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
                    <label
                      htmlFor="subcategory"
                      className="block text-sm font-medium text-gray-700"
                    >
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
                  <label
                    htmlFor="tags"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <p className="text-xs text-gray-500">
                    Add relevant tags to help readers find your content
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Content <span className="text-red-500">*</span>
                  </label>

                  <Editor  name={"content"}  value={blogForm.content} onChange={onChange} />
                  
                  
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
    </div>
  );
}
