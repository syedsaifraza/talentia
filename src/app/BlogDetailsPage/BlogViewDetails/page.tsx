"use client";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function MainBlogPage() {
  const [blogform, setblogform] = useState(false);
  return (
    <>
      <div className="flex flex-row justify-evenly mx-auto">
        <div className="w-[60vw]">
          <a href="/Blogs/BlogView">
          <FaArrowLeft/>
          </a>
          <main className="mt-10">
            <div className="mb-4 md:mb-0 relative">
              <div className="px-4 lg:px-0">
                <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                  Pellentesque a consectetur velit, ac molestie ipsum. Donec
                  sodales, massa et auctor.
                </h2>
                <a
                  href="#"
                  className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                >
                  Cryptocurrency
                </a>
              </div>
              <img
                src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="w-full object-cover lg:rounded"
                style={{ height: "28em" }}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-12">
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                <p className="pb-6">
                  Advantage old had otherwise sincerity dependent additions. It
                  in adapted natural hastily is justice. Six draw you him full
                  not mean evil. Prepare garrets it expense windows shewing do
                  an. She projection advantages resolution son indulgence. Part
                  sure on no long life am at ever. In songs above he as drawn
                  to. Gay was outlived peculiar rendered led six.
                </p>
                <p className="pb-6">
                  Difficulty on insensible reasonable in. From as went he they.
                  Preference themselves me as thoroughly partiality considered
                  on in estimating. Middletons acceptance discovered projecting
                  so is so or. In or attachment inquietude remarkably comparison
                  at an. Is surrounded prosperous stimulated am me discretion
                  expression. But truth being state can she china widow.
                  Occasional preference fat remarkably now projecting uncommonly
                  dissimilar. Sentiments projection particular companions
                  interested do at my delightful. Listening newspaper in
                  advantage frankness to concluded unwilling.
                </p>
                <p className="pb-6">
                  Adieus except say barton put feebly favour him. Entreaties
                  unpleasant sufficient few pianoforte discovered uncommonly
                  ask. Morning cousins amongst in mr weather do neither. Warmth
                  object matter course active law spring six. Pursuit showing
                  tedious unknown winding see had man add. And park eyes too
                  more him. Simple excuse active had son wholly coming number
                  add. Though all excuse ladies rather regard assure yet. If
                  feelings so prospect no as raptures quitting.
                </p>
                <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                  Sportsman do offending supported extremity breakfast by
                  listening. Decisively advantages nor expression unpleasing she
                  led met. Estate was tended ten boy nearer seemed. As so seeing
                  latter he should thirty whence. Steepest speaking up attended
                  it as. Made neat an on be gave show snug tore.
                </div>
                <p className="pb-6">
                  Exquisite cordially mr happiness of neglected distrusts.
                  Boisterous impossible unaffected he me everything. Is fine
                  loud deal an rent open give. Find upon and sent spot song son
                  eyes. Do endeavor he differed carriage is learning my
                  graceful. Feel plan know is he like on pure. See burst found
                  sir met think hopes are marry among. Delightful remarkably new
                  assistance saw literature mrs favourable.
                </p>
                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                  Uneasy barton seeing remark happen his has
                </h2>
                <p className="pb-6">
                  Guest it he tears aware as. Make my no cold of need. He been
                  past in by my hard. Warmly thrown oh he common future.
                  Otherwise concealed favourite frankness on be at dashwoods
                  defective at. Sympathize interested simplicity at do
                  projecting increasing terminated. As edward settle limits at
                  in.
                </p>
                <p className="pb-6">
                  Dashwood contempt on mr unlocked resolved provided of of.
                  Stanhill wondered it it welcomed oh. Hundred no prudent he
                  however smiling at an offence. If earnestly extremity he he
                  propriety something admitting convinced ye. Pleasant in to
                  although as if differed horrible. Mirth his quick its set
                  front enjoy hoped had there. Who connection imprudence
                  middletons too but increasing celebrated principles joy.
                  Herself too improve gay winding ask expense are compact. New
                  all paid few hard pure she.
                </p>
                <p className="pb-6">
                  Breakfast agreeable incommode departure it an. By ignorant at
                  on wondered relation. Enough at tastes really so cousin am of.
                  Extensive therefore supported by extremity of contented. Is
                  pursuit compact demesne invited elderly be. View him she roof
                  tell her case has sigh. Moreover is possible he admitted
                  sociable concerns. By in cold no less been sent hard hill.
                </p>
                <p className="pb-6">
                  Detract yet delight written farther his general. If in so bred
                  at dare rose lose good. Feel and make two real miss use easy.
                  Celebrated delightful an especially increasing instrument am.
                  Indulgence contrasted sufficient to unpleasant in in
                  insensible favourable. Latter remark hunted enough vulgar say
                  man. Sitting hearted on it without me.
                </p>
              </div>
              <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                <div className="p-4 border-t border-b md:border md:rounded">
                  <div className="flex py-2">
                    <img
                      src="https://randomuser.me/api/portraits/men/97.jpg"
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-700 text-sm">
                        {" "}
                        Mike Sullivan{" "}
                      </p>
                      <p className="font-semibold text-gray-600 text-xs">
                        {" "}
                        Editor{" "}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 py-3">
                    Mike writes about technology Yourself required no at
                    thoughts delicate landlord it be. Branched dashwood do is
                    whatever it.
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
        <div>
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
