import Image from "next/image";

interface JobItemProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
}

export const JobItem: React.FC<JobItemProps> = ({ logo, title, company, location, salary }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-2 space-x-4">
      <Image src={logo} alt="Company Logo" width={80} height={80} className="rounded-lg" />
      <div className="flex-1">
        <h3 className="text-blue-600 font-normal text-lg">{title}</h3>
        <p className="text-gray-600">{company} - {location}</p>
        {salary && <p className="text-green-500 font-semibold font-medium">{salary}</p>}
      </div>
    </div>
  );
};
