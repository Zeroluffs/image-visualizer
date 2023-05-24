import { Basic as Photo } from "unsplash-js/dist/methods/photos/types";
import { Header } from "./Header";
import { PhotoGrid } from "./PhotoGrid";

type Props = {
  coverPhoto: Photo | undefined | null;
  photos: Photo[] | undefined;
};

export function PhotoViewer({ coverPhoto, photos }: Props) {
  return (
    <>
      <Header
        backgroundUrl={coverPhoto?.urls.full}
        title="title"
        description="description"
      />
      <PhotoGrid photos={photos} />
    </>
  );
}
