import Image from "next/image";
import ReelsScroller from "../ReelsScroller";

const challenges = [
  {
    id: 1,
    name: "Selfie Challenge",
    image: "https://cdn-icons-png.flaticon.com/128/3039/3039403.png",
    gradient: "from-blue-500 via-teal-400 to-green-500",
  },
  {
    id: 2,
    name: "Dance Challenge",
    image: "https://cdn-icons-png.flaticon.com/128/4108/4108204.png",
    gradient: "from-pink-500 via-red-400 to-yellow-500",
  },
  {
    id: 3,
    name: "Foodie Challenge",
    image: "https://cdn-icons-png.flaticon.com/128/1046/1046784.png",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "Fitness Challenge",
    image: "https://cdn-icons-png.flaticon.com/128/3061/3061322.png",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    id: 5,
    name: "Viral Hashtag",
    image: "https://cdn-icons-png.flaticon.com/128/747/747630.png",
    gradient: "from-gray-500 via-gray-600 to-gray-800",
  },
  {
    id: 6,
    name: "Travel Challenge",
    image: "https://cdn-icons-png.flaticon.com/128/2013/2013745.png",
    gradient: "from-green-400 via-blue-500 to-purple-600",
  },
];

export const Challenges = () => {
  return (
    <div>
        <div className="p-4">
            <h5 className="font-bold text-lg text-indigo-600">Let's start with a challenge.</h5>
            <p>Win Exciting Prizes</p>
        </div>
    <div className="flex flex-wrap">
      {challenges.map((challenge) => (
        <div key={challenge.id} className="w-1/3 p-2">
          <div
            className={`bg-gradient-to-r ${challenge.gradient} text-center p-5 rounded-lg text-white shadow-lg`}
          >
            <Image
              alt={challenge.name}
              src={challenge.image}
              height={100}
              width={100}
              className="m-auto"
            />
            <p className="mt-2 font-semibold">{challenge.name}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="p-4">
    <h5 className="font-bold text-lg text-indigo-600">My Challenges</h5>
    <p>Your all participations and score</p> 
    </div>

    <ReelsScroller  size={"large"} limit={3} />

    </div>
  );
};
