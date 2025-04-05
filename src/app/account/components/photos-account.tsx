import Image from "next/image";
import { FeaturedPhotos } from "@/lib/interfaces/types";

export const AccountPhotos = ({ photos }: { photos: FeaturedPhotos[] }) => { return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="relative w-full aspect-square">
          <Image
            src={photo.url}
            alt={`Account photo ${index + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
