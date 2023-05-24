import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";
import { PhotoItem } from "./PhotoItem";

type Props = {
  photos: Photo[] | undefined;
};
export function PhotoGrid({ photos }: Props) {
  return (
    <div className="grid cols-1 gap-4 mt-24">
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
