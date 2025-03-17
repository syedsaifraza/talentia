// src/app/account/components/friends-card.tsx
import Link from 'next/link';
import Image from 'next/image';

export const FriendsCard = ({ profileId }: { profileId: number }) => {
  return (
    <div key={profileId} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        {/* Dropdown button and other elements */}
      </div>
      <div className="flex flex-col items-center pb-10">
        <Image
          width={100}
          height={100}
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`https://randomuser.me/api/portraits/women/${profileId}.jpg`}
          alt="Profile image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <ul className="pt-2 mt-2 text-gray-700 flex items-center justify-around">
          <li className="flex flex-col items-center justify-around">
            <p className="text-xs">Followers</p>
            <div className="font-bold">2k</div>
          </li>
          <li className="flex flex-col items-center justify-between">
            <p className="text-xs">Following</p>
            <div className="font-bold">2.1k</div>
          </li>
          <li className="flex flex-col items-center justify-around">
            <p className="text-xs">Posts</p>
            <div className="font-bold">200</div>
          </li>
        </ul>
        <div className="flex mt-4 md:mt-6">
          <Link href={`/profile/${profileId}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Profile
          </Link>
          <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Message
          </a>
        </div>
      </div>
    </div>
  );
};