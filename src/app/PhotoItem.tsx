import Image from "next/image";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";

type Props = {
  photo: Photo;
};
export function PhotoItem({ photo }: Props) {
  return (
    <div>
      <Image
        src={photo.urls.regular}
        sizes="33vw"
        fill
        alt={photo.alt_description || photo.description || photo.id}
      />
    </div>
  );
}
