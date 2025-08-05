"use client"

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiCalendar, FiHash, FiTrendingUp } from 'react-icons/fi';
import { IoClose, IoFilter, IoSquare, IoVideocam } from 'react-icons/io5';

export default function FilterForm() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const handleResetForm = () => {
     setMediaType('all');
  setFromDate('');
  setToDate('');
  setHashtag('');
  setSortBy('newest');
  router.replace('/feed', { scroll: false });
};

  const [mediaType, setMediaType] = useState(searchParams.get('mediaType') || 'all');
  const [fromDate, setFromDate] = useState(searchParams.get('fromDate') || '');
  const [toDate, setToDate] = useState(searchParams.get('toDate') || '');
  const [hashtag, setHashtag] = useState(searchParams.get('hashtag') || '');
  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || 'newest');
  
  

 

  return (
    <div className="lg:block w-72  bg-white rounded-xl shadow-sm border border-red-100 top-4   pt-4 overflow-y-auto">
      <form method='get' action=""   className="w-72 p-5 bg-white rounded-xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-gray-800">Filters</h1>
         {(mediaType!=null || fromDate!==null || toDate!=null|| hashtag!=null || sortBy!=null)?<button className='px-2 bg-blue-100 flex justify-items-center align-items-center text-blue-500 rounded-lg text-bold text-sm' onClick={handleResetForm}> Remove <IoClose className="text-gray-500" /> </button>:<IoFilter className="text-gray-500" />}
           
        </div>

        {/* Media Type */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Media Type</h2>
          <div className="flex gap-2">
            <label className={`flex items-center gap-2 cursor-pointer ${mediaType === 'all' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'} py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all`}>
              <input
                type="radio"
                name="mediaType"
                value="all"
                className="hidden"
                checked={mediaType === 'all'}
                onChange={() => setMediaType('all')}
              />
              <IoSquare size={16} /> All
            </label>
            <label className={`flex items-center gap-2 cursor-pointer ${mediaType === 'video' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-600'} py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-100 transition-all`}>
              <input
                type="radio"
                name="mediaType"
                value="video"
                className="hidden"
                checked={mediaType === 'video'}
                onChange={() => setMediaType('video')}
              />
              <IoVideocam size={16} /> Videos
            </label>
          </div>
        </div>

        {/* Date Range */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
            <FiCalendar size={14} /> Date Range
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">From</label>
              <input
                type="date"
                name="fromDate"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">To</label>
              <input
                type="date"
                name="toDate"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Hashtag */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
            <FiHash size={14} /> Hashtag
          </h2>
          <input
            type="text"
            name="hashtag"
            value={hashtag}
            onChange={(e) => setHashtag(e.target.value)}
            placeholder="#keyword"
            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Sort By */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider flex items-center gap-2">
            <FiTrendingUp size={14} /> Sort By
          </h2>
          <select
            name="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Liked</option>
            <option value="comments">Most Commented</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}
