"use client";
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaEllipsisH, FaSearch, FaFilter } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const Events = () => {
  // Sample events data
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2024",
      date: "2024-10-15",
      time: "10:00 AM",
      location: "Bangalore Convention Center",
      coverImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      attendees: 120,
      type: "public",
      category: "Professional",
      description: "Annual tech conference featuring AI, Web3, and cloud computing experts.",
      isOnline: false,
      going: 78,
      maybe: 32,
      notGoing: 10
    },
    {
      id: 2,
      title: "Virtual Design Workshop",
      date: "2024-09-20",
      time: "3:00 PM",
      location: "Zoom Meeting",
      coverImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      attendees: 500,
      type: "public",
      category: "Workshop",
      description: "Learn UI/UX design principles from industry leaders.",
      isOnline: true,
      going: 320,
      maybe: 150,
      notGoing: 30
    },
    {
      id: 3,
      title: "Rahul's Birthday Party",
      date: "2024-11-05",
      time: "7:00 PM",
      location: "Sky Lounge, Mumbai",
      coverImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      attendees: 50,
      type: "private",
      category: "Social",
      description: "Celebrating Rahul's 25th birthday with friends and family.",
      isOnline: false,
      going: 35,
      maybe: 10,
      notGoing: 5
    }
  ]);

  const [activeTab, setActiveTab] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    type: "public",
    category: "Social"
  });

  const handleRSVP = (eventId:any, action:any) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        if (action === "going") return { ...event, going: event.going + 1 };
        if (action === "maybe") return { ...event, maybe: event.maybe + 1 };
        if (action === "notGoing") return { ...event, notGoing: event.notGoing + 1 };
      }
      return event;
    }));
  };

  const handleCreateEvent = () => {
    const newId = Math.max(...events.map(e => e.id)) + 1;
    setEvents([...events, {
      id: newId,
      ...newEvent,
      attendees: 0,
      going: 0,
      maybe: 0,
      notGoing: 0,
      coverImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isOnline: newEvent.location.toLowerCase().includes("zoom") || newEvent.location.toLowerCase().includes("online")
    }]);
    setShowCreateModal(false);
    setNewEvent({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      type: "public",
      category: "Social"
    });
  };

  const filteredEvents = events.filter(event => {
    if (activeTab === "all") return true;
    if (activeTab === "online") return event.isOnline;
    if (activeTab === "today") return event.date === new Date().toISOString().split('T')[0];
    return event.category === activeTab;
  });

  return (
    <div className="max-w-6xl mx-auto p-1">
     
      <div className="bg-white static top-0 mb-3  shadow-lg border-b border-purple-100">
              <div className="max-w-4xl mx-auto px-2 py-8">
                <div className="flex items-center justify-between ">
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Events
                    </h1>
                    <p className="text-gray-600 mt-2 text-lg font-medium">
                      Here are your precious memories from previous years
                    </p>
                  </div>
                  <div className="text-right">
                    {/* <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-2">
                      <div className="text-gray-600 mt-2 text-[15px] font-medium">{today}</div>
                    </div> */}
                    <div className="text-center">
                      <button
                           onClick={() => setShowCreateModal(true)}
                        className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-purple-100 "
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">
                            <img
                            src={"https://content.acetians.in/uploads/button.png"}
                            alt="Create Community"
                            height={30}
                            width={30}
                              />
                           
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                         Create Event
                        </h2>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 p-3">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search events..." 
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button 
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "all" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
            onClick={() => setActiveTab("all")}
          >
            All Events
          </button>
          <button 
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "online" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
            onClick={() => setActiveTab("online")}
          >
            Online
          </button>
          <button 
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "today" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
            onClick={() => setActiveTab("today")}
          >
            Today
          </button>
          <button 
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "Social" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
            onClick={() => setActiveTab("Social")}
          >
            Social
          </button>
          <button 
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${activeTab === "Professional" ? "bg-blue-100 text-blue-600" : "bg-gray-100"}`}
            onClick={() => setActiveTab("Professional")}
          >
            Professional
          </button>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            {/* Event Cover */}
            <div className="relative h-48">
              <img 
                src={event.coverImage} 
                alt={event.title} 
                className="w-full h-full object-cover"
              />
              {event.isOnline && (
                <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs">
                  Online
                </span>
              )}
            </div>

            {/* Event Details */}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <FaEllipsisH />
                </button>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FaCalendarAlt className="text-blue-500" />
                <span>{event.date} • {event.time}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{event.location}</span>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <FaUsers className="text-purple-500" />
                <span>{event.attendees} attending ({event.going} going • {event.maybe} maybe)</span>
              </div>

              {/* RSVP Buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button 
                  className="bg-green-100 text-green-700 py-2 rounded hover:bg-green-200 transition"
                  onClick={() => handleRSVP(event.id, "going")}
                >
                  Going
                </button>
                <button 
                  className="bg-yellow-100 text-yellow-700 py-2 rounded hover:bg-yellow-200 transition"
                  onClick={() => handleRSVP(event.id, "maybe")}
                >
                  Maybe
                </button>
                <button 
                  className="bg-red-100 text-red-700 py-2 rounded hover:bg-red-200 transition"
                  onClick={() => handleRSVP(event.id, "notGoing")}
                >
                  Can't Go
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Event Title</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    className="w-full p-2 border rounded"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Time</label>
                  <input 
                    type="time" 
                    className="w-full p-2 border rounded"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Location</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Description</label>
                <textarea 
                  className="w-full p-2 border rounded"
                  rows={3}
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Event Type</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Category</label>
                  <select 
                    className="w-full p-2 border rounded"
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                  >
                    <option value="Social">Social</option>
                    <option value="Professional">Professional</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button 
                className="px-4 py-2 border rounded-lg"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={handleCreateEvent}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;