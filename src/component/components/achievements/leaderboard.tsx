import Image from "next/image";
import React from "react";


interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  country: string;
  countryFlag: string;
  points: number;
  bonusPoints?: number;
}

const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    name: "Mitchell Irn",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    country: "France",
    countryFlag: "https://media.flaticon.com/dist/min/img/flags/fr.svg",
    points: 61,
    bonusPoints: 10,
  },
  {
    rank: 2,
    name: "Dianne Russell",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    country: "France",
    countryFlag: "https://media.flaticon.com/dist/min/img/flags/fr.svg",
    points: 54,
  },
  {
    rank: 3,
    name: "Esther Howard",
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    country: "Brazil",
    countryFlag: "https://media.flaticon.com/dist/min/img/flags/br.svg",
    points: 52,
  },
  {
    rank: 4,
    name: "Robert Fox",
    avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    country: "Germany",
    countryFlag: "https://media.flaticon.com/dist/min/img/flags/de.svg",
    points: 49,
  },
  {
    rank: 4,
    name: "Jan Kowalski",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
    country: "Germany",
    countryFlag: "https://media.flaticon.com/dist/min/img/flags/de.svg",
    points: 49,
  },
];

const LeaderBoard: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Leaderboard</h2>
         
      </div>

      {/* Podium */}
      <div className="flex justify-center items-end gap-6 mb-6">
        <div className="flex flex-col items-center">
          <Image
                              alt="user"
                              height={10}
                              width={10} src="https://randomuser.me/api/portraits/men/80.jpg" className="w-12 h-12 rounded-full mb-2" />
          <span className="bg-gray-300 px-3 py-1 rounded-lg">2nd</span>
          <span className="text-sm">54 PTS - $80</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
                              alt="user"
                              height={10}
                              width={10} src="https://randomuser.me/api/portraits/men/81.jpg" className="w-16 h-16 rounded-full mb-2 border-4 border-yellow-400" />
          <span className="bg-yellow-400 px-3 py-1 rounded-lg">1st</span>
          <span className="text-sm">61 PTS - $100</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
                              alt="user"
                              height={10}
                              width={10} src="https://randomuser.me/api/portraits/men/82.jpg" className="w-12 h-12 rounded-full mb-2" />
          <span className="bg-gray-300 px-3 py-1 rounded-lg">3rd</span>
          <span className="text-sm">52 PTS - $40</span>
        </div>
      </div>

      {/* Announcement */}
      <div className="text-center mb-6">
        <p className="text-gray-600 text-sm">We have a winner!</p>
        <p className="font-bold">Wade Warren wins the main prize ($100), congratulations!</p>
      </div>

      {/* Leaderboard Table */}
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-500">
            <th className="pb-3">Place</th>
            <th className="pb-3">Name</th>
            <th className="pb-3">Predicted Champion</th>
            <th className="pb-3">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index} className="border-t">
              <td className="py-3">
                {player.rank === 1 ? "🏆" : player.rank === 2 ? "🥈" : player.rank === 3 ? "🥉" : "🏅"}
                {player.rank} 
              </td>
              <td className="flex items-center gap-2 py-3">
                <Image
                                    alt="user"
                                    height={10}
                                    width={10} src={player.avatar} className="w-8 h-8 rounded-full"   />
                {player.name}
              </td>
              <td className="flex items-center gap-2 py-3">
                <Image
                                    alt="user"
                                    height={10}
                                    width={10} src={player.countryFlag} className="w-5 h-5"   />
                {player.country}
                {player.bonusPoints && (
                  <span className="text-green-600 bg-green-100 px-2 py-1 text-xs rounded-lg">
                    +{player.bonusPoints} PTS
                  </span>
                )}
              </td>
              <td className="py-3 font-bold">{player.points} PTS</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer with News and Graphs */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        {/* Latest News */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Latest news</h3>
            <button className="text-blue-600 text-sm">See all</button>
          </div>
          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-3">
              <Image
                                  alt="user"
                                  height={10}
                                  width={10} src="https://cdn-icons-png.flaticon.com/128/9464/9464298.png" className="w-12 h-12 rounded-lg"   />
              <p className="text-sm">
                Talentia is offering creata as the prize to <strong>  100 winners </strong> of talents challege...
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                                  alt="user"
                                  height={10}
                                  width={10}  src="https://cdn-icons-png.flaticon.com/128/12886/12886549.png" className="w-12 h-12 rounded-lg"   />
              <p className="text-sm">
                <strong>Meet Iphone Winner</strong> Kamlesh won Iphone 16 last week using talentia...
              </p>
            </div>
          </div>
        </div>

        {/* Last Game Rating Graph */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">Last game rating</h3>
            <button className="text-blue-600 text-sm">See all</button>
          </div>
          <div className="mt-3 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">📊 Graph Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
