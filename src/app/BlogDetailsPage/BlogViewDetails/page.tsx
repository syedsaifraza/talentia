"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { getBlog, getUser } from "@/utils/apis/blog";
import { FaArrowLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface Blog {
  blogId :string
}


export default function MainBlogPage() {
  



  let blogId = null;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    blogId = id || null;
  },[])

  useEffect(() => {
    if (!blogId) {
      setError("No blog id provided");
      setLoading(false);
      return;
    }
    const fetchBlog = async () => {
      try {
        const res = await getBlog();
        if (res && res.success !== false && Array.isArray(res.posts)) {
          const found = res.posts.find((b: any) => b.id === blogId);
          if (found) {
            setBlog(found);
          } else {
            setError("Blog not found");
          }
        } else {
          setError(res?.message || "Blog not found");
        }
      } catch (err) {
        setError("Failed to fetch blog");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="flex flex-row justify-evenly mx-auto px-[15vw]">
        <div className="">
          <Link href="/Blog/blogview">
            <FaArrowLeft />
          </Link>
          <main className="mt-10">
            <div className="mb-4 md:mb-0 relative">
              <div className="px-4 lg:px-0">
                <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                  {blog.title}
                </h2>
                <a
                  href="#"
                  className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                >
                  {blog.category}
                </a>
              </div>
              <Image
                height={400}
                width={800}
                alt={blog.title}
                src={blog.image}
                className="w-full object-cover lg:rounded"
                style={{ height: "28em" }}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                <p className="pb-6">{blog.content}</p>
                <p className="pb-6">{blog.description}</p>
                {/* Add more blog fields as needed */}
              </div>
              <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                <div className="p-4 border-t border-b md:border md:rounded">
                  <div className="flex py-2">
                    <Image
                      alt={blog.userDetails?.name || "user"}
                      height={40}
                      width={40}
                      src={blog.userDetails?.profilePhoto || "/public/assets/logo.png"}
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">
                        {blog.userDetails?.name}
                      </p>
                      <p className="font-semibold text-gray-600 text-xs">
                        Author
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 py-3">
                    {/* You can add author bio here if available */}
                  </p>
                  <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                    Follow
                    <i className="bx bx-user-plus ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
