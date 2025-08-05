// "use client";
// import { FaBirthdayCake, FaGift, FaCalendarAlt } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa6";
// import { IoSend } from "react-icons/io5";
// import NameAvatar from '@/component/components/nameAvatar';
// import NoData from '@/component/components/NoData';
// import Image from 'next/image';
// import Link from 'next/link';
// import  { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// interface Friend {
//   id: number;
//   name: string;
//   image: string;
//   date: string;
//   isUpcoming: boolean;
// }

// interface MonthData {
//   month: string;
//   friends: Friend[];
// }

// interface Wish {
//   friendId: number;
//   text: string;
//   timestamp: string;
// }

// export default function Birthdays() {
//   const [expandedMonth, setExpandedMonth] = useState<string | null>(null);
//   const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
//   const [message, setMessage] = useState<string>("");
//   const [wishes, setWishes] = useState<Record<number, Wish[]>>({});
//   const [filteredMonths, setFilteredMonths] = useState<MonthData[]>([]);

//    const [mounted, setMounted] = useState(false);
//   const followings = useSelector((state: any) => state.auth.followings || []);
//   const followers = useSelector((state: any) => state.auth.followers || []);
//   const followersIds :string[]= followers.map((follower:any)=>follower.uid);
//   const birthdaysByMonth = followings.filter((following: any) =>
//   followersIds.includes(following.uid))

//   // Updated data structure with individual friend details
//   const birthdaysByMonth = [
//     {
//       month: "January",
//       friends: [
//         {
//           id: 1,
//           name: "Aarav Sharma",
//           image: "https://randomuser.me/api/portraits/men/1.jpg",
//           date: "January 5",
//           isUpcoming: false,
//         },
//         {
//           id: 2,
//           name: "Priya Patel",
//           image: "https://randomuser.me/api/portraits/women/1.jpg",
//           date: "January 14",
//           isUpcoming: false,
//         },
//         {
//           id: 3,
//           name: "Rahul Gupta",
//           image: "https://randomuser.me/api/portraits/men/2.jpg",
//           date: "January 26",
//           isUpcoming: false,
//         },
//       ],
//     },
//     {
//       month: "February",
//       friends: [
//         {
//           id: 4,
//           name: "Neha Singh",
//           image: "https://randomuser.me/api/portraits/women/2.jpg",
//           date: "February 2",
//           isUpcoming: false,
//         },
//         {
//           id: 5,
//           name: "Vikram Joshi",
//           image: "https://randomuser.me/api/portraits/men/3.jpg",
//           date: "February 14",
//           isUpcoming: false,
//         },
//       ],
//     },
//     {
//       month: "March",
//       friends: [
//         {
//           id: 6,
//           name: "Ananya Reddy",
//           image: "https://randomuser.me/api/portraits/women/3.jpg",
//           date: "March 8",
//           isUpcoming: false,
//         },
//         {
//           id: 7,
//           name: "Arjun Malhotra",
//           image: "https://randomuser.me/api/portraits/men/4.jpg",
//           date: "March 23",
//           isUpcoming: false,
//         },
//       ],
//     },
//     {
//       month: "April",
//       friends: [
//         {
//           id: 8,
//           name: "Ishaan Kumar",
//           image: "https://randomuser.me/api/portraits/men/5.jpg",
//           date: "April 10",
//           isUpcoming: false,
//         },
//         {
//           id: 9,
//           name: "Divya Iyer",
//           image: "https://randomuser.me/api/portraits/women/4.jpg",
//           date: "April 14",
//           isUpcoming: false,
//         },
//       ],
//     },
//     {
//       month: "May",
//       friends: [
//         {
//           id: 10,
//           name: "Kavya Nair",
//           image: "https://randomuser.me/api/portraits/women/5.jpg",
//           date: "May 1",
//           isUpcoming: false,
//         },
//         {
//           id: 11,
//           name: "Rohan Mehta",
//           image: "https://randomuser.me/api/portraits/men/6.jpg",
//           date: "May 18",
//           isUpcoming: false,
//         },
//       ],
//     },
//     {
//       month: "June",
//       friends: [
//         {
//           id: 12,
//           name: "Aditi Choudhary",
//           image: "https://randomuser.me/api/portraits/women/6.jpg",
//           date: "June 7",
//           isUpcoming: false,
//         },
//         {
//           id: 13,
//           name: "Siddharth Rao",
//           image: "https://randomuser.me/api/portraits/men/7.jpg",
//           date: "June 21",
//           isUpcoming: false,
//         },
//       ],
//     },
//     {
//       month: "July",
//       friends: [
//         {
//           id: 14,
//           name: "Tanvi Shah",
//           image: "https://randomuser.me/api/portraits/women/7.jpg",
//           date: "July 4",
//           isUpcoming: false,
//         },
//         {
//           id: 15,
//           name: "Aryan Verma",
//           image: "https://randomuser.me/api/portraits/men/8.jpg",
//           date: "July 29",
//           isUpcoming: true,
//         },
//       ],
//     },
//     {
//       month: "August",
//       friends: [
//         {
//           id: 16,
//           name: "Suresh Yadav",
//           image: "https://randomuser.me/api/portraits/men/9.jpg",
//           date: "August 15",
//           isUpcoming: true,
//         },
//         {
//           id: 17,
//           name: "Shiva Reddy",
//           image: "https://randomuser.me/api/portraits/men/10.jpg",
//           date: "August 22",
//           isUpcoming: true,
//         },
//         {
//           id: 18,
//           name: "Suraj Kabir",
//           image: "https://randomuser.me/api/portraits/men/11.jpg",
//           date: "August 27",
//           isUpcoming: true,
//         },
//         {
//           id: 19,
//           name: "Hemant Singh",
//           image: "https://randomuser.me/api/portraits/men/12.jpg",
//           date: "August 30",
//           isUpcoming: true,
//         },
//       ],
//     },
//     {
//       month: "September",
//       friends: [
//         {
//           id: 20,
//           name: "Rahul Pandey",
//           image: "https://randomuser.me/api/portraits/men/13.jpg",
//           date: "September 5",
//           isUpcoming: true,
//         },
//         {
//           id: 21,
//           name: "Priya Gupta",
//           image: "https://randomuser.me/api/portraits/women/8.jpg",
//           date: "September 14",
//           isUpcoming: true,
//         },
//         {
//           id: 22,
//           name: "Ankit Sharma",
//           image: "https://randomuser.me/api/portraits/men/14.jpg",
//           date: "September 28",
//           isUpcoming: true,
//         },
//       ],
//     },
//     {
//       month: "October",
//       friends: [
//         {
//           id: 23,
//           name: "Neha Kapoor",
//           image: "https://randomuser.me/api/portraits/women/9.jpg",
//           date: "October 2",
//           isUpcoming: true,
//         },
//         {
//           id: 24,
//           name: "Vikram Bhatia",
//           image: "https://randomuser.me/api/portraits/men/15.jpg",
//           date: "October 11",
//           isUpcoming: true,
//         },
//         {
//           id: 25,
//           name: "Sanjay Mishra",
//           image: "https://randomuser.me/api/portraits/men/16.jpg",
//           date: "October 31",
//           isUpcoming: true,
//         },
//       ],
//     },
//     {
//       month: "November",
//       friends: [
//         {
//           id: 26,
//           name: "Amit Desai",
//           image: "https://randomuser.me/api/portraits/men/17.jpg",
//           date: "November 7",
//           isUpcoming: true,
//         },
//         {
//           id: 27,
//           name: "Deepak Chaturvedi",
//           image: "https://randomuser.me/api/portraits/men/18.jpg",
//           date: "November 14",
//           isUpcoming: true,
//         },
//       ],
//     },
//     {
//       month: "December",
//       friends: [
//         {
//           id: 28,
//           name: "Anjali Trivedi",
//           image: "https://randomuser.me/api/portraits/women/10.jpg",
//           date: "December 3",
//           isUpcoming: true,
//         },
//         {
//           id: 29,
//           name: "Rajat Khanna",
//           image: "https://randomuser.me/api/portraits/men/19.jpg",
//           date: "December 25",
//           isUpcoming: true,
//         },
//         {
//           id: 30,
//           name: "Pooja Malhotra",
//           image: "https://randomuser.me/api/portraits/women/11.jpg",
//           date: "December 31",
//           isUpcoming: true,
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     // Get current month
//     const currentDate = new Date();
//     const currentMonth = currentDate.toLocaleString("default", {
//       month: "long",
//     });




//     // Find index of current month in the array
//     const currentMonthIndex = birthdaysByMonth.findIndex(
//       (month) => month.month === currentMonth
//     );

//     // Filter months from current month onwards
//     if (currentMonthIndex !== -1) {
//       setFilteredMonths(birthdaysByMonth.slice(currentMonthIndex));
//     } else {
//       // If current month not found (shouldn't happen), show all months
//       setFilteredMonths(birthdaysByMonth);
//     }
//   }, []);

//   const toggleMonth = (month: string) => {
//     setExpandedMonth(expandedMonth === month ? null : month);
//     setSelectedFriend(null); // Reset selected friend when collapsing month
//   };

//   const handleFriendSelect = (friend: Friend) => {
//     setSelectedFriend(friend);
//     setMessage(""); // Clear previous message
//   };

//   const handleSendWish = () => {
//     if (message.trim() && selectedFriend) {
//       const newWish = {
//         friendId: selectedFriend.id,
//         text: message,
//         timestamp: new Date().toLocaleString(),
//       };

//       setWishes((prev) => ({
//         ...prev,
//         [selectedFriend.id]: [...(prev[selectedFriend.id] || []), newWish],
//       }));

//       setMessage("");
//     }
//   };



//   return (
//     <div className="min-h-screen m-1 bg-gradient-to-br  from-purple-50 via-white to-pink-50">
      // <div className="bg-white static top-0   border-purple-100">
      //   <div className="max-w-4xl mx-auto px-4 py-8">
      //     <div className="flex items-center justify-between">
      //       <div>
      //         <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      //           Upcoming Birthdays
      //         </h1>
      //         <p className="text-gray-600 mt-2 text-[14px] font-medium">
      //          Wishing you a day filled with happiness and a year filled with joy
      //         </p>
      //       </div>
      //       <div className="text-right">
      //         <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-2">
      //           <div className="text-3xl">
                

      //             <img alt="Calendar Icon"
      //                     className="h-10 w-10"
      //                          src={"https://content.acetians.in/uploads/calendar.png"}
      //                   />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>


//       <div className=" mx-auto px-4 py-4 flex flex-col gap-3">
//         {filteredMonths.map((monthData) => (
//           <div
//             key={monthData.month}
//             className="bg-white p-10 rounded-3xl  overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 "
//           >
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleMonth(monthData.month)}
//             >
//               <div>
//                 <h2 className="font-bold text-lg text-gray-800">
//                   {monthData.month}
//                   <span className="ml-2 text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full">
//                     {monthData.friends.length}{" "}
//                     {monthData.friends.length > 1 ? "friends" : "friend"}
//                   </span>
//                 </h2>
//               </div>
//               <div className="text-gray-500">
//                 {/* {expandedMonth === monthData.month ?  : "▼"} */}
//                 <FaAngleDown className={`${expandedMonth === monthData.month ? "rotate-[180deg]" : "rotate-[0deg]" }`}/>
//               </div>
//             </div>

//             {expandedMonth === monthData.month && (
//               <div className="mt-4 animate-fadeIn">
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
//                   {monthData.friends.map((friend) => (
//                     <div
//                       key={friend.id}
//                       className={`p-3 rounded-lg border transition-all ${
//                         selectedFriend?.id === friend.id
//                           ? "border-pink-500 bg-pink-50"
//                           : "border-gray-200 hover:border-pink-300"
//                       }`}
//                       onClick={() => handleFriendSelect(friend)}
//                     >
//                       <div className="flex flex-row items-center justify-between text-center">
//                         <div  className="flex gap-3 flex-row items-center  text-center">
//                           <img
//                           alt={friend.name}
//                           className="h-16 w-16 rounded-full object-cover border-2 border-pink-200"
//                           src={friend.image}
//                         />
//                         <div>
//                            <h3 className=" font-medium text-gray-800">
//                           {friend.name}
//                         </h3>
//                         <div className="flex items-center text-xs text-gray-500 ">
//                           <FaCalendarAlt className="mr-1" />
//                           {friend.date}
//                         </div>
//                         </div>
                        
                       

//                         </div>

//                         {friend.isUpcoming ? (
//                           <span className="mt-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
//                             Upcoming
//                           </span>
//                         ) : ( <span className="mt-1 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
//                             Over
//                           </span>)}
                        
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {selectedFriend && (
//                   <div className="mt-6 border-t pt-4">
//                     <div className="flex items-center gap-3 mb-3">
//                       <img
//                         alt={selectedFriend.name}
//                         className="h-10 w-10 rounded-full object-cover border border-pink-300"
//                         src={selectedFriend.image}
//                       />
//                       <div>
//                         <h3 className="font-medium">
//                           Send wish to {selectedFriend.name}
//                         </h3>
//                         <p className="text-xs text-gray-500">
//                           Birthday on {selectedFriend.date}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex gap-2">
//                       <input
//                         type="text"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         placeholder={`Write a personal wish for ${selectedFriend.name}...`}
//                         className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
//                       />
//                       <button
//                         onClick={handleSendWish}
//                         className="bg-pink-500 text-white rounded-full p-2 flex justify-center items-center hover:bg-pink-600 transition-colors"
//                       >
//                         <IoSend />
//                       </button>
//                     </div>

//                     {wishes[selectedFriend.id]?.length > 0 && (
//                       <div className="mt-4 space-y-3">
//                         <h4 className="text-sm font-medium text-gray-700">
//                           Your wishes:
//                         </h4>
//                         {wishes[selectedFriend.id].map((wish, idx) => (
//                           <div
//                             key={idx}
//                             className="bg-gray-50 p-3 rounded-lg text-sm"
//                           >
//                             <p>{wish.text}</p>
//                             <p className="text-xs text-gray-500 mt-1">
//                               {wish.timestamp}
//                             </p>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




'use client';
import NameAvatar from '@/component/components/nameAvatar';
import NoData from '@/component/components/NoData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function Page() {
  const [mounted, setMounted] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [message, setMessage] = useState('');

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

  // Group connections by birth month
  const groupByBirthMonth = () => {
    const monthGroups: Record<number, any[]> = {};
    
    // Get current month (0-11)
    const current = new Date().getMonth();
    
    // Initialize all months from current to December
    for (let month = 0; month < 12; month++) {
      monthGroups[month] = [];
    }
    
    connections.forEach((user: any) => {
      if (!user.dob) return;
      
      const [day, month, year] = user.dob.split('/').map(Number);
      if (isNaN(month)) return;
      
      // Adjust month to be 0-11 (JavaScript Date format)
      const birthMonth = month - 1;
      
      // Only add if it's in current to December range

      // birthMonth >= current &&
      if (birthMonth) {
        if (!monthGroups[birthMonth]) {
          monthGroups[birthMonth] = [];
        }
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

  const handleSendMessage = () => {
    // Here you would typically send the message to the user
    console.log(`Sending message to ${selectedUser.name}: ${message}`);
    alert(`Birthday message sent to ${selectedUser.name}!`);
    setSelectedUser(null);
    setMessage('');
  };

  return (
    <div className="p-4">
      <div className="bg-white static top-0 border-purple-100">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Upcoming Birthdays
              </h1>
              <p className="text-gray-600 mt-2 text-[14px] font-medium">
                Wishing you a day filled with happiness and a year filled with joy
              </p>
            </div>
            <div className="text-right">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-2">
                <img 
                  alt="Calendar Icon"
                  className="h-10 w-10"
                  src={"https://content.acetians.in/uploads/calendar.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {connections.length === 0 ? (
        <NoData />
      ) : (
        <>
          {/* Birthday by month section */}
          <div className="mx-auto px-4 py-4 flex flex-col gap-3">  
            {Object.entries(birthMonthGroups).map(([month, users]) => {
              const monthInt = parseInt(month);
              return (
                <div 
                  key={month}   
                  className="bg-white p-6 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setExpandedMonth(expandedMonth === monthInt ? null : monthInt)}
                  >
                    <div className="font-medium">
                      {monthNames[monthInt]} - {users.length} birthday{users.length !== 1 ? 's' : ''}
                    </div>
                    {expandedMonth === monthInt ? <FaArrowUp /> : <FaArrowDown />}
                  </div>
                  
                  {expandedMonth === monthInt && users.length > 0 && (
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {users.map((user: any, index: number) => (
                        <div
                          key={index}
                          className="p-3 bg-white rounded-lg shadow-sm flex items-center space-x-3 cursor-pointer hover:bg-gray-100"
                          onClick={() => setSelectedUser(user)}
                        >
                          {!user.avatar && <NameAvatar name={user.name} size={40} />}
                          {user.avatar && (
                            <Image
                              src={user.avatar || '/default-avatar.png'}
                              alt={user.name || 'User'}
                              height={40}
                              width={40}
                              className="rounded-full object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">
                              {user.birthDay}/{user.birthMonth}/{user.birthYear}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {expandedMonth === monthInt && users.length === 0 && (
                    <div className="mt-3 text-gray-500 text-center py-4">
                      No birthdays this month
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Birthday message modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-medium mb-3">
              Send birthday message to {selectedUser.name}
            </h3>
            <textarea
              className="w-full p-2 border rounded mb-3"
              rows={4}
              placeholder={`Write a birthday message for ${selectedUser.name}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setSelectedUser(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;

