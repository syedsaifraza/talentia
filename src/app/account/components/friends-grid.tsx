import { FriendsCard } from "./friends-card";

export const FriendsGrid = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 11 }).map((_, index) => (
           <FriendsCard key={index} profileId={index+50}/>
        ))}
      </div>
    );
  };
  