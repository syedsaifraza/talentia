import Image, { StaticImageData } from "next/image";

interface JobItemProps {
  logo: StaticImageData;
  title: string;
  company: string;
  location: string;
  salary?: string;
}

export const JobItem: React.FC<JobItemProps> = ({
  logo,
  title,
  company,
  location,
  salary,
}) => {
  return (
    <>
      <div className="">
        <div className="group mx-2 mt-5 grid max-w-screen-md grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto" >
          <a
            href="#"
            className="order-2 col-span-1  -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4"
          >
            <div className="group  relative h-13 w-12 overflow-hidden rounded-lg">
              <Image
                src={logo}
                alt="logo"
                width={64}
                height={64}
                className="h-full w-full object-cover text-gray-700"
              />
            </div>
          </a>
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <h2 className="text-[20px] text-bold text-gray-600">{company}</h2>
            <a
              href="#"
              className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"
            >
              {title}
            </a>
            <p className="overflow-hidden pr-7 mb-3 text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <p className="overflow-hidden pr-7 text-sm">
              {company} - {location}
            </p>
            <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div>
                Experience:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                  2 Years
                </span>
              </div>
              <div>
                Salary:
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  {salary}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};