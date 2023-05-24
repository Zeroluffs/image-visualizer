import Image from "next/image";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";

type Props = {
  photo: Photo;
};
export function PhotoItem({ photo }: Props) {
  return (
    <div className="m-auto w-[324px]">
      <div className="relative w-full h-[300px]">
        <Image
          src={photo.urls.regular}
          fill
          className="object-cover w-full h-full"
          alt={photo.alt_description || photo.description || photo.id}
        />
      </div>
      <div className="flex flex-col mt-6 gap-2">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={photo.user.profile_image.small}
            width={24}
            height={24}
            alt={photo.user.name}
            className="rounded-full flex shrink-0"
          />
          <p className="text-sm font-semibold truncate">{photo.user.name}</p>
        </div>
        <p>{photo.updated_at}</p>
      </div>
    </div>
  );
}
