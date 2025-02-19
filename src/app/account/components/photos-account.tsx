import Image from "next/image";

export const AccountPhotos = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 11 }).map((_, index) => (
          <div key={index}>
            <Image width={100} height={100} fill
              className="h-auto max-w-full rounded-lg"
              src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-${index+1}.jpg`}
              alt={`Gallery Image ${index}`}
            />
          </div>
        ))}
      </div>
    );
  };
  