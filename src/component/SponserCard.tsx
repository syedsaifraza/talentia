import Image from "next/image";

interface SponserCardProps {
    image: any;
    name: string;
    description: string;
    link: string;
  }
  
  export default function SponserCard({ image, name, description, link }: SponserCardProps) {
    return (
      <div className="bg-white rounded-[5px] shadow-lg p-2 w-full max-w-sm mx-auto hover:shadow-2xl transition-shadow mb-2  duration-300">
        <div className="flex items-center text-center">
          <Image
          width={200}
          height={100}
            src={image}
            alt={name}
            className="w-32 h-24 rounded-lg object-cover border-2 border-orange-500"
          />
          <div className="flex-col justify-start items-start py-2 px-1">
          <h6 className="text-md font-semibold text-gray-800 text-left">{name}</h6>
          <p className="text-gray-600 text-xs text-left font-normal">{description}</p>
        
          </div>
          
        </div>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 font-medium hover:underline"
          >
            Learn more →
          </a>
      </div>
    );
  }
  