"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


export default function BlogPage() {
  const [blogform, setblogform] = useState(false);

  const blogs = [
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
    {
      id: 2,
      title: "10 Tips for Writing Better Blog Posts",
      description:
        "Writing a blog post is more than just putting words on a page. It's about creating content that resonates with your audience. Here are 10 tips to help you write better blog posts.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Jane Smith",
      date: "15 OCT 2016",
    },
    {
      id: 3,
      title: "The Ultimate Guide to SEO in 2023",
      description:
        "Search Engine Optimization (SEO) is constantly evolving. Stay ahead of the curve with this ultimate guide to SEO in 2023.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Alice Johnson",
      date: "10 MAR 2023",
    },
    {
      id: 4,
      title: "How to Monetize Your Blog",
      description:
        "Monetizing a blog can be challenging, but with the right strategies, you can turn your passion into profit. Learn how to monetize your blog effectively.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Bob Brown",
      date: "05 JUL 2022",
    },
    {
      id: 5,
      title: "The Power of Storytelling in Blogging",
      description:
        "Storytelling is a powerful tool in blogging. It helps you connect with your audience on a deeper level. Learn how to use storytelling to enhance your blog.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Charlie Davis",
      date: "12 AUG 2021",
    },
    {
      id: 6,
      title: "How to Grow Your Blog Audience",
      description:
        "Growing your blog audience takes time and effort. Here are some proven strategies to help you attract more readers and grow your blog.",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Diana Evans",
      date: "20 SEP 2020",
    },
    {
      id: 7,
      title: "The Best Tools for Bloggers in 2023",
      description:
        "From writing to analytics, there are many tools available to help bloggers succeed. Here are the best tools for bloggers in 2023.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Eve Green",
      date: "30 JAN 2023",
    },
    {
      id: 8,
      title: "How to Write a Blog Post in 30 Minutes",
      description:
        "Short on time? Learn how to write a high-quality blog post in just 30 minutes with these time-saving tips.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Frank Harris",
      date: "14 FEB 2023",
    },
    {
      id: 9,
      title: "The Importance of Consistency in Blogging",
      description:
        "Consistency is key to building a successful blog. Learn why consistency matters and how to maintain it in your blogging journey.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Grace Lee",
      date: "25 MAR 2023",
    },
    {
      id: 10,
      title: "How to Choose the Right Blogging Niche",
      description:
        "Choosing the right niche is crucial for your blog's success. Here's how to find a niche that aligns with your interests and audience.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=48&q=60",
      author: "Hank Wilson",
      date: "05 APR 2023",
    },
  ];

  return (
    <>
      <div className="flex felx-row justify-between gap-5">
        <div className="flex-1">
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
              >
                <img
                  className="object-cover w-full h-64"
                  src={blog.image}
                  alt="Article"
                />
                <div className="p-4">
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <img
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
                    <a
                    
                      href="/BlogDetailsPage/BlogViewDetails"
                      className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                      tabIndex={0}
                      role="link"
                    >
                      {blog.title}
                    </a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[25vw] ">
      
          <div>
            <ul className="p-3 bg-white  gap-5 flex flex-col  rounded-[8px] ">
              <li
                onClick={() => setblogform(!blogform)}
                className="bg-[#2dce89] w-full gap-2 rounded-[8px]
             flex flex-row justify-center items-center align-middle p-4"
              >
                <FiEdit className="text-white" />
                <button className="font-bold text-white">
                  Write New Article
                </button>
              </li>
              <li className="border-b w-full py-2 ">
                <p className="font-[600]">SEARCH</p>
              </li>
              <li className="w-full  ">
                <input
                  type="search"
                  placeholder="Search For Article"
                  className="border-t w-[16.9vw] border-l border-b p-3 rounded-l-[8px]"
                />
                <button className="border border-[#2dce89] rounded-r-[8px] p-3 font-[600] bg-[#2dce89] text-white ">
                  Search
                </button>
              </li>
              <li className="border-b w-full py-2 ">
                <p className="font-[600]">CATEGORIES</p>
              </li>
              <li>
                <ul className="flex flex-wrap gap-1">
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Art
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Causes
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Crafts
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Dance
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Drinks
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Film
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Fitness
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Food
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Games
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Gardening
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Health
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Home
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Literature
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Music
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Networking
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Other
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Party
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Religion
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Shopping
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Sports
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Theater
                  </li>
                  <li className="bg-slate-300 py-1 px-2 rounded-[8px] font-[600] text-[14px] text-[#4a4dfa]">
                    Wellness
                  </li>
                </ul>
              </li>
              <li className="border-b w-full py-2 ">
                <p className="font-[600]">READ MORE</p>
              </li>
              <div>
                <li>
                  <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <a href="#">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        className="h-56 w-full object-cover"
                        alt="hello"
                      />
                      <div className="flex-auto px-6 py-5">
                        <span className="mb-2 flex items-center text-sm font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                          Branding
                        </span>
                        <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                          How to perform NPS Surveys
                        </h3>
                        <p className="mb-4 text-base font-light">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quam tempore officiis. Lorem, ipsum dolor.
                        </p>
                        <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                          Read Now
                        </span>
                      </div>
                    </a>
                  </article>
                </li>
                <li>
                  <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <a href="#">
                      <img
                        src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        className="h-56 w-full object-cover"
                        alt="hello"
                      />
                      <div className="flex-auto px-6 py-5">
                        <span className="mb-2 flex items-center text-sm font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                          Public Relations
                        </span>
                        <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                          Understanding Public Relations
                        </h3>
                        <p className="mb-4 text-base font-light">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quam tempore officiis. Lorem, ipsum dolor.
                        </p>
                        <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                          Read Now
                        </span>
                      </div>
                    </a>
                  </article>
                </li>
                <li>
                  <article className="mx-auto my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
                    <a href="#">
                      <img
                        src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        className="h-56 w-full object-cover"
                        alt="hello"
                      />
                      <div className="flex-auto px-6 py-5">
                        <span className="mb-2 flex items-center text-sm font-semibold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                            />
                          </svg>
                          Marketing
                        </span>
                        <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl">
                          Marketing is looking for untapped opportunities
                        </h3>
                        <p className="mb-4 text-base font-light">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Quam tempore officiis. Lorem, ipsum dolor.
                        </p>
                        <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
                          Read Now
                        </span>
                      </div>
                    </a>
                  </article>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {blogform && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] flex gap-2 flex-col py-5 rounded-lg w-[80vw]">
            <div className="flex px-4 flex-row items-center border-b-[1px] border-gray pb-2 justify-between">
              <h2 className="text-lg"> Write New Article</h2>
              <button
                className="flex justify-center items-center rounded-[50%] p-2 bg-gray-300"
                onClick={() => setblogform(!blogform)}
              >
                <IoClose />
              </button>
            </div>
            <div className="py-12">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="action.php">
                      <div className="mb-4">
                        <label className="text-xl text-gray-600">
                          Title <span className="text-red-500">*</span>
                        </label>
                        <br />
                        <input
                          type="text"
                          className="border-2 border-gray-300 p-2 w-full"
                          name="title"
                          id="title"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="text-xl text-gray-600">
                          Description
                        </label>
                        <br />
                        <input
                          type="text"
                          className="border-2 border-gray-300 p-2 w-full"
                          name="description"
                          id="description"
                          placeholder="(Optional)"
                        />
                      </div>
                      <div className="mb-8">
                        <label className="text-xl text-gray-600">
                          Content <span className="text-red-500">*</span>
                        </label>
                        <br />
                        <textarea
                          name="content"
                          className="border-2 border-gray-500"
                          defaultValue={
                            "                                \n                            "
                          }
                        />
                      </div>
                      <div className="flex p-1">
                        <select
                          className="border-2 border-gray-300 border-r p-2"
                          name="action"
                        >
                          <option>Save and Publish</option>
                          <option>Save Draft</option>
                        </select>
                        <button
                          role="submit"
                          className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
