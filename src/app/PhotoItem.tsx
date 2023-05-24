import Image from "next/image";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";

type Props = {
  photo: Photo;
};
export function PhotoItem({ photo }: Props) {
  return (
    <div className="relative w-[324px] h-[300px] m-auto">
      <Image
        src={photo.urls.regular}
        fill
        className="object-cover w-full h-full"
        alt={photo.alt_description || photo.description || photo.id}
      />
    </div>
  );
}
