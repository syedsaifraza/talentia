import Image from "next/image";

interface CompanyListTileProps {
    logo: string;
    name: string;
    industry: string;
    link: string;
  }
  
  export default function CompanyTile({
    logo,
    name,
    industry,
    link,
  }: CompanyListTileProps) {
    return (
      <div className="flex items-center justify-between bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer mt-2">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt={name}
            width={200}
            height={200}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h4 className="text-md font-semibold text-gray-800">{name}</h4>
            <p className="text-sm text-gray-500">{industry}</p>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm hover:underline"
        >
          View
        </a>
      </div>
    );
  }
  