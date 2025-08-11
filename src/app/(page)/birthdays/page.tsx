'use client';
import NameAvatar from '@/component/components/nameAvatar';
import NoData from '@/component/components/NoData';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Page() {
  const [mounted, setMounted] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [message, setMessage] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const followings = useSelector((state: any) => state.auth.followings || []);
  const followers = useSelector((state: any) => state.auth.followers || []);
  const followersIds: string[] = followers.map((follower: any) => follower.uid);
  const connections = followings.filter((following: any) =>
    followersIds.includes(following.uid)
  );

  useEffect(() => {
    setMounted(true);
    setCurrentMonth(new Date().getMonth());
  }, []);

  if (!mounted) return null;

  // Group connections by birth month (only current and next 2 months)
  const groupByBirthMonth = () => {
    const monthGroups: Record<number, any[]> = {};
    const current = new Date().getMonth();
    
    // Initialize only current and next 2 months
    for (let i = 0; i < 3; i++) {
      const month = (current + i) % 12;
      monthGroups[month] = [];
    }
    
    connections.forEach((user: any) => {
      if (!user.dob) return;
      
      const [day, month, year] = user.dob.split('/').map(Number);
      if (isNaN(month)) return;
      
      const birthMonth = month - 1; // Convert to 0-11
      
      // Check if birth month is within current, next, or next+1 month
      const isCurrent = birthMonth === current;
      const isNext = birthMonth === (current + 1) % 12;
      const isNextNext = birthMonth === (current + 2) % 12;
      
      if (isCurrent || isNext || isNextNext) {
        monthGroups[birthMonth].push({
          ...user,
          birthDay: day,
          birthMonth: month,
          birthYear: year
        });
      }
    });
    
    // Sort each month's birthdays by day
    Object.keys(monthGroups).forEach(month => {
      monthGroups[parseInt(month)].sort((a, b) => a.birthDay - b.birthDay);
    });

    return monthGroups;
  };

  const birthMonthGroups = groupByBirthMonth();
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get the months to display (current and next 2)
  const monthsToDisplay = [
    currentMonth,
    (currentMonth + 1) % 12,
    (currentMonth + 2) % 12
  ];

  const handleSendMessage = () => {
    // Here you would typically send the message to the user
    console.log(`Sending message to ${selectedUser.name}: ${message}`);
    alert(`Birthday message sent to ${selectedUser.name}!`);
    setSelectedUser(null);
    setMessage('');
  };

  const toggleMonth = (month: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setExpandedMonth(expandedMonth === month ? null : month);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Calculate days until birthday
  const getDaysUntilBirthday = (birthDay: number, birthMonth: number) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthday = new Date(currentYear, birthMonth - 1, birthDay);
    
    if (nextBirthday < today) {
      nextBirthday.setFullYear(currentYear + 1);
    }
    
    const diffTime = nextBirthday.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays === 0 ? "Today!" : diffDays === 1 ? "Tomorrow" : `${diffDays} days`;
  };

  return (
    <div className="min-h-screen p-4 flex justify-center">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto w-[700px]">
        <div style={{backgroundImage:"url('https://content.acetians.in/uploads/Static-page-design-v0-by-Vercel-08-08-2025_12_04_PM.png')",backgroundSize:"100%", backgroundPosition:"cover",
          backgroundRepeat:"no-repeat"
        }} className="rounded-3xl p-8 text-white shadow-lg mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center" >
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-800">Upcoming Birthdays</h1>
              <p className="text-purple-100 text-lg">
                Never miss a chance to celebrate your connections
              </p>
            </div>
            
          </div>
        </div>

        {connections.length === 0 ? (
          <NoData />
        ) : (
          <div className="space-y-6">
            {monthsToDisplay.map((month) => {
              const users = birthMonthGroups[month] || [];
              const isCurrentMonth = month === currentMonth;
              
              return (
                <div 
                  key={month}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div 
                    className={`flex justify-between items-center p-6 cursor-pointer ${isCurrentMonth ? 'bg-gradient-to-r from-purple-50 to-pink-50' : ''}`}
                    onClick={() => toggleMonth(month)}
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${isCurrentMonth ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">
                          {monthNames[month]}
                          {isCurrentMonth && <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Current</span>}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {users.length} birthday{users.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className={`p-2 rounded-full transition-transform duration-300 ${expandedMonth === month ? 'bg-purple-100 text-purple-600 rotate-180' : 'bg-gray-100'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedMonth === month ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {users.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 pt-0">
                        {users.map((user: any, index: number) => (
                          <div
                            key={index}
                            className="p-4 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer hover:translate-y-[-2px] flex items-center"
                            onClick={() => setSelectedUser(user)}
                          >
                            <div className="relative">
                              {!user.avatar && <NameAvatar name={user.name} size={48} />}
                              {user.avatar && (
                                <Image
                                  src={user.avatar || '/default-avatar.png'}
                                  alt={user.name || 'User'}
                                  height={48}
                                  width={48}
                                  className="rounded-full object-cover border-2 border-purple-200"
                                />
                              )}
                              <div className="absolute -bottom-1 -right-1 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m8-8v8m-16-8v8M9 4v7m6-7v7m-6 0h6" />
                                </svg>
                              </div>
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="font-medium text-gray-900">{user.name}</h4>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-sm text-gray-500">
                                  {user.birthDay}/{user.birthMonth}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${user.birthDay === new Date().getDate() && user.birthMonth - 1 === new Date().getMonth() ? 'bg-pink-100 text-pink-800' : 'bg-purple-100 text-purple-800'}`}>
                                  {getDaysUntilBirthday(user.birthDay, user.birthMonth)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="py-8 text-center text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        No birthdays this month
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Birthday message modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl transform transition-all duration-300 scale-100">
            <div className="flex items-center mb-4">
              {!selectedUser.avatar && <NameAvatar name={selectedUser.name} size={48} />}
              {selectedUser.avatar && (
                <Image
                  src={selectedUser.avatar || '/default-avatar.png'}
                  alt={selectedUser.name || 'User'}
                  height={48}
                  width={48}
                  className="rounded-full object-cover border-2 border-purple-200 mr-3"
                />
              )}
              <div>
                <h3 className="font-medium">
                  Send birthday message to {selectedUser.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Birthday: {selectedUser.birthDay}/{selectedUser.birthMonth}
                </p>
              </div>
            </div>
            
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              rows={4}
              placeholder={`Write a special message for ${selectedUser.name}'s birthday...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
              <button
                className={`px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${!message.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-700 hover:to-pink-700'}`}
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                Send Birthday Wishes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;