import { FaTimes, FaSmile, FaChevronLeft } from "react-icons/fa";
import DefaultAvatar from "./defaultAvatar";
import { useState } from "react";
import { Feelings, FeelingsList } from "@/lib/interfaces/types";

export default function FeelingActivitySelectionCard({ goBack,setFeeling,currentFeeling,currentType,actInput,setactInput,  setCurrentType }: { goBack: any,setFeeling:(feel:Feelings)=>void,currentFeeling?:Feelings,currentType?:string,setCurrentType:any,setactInput:any,actInput:string|any }) {
  const [selectedFeeling, setSelectedFeeling] = useState<Feelings>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activityInput,setActivityInput]=useState(actInput);
  const [showInput,setShowInput]=useState(false);

  const handleSetCurrentFeeling=(feel:Feelings)=>{
     
    setFeeling(feel)
    
    setSelectedFeeling(feel)
    if(feel?.nextInput!=undefined){ 
      // alert(selectedFeeling!.nextInput)
    setShowInput(true)
    }else{
      
      setShowInput(false)
    } 
 
  }

  

  const feelingsList: FeelingsList = {
    feelings: [
      { text: "Happy", emoji: "😊" },
      { text: "Thoughtful", emoji: "🤔" },
      { text: "Sad", emoji: "😢" },
      { text: "Excited", emoji: "😄" },
      { text: "Angry", emoji: "😡" },
      { text: "Tired", emoji: "😴" },
      { text: "Grateful", emoji: "🙏" },
      { text: "Motivated", emoji: "🔥" },
      { text: "Nervous", emoji: "😬" },
      { text: "Lonely", emoji: "😔" },
      { text: "Blessed", emoji: "🕊️" },
      { text: "Hopeful", emoji: "🌈" },
      { text: "Confused", emoji: "😕" },
      { text: "Joyful", emoji: "😃" },
      { text: "Loved", emoji: "❤️" },
      { text: "Bored", emoji: "🥱" },
      { text: "Optimistic", emoji: "🤞" },
      { text: "Anxious", emoji: "😟" },
      { text: "Calm", emoji: "😌" },
      { text: "Peaceful", emoji: "🧘" },
      { text: "Disappointed", emoji: "😞" },
      { text: "Cheerful", emoji: "😁" },
      { text: "Productive", emoji: "📈" },
      { text: "Romantic", emoji: "💘" },
      { text: "Hungry", emoji: "🍔" },
      { text: "Energetic", emoji: "⚡" },
      { text: "Determined", emoji: "🎯" },
      { text: "Frustrated", emoji: "😤" },
      { text: "Proud", emoji: "🏆" },
      { text: "Sick", emoji: "🤒" },
      { text: "Shy", emoji: "😳" },
      { text: "Guilty", emoji: "😔" },
      { text: "Jealous", emoji: "😒" },
      { text: "Silly", emoji: "😜" },
      { text: "Relaxed", emoji: "🌴" },
      { text: "Curious", emoji: "🤔" },
      { text: "Surprised", emoji: "😲" },
      { text: "Cold", emoji: "🥶" },
      { text: "Hot", emoji: "🥵" },
      { text: "Sleepy", emoji: "😪" },
      { text: "Thankful", emoji: "💐" }
    ],
    activities: [
      { text: "Traveling", emoji: "✈️", nextInput: "Where are you travelling?" },
      { text: "Watching a movie", emoji: "🎬", nextInput: "What are you watching?" },
      { text: "Listening to music", emoji: "🎧", nextInput: "What are you Listening?" },
      { text: "Working", emoji: "💻" },
      { text: "Cooking", emoji: "🍳", nextInput: "What are you Cooking?" },
      { text: "Eating out", emoji: "🍽️", nextInput: "At place?" },
      { text: "Studying", emoji: "📚" },
      { text: "Working out", emoji: "🏋️" },
      { text: "Playing games", emoji: "🎮" },
      { text: "Reading", emoji: "📖", nextInput: "What are you Reading?" },
      { text: "Shopping", emoji: "🛍️", nextInput: "Shopping at?" },
      { text: "Walking", emoji: "🚶" },
      { text: "Meditating", emoji: "🧘" },
      { text: "Drawing", emoji: "🎨" },
      { text: "Dancing", emoji: "💃" },
      { text: "Running", emoji: "🏃" },
      { text: "Cycling", emoji: "🚴" },
      { text: "Swimming", emoji: "🏊" },
      { text: "Watching TV", emoji: "📺", nextInput: "Program Name?" },
      { text: "Gardening", emoji: "🌱" },
      { text: "Singing", emoji: "🎤" },
      { text: "Going to the gym", emoji: "🏋️" },
      { text: "Exploring nature", emoji: "🌳", nextInput: "Where ?" },
      { text: "Cuddling pets", emoji: "🐶" },
      { text: "Cleaning", emoji: "🧹" },
      { text: "Writing", emoji: "✍️", nextInput: "What are you writing?" },
      { text: "Biking", emoji: "🚲" },
      { text: "Skating", emoji: "🛹" },
      { text: "Working on a project", emoji: "🛠️", nextInput: "On What Project?" },
      { text: "Volunteering", emoji: "🤝" },
      { text: "Celebrating", emoji: "🎉", nextInput: "What are you celebrating?" },
      { text: "Taking photos", emoji: "📸" },
      { text: "On a date", emoji: "💑" },
      { text: "Chilling at home", emoji: "🏠" },
      { text: "Playing instruments", emoji: "🎸", nextInput: "Which one?" },
      { text: "Praying", emoji: "🛐" },
      { text: "Hosting a party", emoji: "🥳", nextInput: "Where?" },
      { text: "Going out", emoji: "🌆", nextInput: "Where?" },
      { text: "Camping", emoji: "🏕️", nextInput: "Where?" },
      { text: "Learning something new", emoji: "🧠", nextInput: "What?" }
    ]
  };

  const getFilteredList = () => {
    const list = currentType === "feelings" ? feelingsList.feelings : feelingsList.activities;
    const filtered = list.filter(item => item.text.toLowerCase().includes(searchTerm.toLowerCase()));
    return filtered.slice(0, 6); // Show only top 10
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100" style={{ height: "auto", width: "500px" }}>
      <div className="flex justify-start items-center border-b-2 border-gray-200 p-4">
        <FaChevronLeft size={30} className="cursor-pointer px-2" onClick={() => goBack()} />
        <h4 className="font-normal">Choose What you are feeling?</h4>
      </div>

      <div className="flex-col p-4 items-start">
        <div className="flex">
          <div className={`w-1/2 text-center p-2 ${currentType === 'feelings' ? 'bg-blue-500 text-white' : 'bg-blue-100'} hover:cursor-pointer`} onClick={() => { setCurrentType("feelings"); setSearchTerm(""); }}>Feeling</div>
          <div className={`w-1/2 text-center p-2 ${currentType === 'activities' ? 'bg-blue-500 text-white' : 'bg-blue-100'} hover:cursor-pointer`} onClick={() => { setCurrentType("activities"); setSearchTerm(""); }}>Activity</div>
        </div>

        <div className="py-2 w-100">
          <input
            className="p-2 bg-gray-100 rounded-lg w-full"
            readOnly={!(currentType === "feelings" || currentType === "activities")}
            placeholder={`Search to find ${currentType || "select type"}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {(currentType === "feelings" || currentType === "activities") &&
        <>
          <ul className="flex flex-wrap">
            {getFilteredList().map((type: Feelings, idx) => (
              <li className="w-1/2 p-1" key={idx}>
                <div className={`bg-green-50 p-2 hover:cursor-pointer hover:bg-green-500 hover:text-white flex justify-between ${currentFeeling?.text==type.text?'bg-green-500 text-white':''}`} onClick={()=>handleSetCurrentFeeling(type) } >   {type.text} {type.emoji}  </div>
              </li>
            ))}
          </ul>
          {showInput==true?<input type="text" className="p-2 bg-gray-100 w-full mt-3 border-2 border-blue-100" onChange={(e)=>setactInput(e.target.value)} placeholder={currentFeeling?.nextInput||"Enter More"}/>:""}
          
          <p className="text-xs mx-2">Search for more</p>
          </>
        }

        <br />
        <div className="flex justify-end">
          <button className="bg-blue-600 text-sm text-white p-2 rounded-lg" type="button"  onClick={()=>goBack()}>Continue to Post</button>
        </div>
      </div>
    </div>
  );
}
