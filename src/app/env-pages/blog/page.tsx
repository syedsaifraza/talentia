"use client";

import { addBlog, getBlog } from "@/utils/apis/blog";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlog();
        setBlogs(res.posts || []);
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
    
    const formData = new FormData();
    formData.append('title', blogForm.title);
    formData.append('description', blogForm.description);
    formData.append('category', blogForm.category);
    formData.append('subcategory', blogForm.subcategory);
    formData.append('tags', "name");
    formData.append('content', "some content");
    if (blogForm.file) {
      formData.append('file', blogForm.file);
    }

    const response = await addBlog(formData);
    
    if(response.success === true) {
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
  const formatDate = (firebaseTimestamp: { _seconds: number, _nanoseconds: number }) => {
    const date = new Date(firebaseTimestamp._seconds * 1000);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
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
    <>
      <div className="flex flex-row justify-between gap-2 bg-white px-4">
        {/* Left column - Blog list */}
        <div className="flex-1 mt-2">
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-2xl overflow-hidden bg-white rounded-lg  border-2 border-gray-300 dark:bg-gray-800"
              >
                <Image
                  alt="blog cover"
                  height={400}
                  width={800}
                  className="object-cover w-full h-64"
                  src={blog.image}
                  priority
                />
                <div className="p-4">
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <Image
                          height={40}
                          width={40}
                          className="object-cover h-10 rounded-full"
                          src={blog.userDetails.profilePhoto}
                          alt="Avatar"
                        />
                        <a
                          href="#"
                          className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                          tabIndex={0}
                          role="link"
                        >
                          {blog.userDetails.name}
                        </a>
                      </div>
                      <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                        {formatDate(blog.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/env-pages/blog/view-blog?id=${blog.id}`}
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