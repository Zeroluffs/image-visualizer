import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";
import { PhotoItem } from "./PhotoItem";

type Props = {
  photos: Photo[] | undefined;
};
export function PhotoGrid({ photos }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
