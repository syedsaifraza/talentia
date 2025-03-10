"use client";
import Video from "@/app/home/components/Videos";
import { useState } from "react";
import Image from "next/image";
import { IoSend } from "react-icons/io5";

export default function JobsPage() {
  return (
    <div>
      <ul className="flex flex-col gap-4 ">
        <li className="bg-white flex flex-col  gap-2 p-5 rounded-[10px]">
          <h1 className="text-[20px] font-bold py-4">Recent Birthday</h1>
          <div className="flex flex-row  gap-4 ">
            <div>
              <img
                className="w-12 h-12 rounded-full border"
                src="https://randomuser.me/api/portraits/men/69.jpg"
              />
            </div>

            <div>
              <p className="text-black font-bold">John Doe</p>
              <p className="text-gray-600 text-[12px]">9 March</p>
              <div className="flex flex-row border justify-between items-center rounded-[20px] p-3 mt-3">
                <input
                  type="text"
                  placeholder="Wish"
                  className="border-none w-full focus:outline-none focus:border-none"
                />
                <IoSend />
              </div>
              <ul className="flex flex-wrap gap-4 flex-row items-center mt-4">
                <li className="border px-2 py-1 rounded-[20px]">
                  Happy Birthday! Enjoy your day! 🥳🎉
                </li>
                <li className="border px-2 py-1 rounded-[20px]">HBD! 🎉🥳🎂</li>
                <li className="border px-2 py-1 rounded-[20px]">
                  Enjoy your birthday! 🎂🎉
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="bg-white flex flex-col  gap-2 p-5 rounded-[10px]">
          <h1 className="text-[20px] font-bold py-4">Upcomings Birthday</h1>
          <div className="flex flex-row justify-between items-center gap-4 py-2 border-b-[1px] ">
            <div className="flex flex-row  gap-4">
              <div>
                <img
                  className="w-12 h-12 rounded-full border"
                  src="https://randomuser.me/api/portraits/men/69.jpg"
                />
              </div>

              <div>
                <p className="text-black font-bold">John Doe</p>
                <p className="text-gray-600 text-[12px]">9 March</p>
              </div>
            </div>
            <button className="py-2  px-4 bg-sky-400 text-white font-bold rounded-[20px]">
              Message
            </button>
          </div>
          <div className="flex flex-row justify-between items-center gap-4 py-2 border-b-[1px] ">
            <div className="flex flex-row  gap-4">
              <div>
                <img
                  className="w-12 h-12 rounded-full border"
                  src="https://randomuser.me/api/portraits/men/69.jpg"
                />
              </div>

              <div>
                <p className="text-black font-bold">John Doe</p>
                <p className="text-gray-600 text-[12px]">9 March</p>
              </div>
            </div>
            <button className="py-2  px-4 bg-sky-400 text-white font-bold rounded-[20px]">
              Message
            </button>
          </div>
          <div className="flex flex-row justify-between items-center gap-4 py-2 border-b-[1px] ">
            <div className="flex flex-row  gap-4">
              <div>
                <img
                  className="w-12 h-12 rounded-full border"
                  src="https://randomuser.me/api/portraits/men/69.jpg"
                />
              </div>

              <div>
                <p className="text-black font-bold">John Doe</p>
                <p className="text-gray-600 text-[12px]">9 March</p>
              </div>
            </div>
            <button className="py-2  px-4 bg-sky-400 text-white font-bold rounded-[20px]">
              Message
            </button>
          </div>
        </li>

        <li className="bg-white flex flex-col  gap-2 p-5 rounded-[10px]">
          <h1 className="text-[20px] font-bold py-4">March</h1>
          <div className="flex flex-row  gap-4 ">
            <div>
              <img
                className="w-12 h-12 rounded-full border"
                src="https://randomuser.me/api/portraits/men/69.jpg"
              />
            </div>
            <div>
              <img
                className="w-12 h-12 rounded-full border"
                src="https://randomuser.me/api/portraits/men/69.jpg"
              />
            </div>
            <div>
              <img
                className="w-12 h-12 rounded-full border"
                src="https://randomuser.me/api/portraits/men/69.jpg"
              />
            </div>
            <div>
              <img
                className="w-12 h-12 rounded-full border"
                src="https://randomuser.me/api/portraits/men/69.jpg"
              />
            </div>
            <div>
              <img
                className="w-12 h-12 rounded-full border"
                src="https://randomuser.me/api/portraits/men/69.jpg"
              />
            </div>

          </div>
        </li>

      
      </ul>
    </div>
  );
}
