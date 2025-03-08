import Image from "next/image";
import Link from "next/link";

export const SelfProfile = () => {
  return (
    <>
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-[12vh] overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-[6vw] h-[6vw] relative left-[-80px] -mt-10 border-4 border-white rounded-full overflow-hidden">
          <Link href="/account/profile">
            <img
              className="object-cover object-center h-[6vw]"
              src="https://randomuser.me/api/portraits/men/69.jpg"
              alt="Woman looking front"
            />
          </Link>
        </div>
        <div className=" mx-4">
          <h2 className="font-semibold">Rohit Saxena</h2>
          <p className="text-gray-500">Marketing Executive</p>
        </div>
        <ul className="py-4  text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <div>2k</div>
            <p className="text-xs">Followers</p>
          </li>
          <li className="flex flex-col items-center justify-between">
            <div>10k</div>
            <p className="text-xs">Following</p>
          </li>
          <li className="flex flex-col items-center justify-around">
            <div>15</div>
            <p className="text-xs">Post</p>
          </li>
        </ul>
      </div>
    </>
  );
};
